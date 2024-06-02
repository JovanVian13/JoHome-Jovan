import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div className="w-full items-center justify-center bg-frontColor" data-aos="fade-up">
            <div className="flex w-full flex-col md:flex-row justify-between p-8 px-5 md:px-28">
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4 text-defaultColor">JoHome</h1>
                    <p className="text-sm text-justify font-semibold text-textColor pb-4">Bringing you closer to your dream home, one click at a time.</p>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4 text-defaultColor">Links</h1>
                    <a className="text-sm font-semibold hover:text-backColor text-textColor">Home</a><br />
                    <a className="text-sm font-semibold hover:text-backColor text-textColor">Top-Rated</a><br />
                    <a className="text-sm font-semibold hover:text-backColor text-textColor">Reason</a><br />
                    <a className="text-sm font-semibold hover:text-backColor text-textColor">Review</a>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4 text-defaultColor">Social Media</h1>
                    <a className="text-sm font-semibold hover:text-backColor text-textColor">jovan.then1@gmail.com</a><br />
                    <a className="text-sm font-semibold hover:text-backColor text-textColor">+62 896 0234 8946</a>
                </div>
            </div>
            <div>
                <p className="text-center mt-2 py-10 text-textColor font-semibold">&copy; 2024 Jovan Vian Thendra | All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;