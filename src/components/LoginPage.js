import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify App</h1>
      <p>Sign in to start tracking your expenses</p>
      <button className="button" onClick={startLogin}>Login with Google</button>    
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()).then(()=>{}).catch((e)=>{console.log(e)})
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
