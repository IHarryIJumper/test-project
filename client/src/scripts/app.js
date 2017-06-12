import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { combinedReducer } from './reducers/reducers.js';

import $ from 'jquery';

const history = createHistory();
const middleware = routerMiddleware(history)
const store = createStore(combinedReducer, applyMiddleware(middleware));

import DefaultComponent from './components/default/default.jsx';

$(document).ready(function () {

	render(
		<Provider store={store}>

			<ConnectedRouter history={history}>
				<div>
					<Route exact path="/" component={DefaultComponent} />
					<Route path="/dep" component={DefaultComponent} />
					<Route path="/emp" component={DefaultComponent} />
					<Route path="*/index.html" component={DefaultComponent} />
				</div>
			</ConnectedRouter>

		</Provider>,
		document.getElementById('app')
	);
});