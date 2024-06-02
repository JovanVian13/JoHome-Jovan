import HouseCard from './elements/housecard'
import house1 from '../assets/img/house1.jpg'
import house2 from '../assets/img/house2.jpg'
import house3 from '../assets/img/house3.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function House() {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div className="justify-center items-center" data-aos="fade-right">
            <h1 className="text-4xl text-defaultColor font-extrabold text-center p-14">Our Popular Residences</h1>
            <div className="flex flex-wrap justify-center gap-8">
                <HouseCard 
                house = {house1}
                room = {4}
                size = {"3,500"}
                name = {"San Francisco, California"}
                price = {"2,500,000"}
                />
                <HouseCard 
                house = {house2}
                room = {3}
                size = {"1,500"}
                name = {"Beverly Hills, California"}
                price = {"1,000,000"}
                />
                <HouseCard 
                house = {house3}
                room = {6}
                size = {"4,000"}
                name = {"Palo Alto, California"}
                price = {"3,700,000"}
                />
            </div>
            <br />
        </div>
    );
}
  
export default House;