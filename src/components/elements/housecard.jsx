import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import Button from "./button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const HouseCard = ({house, room, size, name, price}) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="flex flex-col gap-2 justify-between px-5 py-5 items-start bg-frontColor rounded-lg w-96 shadow-lg" data-aos="fade-right">
            <img src={house} className="rounded-lg object-cover w-96 shadow-white"/>
            <div>
                <h3 className="flex items-center text-xl mb-5 font-bold text-defaultColor gap-2"><FaLocationDot />{name}</h3>
                <div className="flex gap-16">
                    <h3 className="flex items-center text-lg mb-5 font-bold text-textColor gap-3"><IoBedOutline className="bg-white rounded-sm text-xl"/> {room} Rooms</h3>
                    <h3 className="flex items-center text-lg mb-5 font-bold text-textColor gap-3"><TbRulerMeasure className="bg-white rounded-sm text-xl"/> {size} sq feet</h3>
                </div>
                <div className="flex items-center">
                    <Button 
                    children={"Sign Up"}
                    margin={"text-sm"}
                    />
                    <h3 className="ml-28 text-2xl font-bold text-textColor">${price}</h3>
                </div>
            </div>
        </div>
    )   
}

export default HouseCard;