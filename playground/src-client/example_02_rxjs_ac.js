import $ from 'jquery';
import Rx from 'rxjs/RX';

const $title = $('#title');
const $results = $('#results');

// fromEvent checks first argument for event pattern to figure out what kind
// of element it is dealing with:
// - on/off
// - add/removeEventListener
// - socket.io
Rx.Observable.fromEvent($title, 'keyup')
  .map(e => e.target.value)
  .distinctUntilChanged()
  .debounceTime(500)
  .switchMap(getItems)
  .subscribe(items => {
    $results.empty();
    $results.append(items.map(r => $(`<li />`).text(r)));
  });

// API simulation
function getItems(title) {
  console.log(`Querying ${title}`);
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve([title, 'Item 2', 'Another ' + (Math.floor(Math.random()))]);
    }, 500 + (Math.random() * 2000));
  });
}