import { Button } from '@mui/material';
import React from 'react'
import './Login.css';

function Login() {
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://static.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif"
          alt="logo"
        />
        <h1>SignIn for Slack-Clone App</h1>
        <Button>Sign in with google</Button>
      </div>
    </div>
  );
}

export default Login