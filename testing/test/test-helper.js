import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// 1. Set up testing environment to run like a browser in the command line

/*  - global corresponds to window object in the browser
    - initializes fake browser environment for use at the command line
    - serves fake references to document to e.g. jquery */
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

/*  - make jQuery Library's $ use global.window */ 
const $ = _$(global.window);


// 2. Build 'renderComponent helper that should render a given react class

/*  renderComponent gets the following parameters:
    - Respective React component class to be rendered
    - props object of this component to be added to rendered Component
    - state object with initial state configuration to be passed on to
      Redux createStore function */
function renderComponent(ComponentClass, props, state) {
    /*  - TestUtils.renderIntoDocument renders a JSX Object into a DOM and
          needs a DOM with access to window object
        - DOM and window object were set up via JSDOM
        - Redux Store Provider needs to be rendered as well */
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );

    /*  - ReactDOM.findDOMNode returns actual HTML Element corresponding
        - HTML element gets returned as jquerified */
    return $(ReactDOM.findDOMNode(componentInstance));
}

// 3. Build helper for simulating events

/*  - Add TestUtils.Simulate to JQuery as simulate
    - this references the element/s selected via $()
    - eventName to be simulated gets passed in as an argument */
$.fn.simulate = function(eventName, value) {
    if (value) {
        /* Set value of HTML element */
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
}

// 4. Set up chai-jquery

chaiJquery(chai, chai.util, $);


export { renderComponent, expect };
