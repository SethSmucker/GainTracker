import { useState } from 'react';

function useGainSorter(parentArray, setParentArray) {
  const levenshtein = require('js-levenshtein');
  const [currentSort, setCurrentSort] = useState('none');

    console.log(parentArray);

  const sortByCounterHandler = () => {
    setParentArray([
      ...parentArray.sort(function (a, b) {
        return a.counter < b.counter ? 1 : -1;
      }),
    ]);

    setCurrentSort('counter');
  };

  const sortByDoneHandler = () => {
    setParentArray([
      ...parentArray.sort(function (a, b) {
        console.log('in the sorting function!');
        return a.doneToday === true && b.doneToday === false ? 1 : -1;
      }),
    ]);

    setCurrentSort('done');
    console.log('sorted!');
  };

  const sortByQueryHandler = (query) => {
    if (query !== '') {
      setParentArray([
        ...parentArray.sort(function (a, b) {
          return levenshtein(a.title.toLowerCase(), query.toLowerCase()) +
            query.length -
            a.title.length >
            levenshtein(b.title.toLowerCase(), query.toLowerCase()) +
              query.length -
              b.title.length
            ? 1
            : -1;
        }),
      ]);

      setCurrentSort('query');
    }

    console.log('query!');
  };

  const sortByNameHandler = () => {
    setParentArray([
      ...parentArray.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      }),
    ]);

    setCurrentSort('name');
  };

  
  return [
    currentSort,
    {
      sortByDone: sortByDoneHandler,
      sortByQuery: sortByQueryHandler,
      sortByName: sortByNameHandler,
      sortByCounter: sortByCounterHandler,
    },
  ];
}

export default useGainSorter;
