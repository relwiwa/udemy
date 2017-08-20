import jsdom from 'jsdom';
import _$ from 'jquery';

// 1. Set up testing environment to run like a browser in the command line

/*  - global corresponds to window object in the browser
    - initializes fake browser environment for use at the command line
    - serves fake references to document to e.g. jquery */
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

/*  - make jQuery Library's $ use global.window */ 
const $ = _$(global.window);
