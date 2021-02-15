import React from 'react';

const SignUp = ({goToPage}) => (
  <>
    <h1>Sign Up</h1>
    <div>
      <button onClick={(e) => {
        e.preventDefault();
        goToPage("login")
      }}>Log In
      </button>
    </div>
    <div>
      <button onClick={(e) => {
        e.preventDefault();
        goToPage("map")
      }}>Enter
      </button>
    </div>
  </>
);

export default SignUp;