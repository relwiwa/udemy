import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// interval and timer

Rx.Observable.interval(500)
  .take(5)
  .subscribe(createSubscriber('interval'));

Rx.Observable.timer(5000)
  .subscribe(createSubscriber('timer'));

Rx.Observable.timer(1000, 500)
  .take(5)
  .subscribe(createSubscriber('timer with interval'));

// of and from

Rx.Observable.of('Hello, Observables')
  .subscribe(createSubscriber('of with one item'));

Rx.Observable.of('Hello, Observables', 42, 'okay')
  .subscribe(createSubscriber('of with multiple items'));

// of treats array as one item
Rx.Observable.of(['array item 1', 'array item 2'])
  .subscribe(createSubscriber('of with array'));

// from consumes iterable items and flatten them out
Rx.Observable.from(['array item 1', 'array item 2'])
  .subscribe(createSubscriber('from with array'));

Rx.Observable.from('this string gets split up by from')
  .subscribe(createSubscriber('from with string'));

Rx.Observable.from([1, 2, 3, 4, 5])
  .map(i => i * 5)
  .subscribe(createSubscriber('from with string'));

// throw

// throw kills observable
Rx.Observable.throw(55593)
  .subscribe(createSubscriber('lethal error'));

// error object handed to from won't kill observable
Rx.Observable.from([new Error(54564564), 5])
  .subscribe(createSubscriber('non-lethal error'));

// empty

// empty produces no items, but completes
// when in some cases no values are returned, empty is used to
// enable subscribing to observable in any case
Rx.Observable.empty()
  .subscribe(createSubscriber('empty'));

// defer

let sideEffect = 0;
const defer$ = Rx.Observable.defer(() => {
  sideEffect++;
  return Rx.Observable.of(sideEffect);
})

defer$.subscribe(createSubscriber('defer$.one'));
defer$.subscribe(createSubscriber('defer$.two'));
defer$.subscribe(createSubscriber('defer$.three'));

// never

// never produces no items and never completes
Rx.Observable.never()
  .subscribe(createSubscriber('never'));

// range(start, amount)

// produces amount number of items starting from start
Rx.Observable.range(10, 30)
  .subscribe(createSubscriber('range'));