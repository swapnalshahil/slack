import React from 'react'
import { Button } from '@mui/material';
import { auth, provider, FIREBASE } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Login.css';


function Login() {
  const [state , dispatch] = useStateValue();
  const signIn = () => {
    auth
     .signInWithPopup(provider)
     .then((result) => {
      // console.log(result)
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
     })
     .catch((error) => {
      alert(error.message);
     });
  }
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://static.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif"
          alt="logo"
        />
        <h1>SignIn for Slack-Clone App</h1>
        <p>eulersgamma group chat...</p>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  );
}

export default Login;