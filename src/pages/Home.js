import React from 'react';
import bannerImg from '../assets/images/image.png'
const Home = () => {
  return (
    <div>
      <div className='relative'>
        <img style={{ height: "555px" }} className='w-full' src={bannerImg} alt="" />
        <div style={{ height: "555px" }} className='w-full absolute top-0 bg-black opacity-50' ></div>
        <div className='absolute top-44 left-20 text-white'>
          <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className='text-5xl text-white mb-4'>Welcome to <span className='text-yellow-300'>Learning Bee</span></h1>
          <p style={{ fontFamily: "'Courgette', cursive" }} className='text-xl'>Gain applicable skills, build capabilities, and tap into the <br /> confidence you need to improve yourself and advance your career.</p>
          <button className="btn btn-outline hover:text-white btn-warning mt-5">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;