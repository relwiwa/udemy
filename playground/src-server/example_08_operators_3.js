import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';


// mergeMap vs. map

// mergeMap flattens array, while map does not
// - mergeMap returns individual items from array
// - map returns individual items from array as arrays

/*function arrayMap(array, projection) {
  const returnArray = [];
  for (let item of array) {
    const projected = projection(item)
    returnArray.push(projected);
  }

  return returnArray;
}

function arrayMergeMap(array, projection) {
  const returnArray = [];
  for (let item of array) {
    const projectedArray = projection(item);
    for (let projected of projectedArray) {
      returnArray.push(projected);
    }
  }

  return returnArray;
}

const albums = [
  {
    title: 'album 1',
    tracks: [ {
      id: 1,
      title: 'track 1'
    }, {
      id: 2,
      title: 'track 2'
    }]
  }, {
    title: 'album 1',
    tracks: [ {
      id: 1,
      title: 'track 1'
    }, {
      id: 2,
      title: 'track 2'
    }]
  }
];

const tracksWrong = arrayMap(albums, album => album.tracks);
const tracksRight = arrayMergeMap(albums, album => album.tracks);

console.log(JSON.stringify(tracksWrong));
console.log(JSON.stringify(tracksRight));*/



// Example

// returns individual values
/*Rx.Observable.range(2, 3)
  .mergeMap(i => Rx.Observable.timer(i * 2000).map(() => `after ${i} seconds`))
  .subscribe(createSubscriber('mergeMap'));

// returns individual arrays
Rx.Observable.range(2, 3)
  .map(i => Rx.Observable.timer(i * 2000).map(() => `after ${i} seconds`))
  .subscribe(createSubscriber('map'));*/



// Example 

// returns individual values
/*Rx.Observable.fromPromise(getTracks())
  .mergeMap(tracks => Rx.Observable.from(tracks))
  .subscribe(createSubscriber('tracks-mergemap'));

// returns invididual array objects
Rx.Observable.fromPromise(getTracks())
  .map(tracks => Rx.Observable.from(tracks))
  .subscribe(createSubscriber('tracks-map'));

// returns all values as one 
Rx.Observable.fromPromise(getTracks())
  .subscribe(createSubscriber('tracks-no-merge/map'));


function getTracks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['track 1', 'track 2', 'track 3'])
    }, 1000);
  });
}*/


// Example

Rx.Observable.of('my query')
  .do(() => console.log('querying'))
  .mergeMap(a => query(a))
  .do(() => console.log('after querying'))
  .subscribe(createSubscriber('query'));

function query(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is the value');
    }, 1000);
  })
}
