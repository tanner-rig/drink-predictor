import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routes from './routes';

// Create a DOM Node to mount the React Application to
const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

// Render the Application on the new DOM Node
ReactDOM.render(<Router history={hashHistory} routes={routes} />, mountNode);