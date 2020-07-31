import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login'
import Main from './components/Main'
import { withRouter } from 'react-router-dom'

function App({ location }) {
  return (<>
    {
      location.pathname === "/login" ? <Login /> : <Main />
    }
    </>
  );
}

export default withRouter(App);
