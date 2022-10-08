import useGainSorter from './useGainSorter';
import classes from './GainSorter.module.css';

//Takes a list of gains and allows them to be sorted.
//Used as a middle man between local-gains-context and a page
function GainSorter(props) {
  const [currentSort, { sortByDone, sortByQuery, sortByName, sortByCounter }] =
    useGainSorter(props.parentArray, props.setParentArray);

  return (
    <div className={classes.container}>
      <input
        type='text'
        id='query'
        name='sort'
        selected={currentSort === 'query'}
        onChange={(e) => {
          sortByQuery(e.target.value);
        }}
      />
      <input
        type='radio'
        id='done'
        name='sort'
        selected={currentSort === 'done'}
        onClick={() => {
          sortByDone();
        }}
      />
      <label
        className={
          currentSort === 'done' ? classes.selected : classes.unselected
        }
        htmlFor='done'
      >
        Done
      </label>
      <br></br>
      <input
        type='radio'
        id='name'
        name='sort'
        selected={currentSort === 'name'}
        onClick={() => {
          sortByName();
        }}
      />
      <label
        className={
          currentSort === 'name' ? classes.selected : classes.unselected
        }
        htmlFor='name'
      >
        Name
      </label>
      <br></br>
      <input
        type='radio'
        id='Counter'
        name='sort'
        selected={currentSort === 'counter'}
        onClick={() => {
          sortByCounter();
        }}
      />
      <label
        className={
          currentSort === 'counter' ? classes.selected : classes.unselected
        }
        htmlFor='Counter'
      >
        Counter
      </label>
      <br></br>
    </div>
  );
}

export default GainSorter;
