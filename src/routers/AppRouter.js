import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import addExpensePage from '../components/AddExpense';
import expenseDashboardPage from '../components/Dashboard';
import editExpensePage from '../components/EditExpense';
import helpPage from '../components/Help';
import notFoundPage from '../components/NotFound';
//import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>  
        <div>
                <Switch>
                    <Route path='/' component={ LoginPage } exact={true} />
                    <PrivateRoute path='/dashboard' component={ expenseDashboardPage } exact={true}/>
                    <PrivateRoute path='/create' component={ addExpensePage } />
                    <PrivateRoute path='/edit/:id' component={ editExpensePage } />
                    <Route path='/help' component={ helpPage } />
                    <Route component={ notFoundPage } />
                </Switch>    
        </div>
    </Router>
);

export default AppRouter;

