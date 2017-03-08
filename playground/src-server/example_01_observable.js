import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Part 1: Observable with three ways to define next, error, and complete functions

/*const simple$ = new Rx.Observable(observer => {
  console.log('generating observable');
  setTimeout(() => {
    observer.next('an item!');
    setTimeout(() => {
      observer.next('another item');
      observer.complete();
    }, 1000)
  }, 1000)
});

const error$ = new Rx.Observable(observer => {
  observer.error(new Error('error happend'));
});


error$.subscribe(
  item => console.log('one.next', item),
  error => console.log('one.error', error),
  () => console.log('one.complete')
);

setTimeout(() => {
  simple$.subscribe({
    next: item => console.log('two.next', item),
    error(error) {
      console.log('two.error', error)
    },
    complete: function() {
      console.log('two.complete')
    }
  });
}, 3000);*/

// Part 2: Create nested observable and use custom take function

function createInterval$(time) {
  return new Rx.Observable(observer => {
    let index = 0;
    let interval = setInterval(() => {
      console.log(`generating ${index}`)
      observer.next(index++);
    }, time);

    // This gets executed when there are no more subscribers and
    // observable gets shutdown
    return () => {
      clearInterval(interval);
    }
  });
}

// Custom take function that accepts an observable
// - it creates internal observable and subscribes to source observable
// - it keeps subscription alive until the specified amount of items
function take$(sourceObservable$, amount) {
  return new Rx.Observable(observer => {
    let count = 0;
    const subscription = sourceObservable$.subscribe({
      // these three functions are handling input from sourceObservable
      // observer belongs to internal observable
      next(item) {
        // observer passes through the specified amount of values, before completing
        observer.next(item);
        if (++count >= amount) {
          observer.complete();
        }
      },
      error(error) { observer.error(error); },
      // if sourceObservable completes before amount of values is reached,
      // complete is passed to internal observable
      complete() { observer.complete(); }
    });

    return () => subscription.unsubscribe();
  });
}

const everySecond$ = createInterval$(1000);
const firstFiveSeconds$ = take$(everySecond$, 5);
const subscription = firstFiveSeconds$.subscribe(createSubscriber('one'));

let secondSubscription;
setTimeout(() => {
  secondSubscription = everySecond$.subscribe({
    next(item) { console.log('second subscription', item); }
  });
}, 2000);


setTimeout(() => {
  secondSubscription.unsubscribe();
}, 20000);