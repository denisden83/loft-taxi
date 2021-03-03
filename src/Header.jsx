import React from 'react';
import {withAuthHoc} from "./AuthContext";
import PropTypes from "prop-types";


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

Header.propTypes = {
  goToPage: PropTypes.func,
  logOut: PropTypes.func,
};
export default withAuthHoc(Header);