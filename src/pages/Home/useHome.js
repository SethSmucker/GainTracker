import { /*format, parseISO, */ subDays } from 'date-fns';
import { useContext, useState, useEffect } from 'react';
import LocalGainsContext from '../../context/local-gains-context';
//import useGainSubset from '../../hooks/useGainSubset';

function useHome() {
  const LocalGainsCtx = useContext(LocalGainsContext);
  const [gainsOfTheDay, setGainsOfTheDay] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    let newSubset = [...LocalGainsCtx.localGains];
    newSubset.sort((a, b) => (a.counter >= b.counter ? 1 : -1));
    setGainsOfTheDay(newSubset.slice(0, 5));
  }, [LocalGainsCtx.localGains, setGainsOfTheDay]);

  useEffect(() => {
    let newWeeklyData = [];
    for (let num = 7; num >= 0; num--) {
      newWeeklyData.push({
        date: subDays(new Date(), num).toISOString().substring(0, 10),
        value: 0,
      });
    }

    LocalGainsCtx.localGains.forEach((curGain) => {
      curGain['daysDone']?.forEach((doneDate) => {
        newWeeklyData.forEach((weekDay) => {
          if (weekDay['date'] === doneDate) {
            weekDay['value']++;
          }
        });
      });
    });

    

    setWeeklyData([...newWeeklyData]);
  }, [LocalGainsCtx.localGains]);

  //https://stackoverflow.com/questions/56410369/can-i-call-separate-function-in-useeffect

  return [gainsOfTheDay, weeklyData];
}

export default useHome;
