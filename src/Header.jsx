import React from 'react';

const Header = ({goToPage}) => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={(e) => {
              e.preventDefault();
              goToPage("map")
            }}>Map
            </button>
          </li>
          <li>
            <button onClick={(e) => {
              e.preventDefault();
              goToPage("profile")
            }}>Profile
            </button>
          </li>
          <li>
            <button onClick={(e) => {
              e.preventDefault();
              goToPage("login")
            }}>Log out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;