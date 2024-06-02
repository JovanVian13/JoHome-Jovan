import React from "react";
import ReviewCard from "./elements/reviewcard";
import customer1 from '../assets/img/customer1.jpg'
import picture1 from '../assets/img/picture1.jpg'
import customer2 from '../assets/img/customer2.jpg'
import picture2 from '../assets/img/picture2.jpg'
import customer3 from '../assets/img/customer3.jpg'
import picture3 from '../assets/img/picture3.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Review = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div className="items-center justify-center bg-bgColor py-0.5" data-aos="fade-right">
            <p className="text-4xl text-defaultColor font-extrabold text-center mt-14">What People Say</p>
            <p className="text-4xl text-defaultColor font-extrabold text-center mb-14">About JoHome</p>
            <div className="flex flex-wrap justify-center gap-10">
                <ReviewCard 
                img = {customer1}
                name = {"Sarah Nguyen"}
                place = {"San Francisco"}
                rating = {"5.0"}
                review ={"JoHome truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."}
                house = {picture1}
                />            
                <ReviewCard 
                img = {customer2}
                name = {"Michael Rodriguez"}
                place = {"San Diego"}
                rating = {"4.5"}
                review ={"I had a fantastic experience working with JoHome. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. They are very highly recommended!"}
                house = {picture2}
                />
                <ReviewCard 
                img = {customer3}
                name = {"Emily Johnson"}
                place = {"Los Angeles"}
                rating = {"4.8"}
                review = {"JoHome made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home! Thank You JoHome!"}
                house = {picture3}
                />
            </div>
            <br />
        </div>
   );
};

export default Review;