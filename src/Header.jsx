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
            }}>map
            </button>
          </li>
          <li>
            <button onClick={(e) => {
              e.preventDefault();
              goToPage("profile")
            }}>profile
            </button>
          </li>
          <li>
            <button onClick={(e) => {
              e.preventDefault();
              goToPage("login")
            }}>log out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;