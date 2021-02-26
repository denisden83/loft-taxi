import React from 'react';
import {withAuthHoc} from "./AuthContext";

const Header = ({goToPage, logOut}) => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={(e) => {
              e.preventDefault();
              goToPage("map");
            }}>map
            </button>
          </li>
          <li>
            <button onClick={(e) => {
              e.preventDefault();
              goToPage("profile");
            }}>profile
            </button>
          </li>
          <li>
            <button onClick={(e) => {
              e.preventDefault();
              logOut(() => {
                goToPage("profile");
              });
            }}>log out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default withAuthHoc(Header);