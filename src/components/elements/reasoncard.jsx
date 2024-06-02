import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ReasonCard = ({icon, title, reason}) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="flex flex-col gap-2 justify-between px-5 py-5 items-start bg-frontColor rounded-lg w-72 shadow-lg" data-aos="fade-right">
            <div className="flex flex-row w-fit h-fit bg-backColor rounded-lg">
                <p className="p-6">{icon}</p>
            </div>
            <div className="text-container py-4 rounded-lg">
                <h2 className="font-bold text-defaultColor text-justify mb-2 text-lg">{title}</h2>
                <p className="font-semibold text-textColor text-justify text-sm">{reason}</p>
            </div>
        </div>
    );
}

export default ReasonCard;