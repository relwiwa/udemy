import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Subject example 1: Create simple Subject

/*const simple$ = new Rx.Subject();

simple$.subscribe(createSubscriber('simple$'));
simple$.next('hello');
simple$.next('world');
simple$.complete();


// Subject example 2: Subject that acts as proxy by subscribing to observable

const interval$ = Rx.Observable.interval(1000).take(5);
const intervalSubject$ = new Rx.Subject();
interval$.subscribe(intervalSubject$);

// intervalSubject is proxy for interval Observable
// i.e. subscribers subscribe to one shared observable that
// intervalSubject subscribed to
intervalSubject$.subscribe(createSubscriber('sub1'));
intervalSubject$.subscribe(createSubscriber('sub2'));
intervalSubject$.subscribe(createSubscriber('sub3'));

// this subscription will not get all values, but only those that
// intervalSubject gets from interval after this subscription started (3 secs)
setTimeout(() => {
  intervalSubject$.subscribe(createSubscriber('look at me!'));
}, 3000);*/


// Subject example 3: Logged in with Subject

/*const currentUser$ = new Rx.Subject();
const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);

isLoggedIn$.subscribe(createSubscriber('isLoggedIn'));

currentUser$.next({
  isLoggedIn: false
});

setTimeout(() => {
  currentUser$.next({
    isLoggedIn: true,
    name: 'nelson'
  });
}, 2000);

setTimeout(() => {
  isLoggedIn$.subscribe(createSubscriber('delayed'));
}, 1000);*/


// Subject example 4: LogIn state with BehaviorSubject

// BehaviorSubject saves current/previous and next value
/*const currentUser$ = new Rx.BehaviorSubject({
  isLoggedIn: false
});

const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);

isLoggedIn$.subscribe(createSubscriber('isLoggedIn'));

currentUser$.next({
  isLoggedIn: false
});

setTimeout(() => {
  currentUser$.next({
    isLoggedIn: true,
    name: 'nelson'
  });
}, 3000);

setTimeout(() => {
  isLoggedIn$.subscribe(createSubscriber('delayed'));
}, 1500);*/


// Subject example 5: ReplaySubject

// ReplaySubject's parameter indicates number of items it buffers
// ReplaySubect does not need an initial value
// ReplaySubject(1) equals BehaviorSubject, but does not always emit a value
/*const replay$ = new Rx.ReplaySubject(3);
replay$.next(1);
replay$.next(2);

replay$.subscribe(createSubscriber('one'));

replay$.next(3);
replay$.next(4);
replay$.next(5);

replay$.subscribe(createSubscriber('two'));*/


// Subject example 6: AsyncSubject

// AsyncSubject won't emit values until its complete function is called
// Then it will only emit the last value it received
// It will also store this value and emit it to future subscribers
const apiCall$ = new Rx.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe(createSubscriber('one'));
apiCall$.next(2);
apiCall$.complete();

setTimeout(() => {
  apiCall$.subscribe(createSubscriber('two'));
}, 2000);