import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({course}) => {
  const { title } = course;
  return (
    <div className='text-xl font-semibold'>
      <Link className='hover:text-red-700'>{title}</Link>
    </div>
  );
};

export default Sidebar;