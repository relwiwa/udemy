import $ from 'jquery';
import Rx from 'rxjs/RX';

const $title = $('#title');
const $results = $('#results');

// returns stream of keyup events
const keyUps$ = Rx.Observable.fromEvent($title, 'keyup')
const queries$ = keyUps$
  .map(e => e.target.value)
  .distinctUntilChanged()
  .debounceTime(250);

queries$.subscribe(query => {
  getItems(query).then(items => {
    $results.empty();
    $results.append(items.map(r => $(`<li />`).text(r)));
  });
});


// API simulation
function getItems(title) {
  console.log(`Querying ${title}`);
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve([title, 'Item 2', 'Another ' + (Math.floor(Math.random()))]);
    }, 500 + (Math.random() * 200));
  });
}