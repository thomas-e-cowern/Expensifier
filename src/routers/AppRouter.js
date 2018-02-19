import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import addExpensePage from '../components/AddExpense';
import expenseDashboardPage from '../components/Dashboard';
import editExpensePage from '../components/EditExpense';
import notFoundPage from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>  
        <div>
                <Switch>
                    <PublicRoute path='/' component={ LoginPage } exact={true} />
                    <PrivateRoute path='/dashboard' component={ expenseDashboardPage } exact={true}/>
                    <PrivateRoute path='/create' component={ addExpensePage } />
                    <PrivateRoute path='/edit/:id' component={ editExpensePage } />
                    <Route component={ notFoundPage } />
                </Switch>    
        </div>
    </Router>
);

export default AppRouter;

