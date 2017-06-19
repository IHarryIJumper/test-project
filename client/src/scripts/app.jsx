import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import "regenerator-runtime/runtime";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas.js';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { combinedReducer } from './reducers/reducers.js';

// import $ from 'jquery';

import '../../libs/bootstrap/css/bootstrap.min.css';
import '../../libs/bootstrap/css/styles.css';
import '../../libs/bootstrap/js/bootstrap.min.js';

let middlewares = [];

const history = createHistory();
const routeMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware();

middlewares.push(routeMiddleware);
middlewares.push(sagaMiddleware);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
	const { logger } = require(`redux-logger`);

	middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(combinedReducer);

sagaMiddleware.run(rootSaga);

import DefaultComponent from './components/default/default.jsx';
import EmployeesComponent from './components/employees/employees.jsx';
import HeaderComponent from './components/header/header.jsx';
import PageContentComponent from './components/pageContent/pageContent.jsx';
import FooterComponent from './components/footer/footer.jsx';

// $(document).ready(function () {

render(
	<Provider store={store}>

		<ConnectedRouter history={history}>
			<div>
				<HeaderComponent />
				<PageContentComponent>
					<Route exact path="/" component={DefaultComponent} />
					<Route path="/dep" component={DefaultComponent} />
					<Route path="/emp" component={EmployeesComponent} />
					<Route path="*/index.html" component={DefaultComponent} />
				</PageContentComponent>
				<FooterComponent />
			</div>
		</ConnectedRouter>

	</Provider>,
	document.getElementById('app')
);
// });