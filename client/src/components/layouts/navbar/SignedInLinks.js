import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
  return (
    <ul className='right hide-on-med-and-down'>
        <li><NavLink className='' to="/signin">Developers</NavLink></li>
        <li><NavLink className='' to="/Register">My Profile</NavLink></li>
        <li><NavLink className='' to="/logout">Logout</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
