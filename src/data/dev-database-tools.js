import dummyData from './dummy-data.json';

export function pushDummyData(cb) {
  const allPromises = [];

  dummyData['gains'].forEach((gain) => {
    allPromises.push(
      fetch(
        'https://practice-tracker-v3-default-rtdb.firebaseio.com/gains.json',
        {
          method: 'POST',
          body: JSON.stringify(gain),
          headers: {
            'Content-Type': 'applocation/json',
          },
        }
      )
    );
  });

  Promise.all(allPromises).then(() => {
    console.log('All dummy data pushed!');
    cb();
  });

  fetch(
    'https://practice-tracker-v3-default-rtdb.firebaseio.com/.json',
    {
      method: 'POST',
      body: JSON.stringify(dummyData["lastRefreshDate"]),
      headers: {
        'Content-Type': 'applocation/json',
      },
    })
}

export function clearAllData(cb) {
  fetch('https://practice-tracker-v3-default-rtdb.firebaseio.com/gains.json', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'applocation/json',
    },
  }).then(() => {
    console.log('All data deleted!');
    cb();
  });
}

export function undoneAllData(cb) {

  fetch('https://practice-tracker-v3-default-rtdb.firebaseio.com/gains.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'applocation/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const allPromises = [];
      for (const id in data) {
        allPromises.push(
          fetch(
            `https://practice-tracker-v3-default-rtdb.firebaseio.com/gains/${id}.json`,
            {
              method: 'PATCH',
              body: JSON.stringify({
                doneToday: false,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
        );
      }

      Promise.all(allPromises).then(() => {
        console.log('All undones done!');
        cb();
      });
    });


}
