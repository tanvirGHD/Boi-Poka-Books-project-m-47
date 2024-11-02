import React from 'react';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className='space-y-6'>
          <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn  bg-green-500 text-white hover:bg-green-500 hover:text-white">View The List</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;