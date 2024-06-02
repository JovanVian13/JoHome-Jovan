import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import Button from "./elements/button";
import "aos/dist/aos.css";
import { IoIosClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
      setMenu(!menu);
    };
  
    const closeMenu = () => {
      setMenu(false);
    };
  
    useEffect(() => {
      Aos.init({
        once: true,
        duration: 1000,
      });
    }, []);
  
    return (
        <div className="fixed w-full z-10" data-aos="fade-down">
            <div>
                <div className="flex flex-row p-6 px-6 bg-frontColor items-center">
                    <div className="flex-row items-center">
                        <h1 className="ml-10 text-defaultColor font-bold text-4xl">JoHome</h1>
                    </div>
                    <nav className="ml-32 hidden md:flex flex-row items-center text-2xl font-semibold gap-24">
                        <Link
                            to="header"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-textColor transition-all cursor-pointer text-defaultColor"
                        >
                        Home
                        </Link>

                        <Link
                            to="statistic"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-textColor transition-all cursor-pointer text-defaultColor"
                        >
                        About
                        </Link>

                        <Link
                            to="house"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-textColor transition-all cursor-pointer text-defaultColor"
                        >
                        Top-Rated
                        </Link>
                        
                        <Link
                            to="review"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-textColor transition-all cursor-pointer text-defaultColor"
                        >
                        Review
                        </Link>

                        <Button
                            children={"Sign Up"}
                        />
                    </nav>
                    <div className="lg:hidden flex items-center">
                        {menu ? (
                        <IoIosClose
                            size={28}
                            onClick={handleChange}
                            className="text-defaultColor"
                        />
                        ) : (
                        <MdMenu
                            size={28}
                            onClick={handleChange}
                            className="text-defaultColor"
                        />
                        )}
                    </div>
                    <div className={` ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-frontColor text-white top-20 font-semibold text-2xl text-center gap-8 pt-8 pb-4 w-full h-fit`}>
                        <Link
                            to="header"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-defaultColor"
                            onClick={closeMenu}
                        >
                        Home
                        </Link>

                        <Link
                            to="statistic"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-defaultColor"
                            onClick={closeMenu}
                        >
                        About
                        </Link>

                        <Link
                            to="house"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-defaultColor"
                            onClick={closeMenu}
                        >
                        Top-Rated
                        </Link>
                        
                        <Link
                            to="review"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-defaultColor"
                            onClick={closeMenu}
                        >
                        Review
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  
            
    );
};


export default Navbar;