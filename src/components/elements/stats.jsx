import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Stats = ({number, stats}) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="gap-2 items-start">
            <p className="text-3xl font-bold mt-10 text-textColor">{number}K+</p>
            <div className="text-container">
                <h2 className="font-bold text-textColor text-sm">{stats}</h2>
            </div>
        </div>
    );
}

export default Stats;