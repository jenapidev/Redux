// React
import React from 'react';
import ReactDOM from 'react-dom';
// components
import './css/index.css';
import App from './pages/App';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
//Fonts
import '@fortawesome/fontawesome-free/css/all.css';
// Reducers
import reducers from "./reducers";
//Creating a redux store
const store = createStore(
    reducers, //todos los reducers 
    {},  //estado inicial
    applyMiddleware(reduxThunk)
);
//Rendering the app
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);