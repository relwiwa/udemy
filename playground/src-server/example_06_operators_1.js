import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';


/* do
   - way to create side effects without changing the value within observable */
Rx.Observable.range(1, 10)
  .do(a => {
    a *= a;
    console.log(`from do ${a}`);
  })
  .map(a => a * a)
  .subscribe(createSubscriber('simple'));


/* finally
   - executes code after observable is complete */
Rx.Observable.range(1, 10)
  .finally(() => console.log('from finally'))
  .map(a => a * 2)
  .subscribe(createSubscriber('finally'));


/* filter
   - filters observable values */
Rx.Observable.range(1, 10)
  .filter(a => a < 5)
  .subscribe(createSubscriber('filter'));


/* interval and startWith
   - interval starts emitting first value after specified interval time
   - startWith lets interval return specified value immediatily upon subscription */
Rx.Observable.interval(1000)
  .startWith(-5)
  .take(10)
  .subscribe(createSubscriber('interval start with'));