import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const UserNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=''>
      <div>Welcome,{user} . Happy Learning !</div>
      <div></div>
    </div>
  );
};

export default UserNav;