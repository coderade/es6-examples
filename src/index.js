import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {constAndLet} from './examples/constAndLet';

constAndLet();


import {arrowFunctions} from "./examples/arrowFunctions";

arrowFunctions();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
