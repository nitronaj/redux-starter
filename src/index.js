import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
