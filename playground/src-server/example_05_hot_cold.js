import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Create hot observable from cold via publish and connect methods

// - publish method creates connectable observable
// - regardless of subscribers, it will only start emitting values after
//   connect is called
// - then it is a 'hot' observable
/*const interval$ = Rx.Observable.interval(1000)
  .take(10)
  .publish();
  
setTimeout(() => {
  interval$.connect();
}, 5000);

setTimeout(() => {
  interval$.subscribe(createSubscriber('one'));
}, 1200);

setTimeout(() => {
  interval$.subscribe(createSubscriber('two'));
}, 3000);*/



// Socket example turning cold into hot observable

/*const socket = { on: () => {} };

const chatMessages$ = new Rx.Observable(Observer => {
  console.log('subscribed');
  socket.on('chat:message', message => observer.next(message));
})
  .publish();

chatMessages$.connect();

chatMessages$.subscribe(createSubscriber('one'));
chatMessages$.subscribe(createSubscriber('two'));*/


// publishLast and publishReplay

/*const simple$ = new Rx.Observable(observer => {
  observer.next('one');
  observer.next('two');
  observer.next('three');
  observer.complete();
});

// publishLast

const publishedLast$ = simple$.publishLast();
publishedLast$.subscribe(createSubscriber('one-last'));
publishedLast$.connect();
publishedLast$.subscribe(createSubscriber('two-last'));

// publishReplay

const publishedReplay$ = simple$.publishReplay(2);
// one subscribes before connect, so it gets all values when connecting
publishedReplay$.subscribe(createSubscriber('one-replay'));
publishedReplay$.connect();
// two subscribes after connect, so it misses values and only gets amount
// of values set via publishReplay
publishedReplay$.subscribe(createSubscriber('two-replay'));*/



// Unsubscribing from hot observable

// Hot observable lives on without subscribers
// Explicit unsubscribe is necessary to dispose of it
/*const simple$ = new Rx.Observable(observer => {
  observer.next('one');
  observer.next('two');
  observer.next('three');

  return () => console.log('disposed');
});

const published$ = simple$.publishReplay(2);

const sub1 = published$.subscribe(createSubscriber('one'));
const connection = published$.connect();
const sub2 = published$.subscribe(createSubscriber('two'));

sub1.unsubscribe();
sub2.unsubscribe();

connection.unsubscribe();*/



// refCount and share

// Enables disposing of hot observables when there are no more subscribers:
// - refCount connects to observable as soon as there is a subscription
// - refCount disposes of observable as soon as there are no more subscribers
const simple$ = new Rx.Observable(observer => {
  observer.next('one');
  observer.next('two');
  observer.next('three');

  return () => console.log('disposed');
});

//const published$ = simple$.publish().refCount();
//const published$ = simple$.publishReplay(2).refCount();

// share operator equals publish followed by refCount
const published$ = simple$.share();

const sub1 = published$.subscribe(createSubscriber('one'));
const sub2 = published$.subscribe(createSubscriber('two'));

sub1.unsubscribe();
sub2.unsubscribe();