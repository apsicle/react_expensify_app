import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
// :id urlstring. Gets used as props.match.params.id in EditExpensePage.js
// <BrowserRouter> vs <Router> - latter lets you assign your own "history" and use it elsewhere
// in browserrouter, we were using history.push in our components to push our users to different
// pages after editing or adding expenses. We want this funcitonality outside of a component (in
// firebase.auth.onAuthChange()).
const AppRouter = () => (
    <Router history={history}> 
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/> 
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;