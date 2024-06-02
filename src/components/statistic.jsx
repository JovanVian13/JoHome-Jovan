import React from "react";
import StatsHouse from "../assets/img/StatsHouse.jpg";
import Stats from "./elements/stats";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Statistics = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div className="flex gap-14" data-aos="fade-right">
            <div className="w-1/3 ml-36 flex min-h-screen justify-center items-center">
                <img src={StatsHouse} className="rounded-xl"/>
            </div>
            <div className="items-center text-container justify-center flex min-h-screen">
                <div className="w-full">
                    <div className="w-96">
                        <h1 className="text-3xl font-extrabold text-defaultColor">We Help You To Find Your Dream Home</h1>
                        <br />
                        <p className="text-sm text-textColor font-semibold">From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
                    </div>
                    <div className="flex gap-10 w-full">
                        <Stats 
                        number={8}
                        stats={"Houses Available"}
                        />
                        <Stats 
                        number={6}
                        stats={"Houses Sold"}
                        />
                        <Stats 
                        number={2}
                        stats={"Trusted Agents"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;