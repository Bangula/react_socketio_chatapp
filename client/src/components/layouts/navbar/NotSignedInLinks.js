import React from 'react';
import { NavLink } from 'react-router-dom';

function NotSignedInLinks() {
  return (
    <ul className='right hide-on-med-and-down'>
        <li><NavLink className='' to="/signin">Log in</NavLink></li>
        <li><NavLink className='' to="/register">Sign up</NavLink></li>
    </ul>
  )
}

export default NotSignedInLinks;