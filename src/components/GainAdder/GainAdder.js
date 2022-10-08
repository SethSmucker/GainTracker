import { useRef } from 'react';

import useGainAdder from './useGainAdder';
import classes from './GainAdder.module.css';

function GainAdder() {
  const [showGainAdder, setShowGainAdder, submitGain] = useGainAdder();
  const titleInputRef = useRef();

  return (
    <div className={classes.stickBottomRight}>
      {showGainAdder && (
        <div>
          <div>
            <label htmlFor='title'>Gain Title:</label>
            <input id='title' type='text' required ref={titleInputRef} />
          </div>

          <div>
            <button
              onClick={() => {
                submitGain({
                    'title': titleInputRef.current.value,
                    "counter": 0,
                    "doneToday": false,
                    "daysDone": []
                });

                setShowGainAdder(false);
              }}
            >
              Add Gain
            </button>
            <button
              onClick={() => {
                setShowGainAdder(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!showGainAdder && (
        <button
          className={classes.newGainButton}
          onClick={() => {
            setShowGainAdder(true);
          }}
        >
          +
        </button>
      )}
    </div>
  );
}

export default GainAdder;
