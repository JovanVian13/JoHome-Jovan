import React from "react";
import { IoMdStar } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ReviewCard = ({img, name, place, review, rating, house}) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div className="flex flex-col gap-2 justify-between px-5 py-5 items-center bg-frontColor rounded-lg w-96 shadow-lg" data-aos="fade-right">
            <img src={house} className="rounded-lg object-cover w-full"/>
            <div className="flex bg-white gap-2 justify-between px-5 py-5 rounded-full items-center">
                <img src={img} className="rounded-full w-12 h-fit"/>
                <div className="text-container text-sm text-defaultColor">
                    <p className="font-bold">{name}</p>
                    <div className="flex gap-24">
                        <p className="font-semibold">{place}</p>
                        <div className="flex items-center gap-1">
                            <IoMdStar className="text-yellow-300"/>
                            <h3 className="text-defaultColor font-bold">{rating}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-white gap-2 justify-between px-5 py-5 rounded-lg items-center">
                <p className="text-textColor text-justify text-sm font-semibold">{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;

