import React, { useState } from 'react';
import '../Styles/LoginRegister.css';
import SignInForm from './Login';
import CreateAccountForm from './Register';

function LoginRegister() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    
    <div className="container">
      <div className={`form-container ${isSignIn ? 'signin-active' : 'create-account-active'}`}>
        <div className="form-wrapper">
          <div className="form">
            <SignInForm toggleForm={toggleForm} />
          </div>
          <div className="form">
            <CreateAccountForm toggleForm={toggleForm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
