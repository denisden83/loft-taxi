import React from 'react';
import Header from "./Header";
import PropTypes from "prop-types";


const Profile = (props) => (
  <>
    <Header goToPage={props.goToPage} />
    <h1>Profile</h1>
  </>
);

Profile.propTypes = {
  goToPage: PropTypes.func,
};
export default Profile;