import { useContext, useState } from 'react';
import LocalGainsContext from '../../context/local-gains-context';

function useGainAdder() {
  const localGainsCtx = useContext(LocalGainsContext);
  const [showGainAdder, setShowGainAdder] = useState(false);

  //takes a gain JSON Object as parameter and sends it!
  const submitGainHandler = (gain) => {
    if (gain.title.length < 3) {
      alert('Error! Make sure your gain title is 3 characters or longer!');
    } else {
      fetch(
        'https://practice-tracker-v3-default-rtdb.firebaseio.com/gains.json',
        {
          method: 'POST',
          body: JSON.stringify(gain), //SET UP THE GAIN DATA HERE
          headers: {
            'Content-Type': 'applocation/json',
          },
        }
      ).then(localGainsCtx.fetchGains);
    }
  };

  return [showGainAdder, setShowGainAdder, submitGainHandler];
}

export default useGainAdder;
