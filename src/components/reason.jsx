import React from "react";
import ReasonCard from './elements/reasoncard'
import { PiMapPinAreaFill } from "react-icons/pi";
import { BsPersonFillGear } from "react-icons/bs";
import { PiNotepadFill } from "react-icons/pi";
import { FaHandshakeSimple } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Reason = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="w-full items-center text-center mt-5 justify-center" data-aos="fade-right">
            <div className="items-center justify-center">
                <h1 className="text-4xl font-bold text-defaultColor">Why Choose Us</h1>
                <p className="text-textColor font-semibold mt-5 text-lg">Elevating Your Home Buying Experience with Expertise, Integrity, </p>
                <p className="text-textColor font-semibold mb-2 text-lg">and Unmatched Personalized Service</p>
            </div>
            <div className="flex flex-wrap min-h-96 justify-center items-center gap-8 w-full mx-auto">
                <ReasonCard 
                icon={<PiMapPinAreaFill size={50}/>}
                title={"Expert Guidance"}
                reason={"Benefit from our team's seasoned expertise for a smooth buying experience"}
                >
                </ReasonCard>
                <ReasonCard 
                icon={<BsPersonFillGear size={50}/>}
                title={"Personalized Service"}
                reason={"Our services adapt to your unique needs, making your journey stress-free"}
                >
                </ReasonCard>
                <ReasonCard 
                icon={<PiNotepadFill size={50}/>}
                title={"Transparent Process"}
                reason={"Stay informed with our clear and honest approach to buying your home"}
                >
                </ReasonCard>
                <ReasonCard 
                icon={<FaHandshakeSimple size={50}/>}
                title={"Exceptional Support"}
                reason={"Providing peace of mind with our responsive and attentive customer service"}
                >
                </ReasonCard>
            </div>
        </div>
    )
}

export default Reason;