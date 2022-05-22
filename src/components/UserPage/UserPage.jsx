import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      {user.access_level > 0
        ? <img src="https://images-na.ssl-images-amazon.com/images/I/71XZp+NsDXL.jpg" />
        : "Nothing to see here. Certainly no goats.... 🐐"
      }
      <p>Your access level is: {user.access_level}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
