import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// receives props from the PrivateRoute creation in AppRouter.js.
// we destructure the component and use the rest operator to get the rest.

// The PrivateRoute component itself is just a Route component (since we're not looking to 
// rebuild the Route funcitonality, just to conditionally render the component passed into
// the route.) We create the Route and return it as normal BUT we alter the Component that was
// passed into the props, conditionally rendering it with all the props as normal if the user
// is authenticated according to our Redux store, or redirecting to the login page otherwise.
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);