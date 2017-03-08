import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

import fs from 'fs';

// Reading all files from a directory:
// Node callback-style

fs.readdir('./src-server', (err, items) => {
  if (err) console.error(err);
  else {
    console.log(items);
  }
});

// Reading all files from a directory:
// Binding node callback to reactive observable

const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir);

readdir$('./src-server')
  .mergeMap((files) => Rx.Observable.from(files))
  .map(file => `manipulated ${file}`)
  .subscribe(createSubscriber('readdir'));

// Create observable from promise

function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 1000);
  });
}

Rx.Observable.fromPromise(getItem())
  .subscribe(createSubscriber('promise'));