import React from 'react';
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';

const Ratings = ({rating}) => {
  return (
    <div className='text-yellow-400 text-xl ml-10 md:ml-0'>
      {
        rating === 1 &&
        <div className='flex'>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
           </div>
    }
      {
        rating === 2 &&
        <div className='flex'>
            <AiFillStar />
            <AiFillStar /> 
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
           </div>
    }
      {
        rating === 3 &&
        <div className='flex'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
           </div>
    }
      {
        rating === 4 &&
        <div className='flex'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
           </div>
    }
      {
        rating === 5 &&
        <div className='flex'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
           </div>
    }
    </div>
  );
};

export default Ratings;