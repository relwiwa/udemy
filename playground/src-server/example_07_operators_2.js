import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// merge

Rx.Observable.interval(1000)
  .take(5)
  .merge(Rx.Observable.interval(500))
  .take(20)
  .subscribe(createSubscriber('merge1'));

Rx.Observable.merge(
  Rx.Observable.interval(1000).map(i => `${i} seconds`),
  Rx.Observable.interval(500).map(i => `${i} half seconds`))
  .take(10)
  .subscribe(createSubscriber('merge2'));

// Non-functioning Example for user login handling
/*const currentUser$ = Rx.Observable.merge(
  socket.on$('login').map(user => processUser(user)),
  socket.on$('logout').map(() => null));*/



/* concat
   - concatenates values of observables
   - concatenation only takes places after one observable is complete */
Rx.Observable.interval(500)
  .take(3)
  .concat(Rx.Observable.range(10, 3))
  .subscribe(createSubscriber('concat1'));

Rx.Observable.concat(
  Rx.Observable.interval(1000).map(i => `${i} seconds`).take(3),
  Rx.Observable.interval(500).map(i => `${i} half seconds`))
  .take(10)
  .subscribe(createSubscriber('concat2'));
