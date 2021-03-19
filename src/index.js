import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ParentComponent from "./components/ParentComponent/ParentComponent"

import * as serviceWorker from './serviceWorker';

import {fruits} from "./data/fruits";   // DATA SOURCE.

ReactDOM.render(<ParentComponent data={fruits} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
