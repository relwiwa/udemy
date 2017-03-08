import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Part 1: Observable with three ways to define next, error, and complete functions

const simple$ = new Rx.Observable(observer => {
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
}, 3000);