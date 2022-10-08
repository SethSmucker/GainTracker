import { useContext } from 'react';
import LocalGainsContext from '../../context/local-gains-context';
import {
  pushDummyData,
  clearAllData,
  undoneAllData,
} from '../../data/dev-database-tools';

function DevTools() {
  const LocalGainsCtx = useContext(LocalGainsContext);

  return (
    <div>
      <button
        onClick={() =>
          pushDummyData(() => {
            LocalGainsCtx.fetchGains();
          })
        }
      >
        Load Dummy Data
      </button>
      <button
        onClick={() =>
          clearAllData(() => {
            LocalGainsCtx.fetchGains();
          })
        }
      >
        Clear All Data
      </button>
      <button
        onClick={() =>
          undoneAllData(() => {
            LocalGainsCtx.fetchGains();
          })
        }
      >
        Un-Done All Data
      </button>
    </div>
  );
}

export default DevTools;
