/*

  local-gains-context.js

  Keeps a list of gains loaded. This list is what will be sent
  to GainCardList for display in AllGains.

  Gains are loaded automatically on compilation and after 
  Firebase updates.

*/

import { createContext, useState, useEffect } from 'react';

const LocalGainsContext = createContext({
  isLoading: false,
  localGains: [],
  fetchGains: (location) => {},
  incrementGain: (gainID) => {},
});

export function LocalGainsContextProvider(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [localGains, setLocalGains] = useState([]);

  //Loads all gains from Firebase
  function fetchGainsHandler() {
    console.log('Fetching gains...')
    setIsLoading(true);
    fetch('https://practice-tracker-v3-default-rtdb.firebaseio.com/gains.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const gains = [];

        for (const key in data) {
          const gain = {
            id: key,
            ...data[key],
          };

          gains.push(gain);
        }
        setIsLoading(false);
        setLocalGains(gains);
        console.log('Loaded gains!');
      });
  }

  //Takes a Gain object and increments it in the database,
  //then reloads the local gain data to reflect the change.
  function incrementGainHandler(gainData) {
    if (gainData.doneToday) {
      console.log('Gain already completed');
      return false;
    }
    
    if(gainData.daysDone === undefined){
      gainData.daysDone = [new Date().toISOString().substring(0, 10)];
    }
    else{
      gainData.daysDone.push(new Date().toISOString().substring(0, 10));
    }

    fetch(
      `https://practice-tracker-v3-default-rtdb.firebaseio.com/gains/${gainData.id}.json`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          counter: gainData.counter + 1,
          doneToday: true,
          daysDone: [...gainData.daysDone],
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      fetchGainsHandler();
    });

    return true;
  }

  useEffect(() => {
    fetchGainsHandler();
  }, []);

  const context = {
    isLoading: isLoading,
    localGains: localGains,
    fetchGains: fetchGainsHandler,
    incrementGain: incrementGainHandler,
  };

  return (
    <LocalGainsContext.Provider value={context}>
      {props.children}
    </LocalGainsContext.Provider>
  );
}

export default LocalGainsContext;
