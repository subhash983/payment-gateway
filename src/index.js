import PaymentGateway from './components/paymentGateway';
import NewCard from './components/newCard'
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {HashRouter, Route} from 'react-router-dom';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
        <div>
            <Route exact path='/' component={PaymentGateway}/>
            <Route exact path='/edit' component={NewCard}/>
        </div>
    </HashRouter>
</Provider>, document.getElementById('app'));
