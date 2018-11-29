import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from "./components/Clock";

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();


