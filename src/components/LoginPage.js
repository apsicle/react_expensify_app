import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()).then(()=>{}).catch((e)=>{console.log(e)})
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
