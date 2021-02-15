import React from 'react';

const LogIn = ({goToPage}) => (
  <>
    <h1>Log In</h1>
    <div>
      <button onClick={(e) => {
        e.preventDefault();
        goToPage("signup")
      }}>Sign Up
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

export default LogIn;
