import $ from 'jquery';

const $title = $('#title');
const $results = $('#results');

let lastQuery = null;
let lastTimeout = null;
let nextQueryId = 0;
let ourQueryId = ++nextQueryId;

$title.on('keyup', e => {
  // fix issue with keyups and downs, etc.
  const title = e.target.value;
  if (title == lastQuery) {
    return;
  }
  lastQuery = title;

  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }


  // fix issue with too many requests via timeout
  lastTimeout = window.setTimeout(() => {
    getItems(title).then(items => {
      // fix issue with outdated results
      if (ourQueryId != nextQueryId) {
        return;
      }
      $results.empty();
      const $items = items.map(item => $(`<li />`).text(item));
      $results.append($items);
    });
  }, 500);

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