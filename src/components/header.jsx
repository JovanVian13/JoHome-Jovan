import React from 'react';
import Button from './elements/button';
import headerhouse from '../assets/img/headerhouse.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });
  return (
    <div className="flex flex-row bg-bgColor min-h-screen items-center justify-center gap-3" data-aos="fade-right">
      <div className='p-10'>
        <h1 className='text-5xl font-extrabold text-defaultColor'>Find Your Dream Home</h1>
        <p className='py-10 text-textColor font-bold'>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
        <br />
        <Button 
        children={"Sign Up"}
        margin={"text-sm"}
        />
      </div>
      <div>
        <img src={headerhouse} />
      </div>
    </div>
  );
};

export default Header;