'use client'
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from 'react';
import './HomeBanner.css'
import Link from 'next/link';
import Image from 'next/image';
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../../assets/images/logo/logo.png";
import { WifiCalling3 } from "@mui/icons-material";
const HomeBanner = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <section className='homeBannerWrap'>
            <div className="menuWraps ">
                <div className="menuItemWrap">
                    <div className="menuItems">
                        <Link href="/">
                            {/* <div className="w-28">
                            <Image src={logo} alt="Logo" />
                        </div> */}
                            <h2>Ana Developer </h2>
                        </Link>
                        <div>

                            <div className="lg:hidden block cursor-pointer" onClick={toggleMenu}>
                                {isMenuOpen ? (
                                    <CloseIcon fontSize="medium" className="close-icon" />
                                ) : (
                                    <MenuIcon fontSize="medium" className="open-icon" />
                                )}
                            </div>

                            <ul
                                className={`lg:flex justify-between gap-x-5  text-sm  nav-items ${isMenuOpen ? "open" : "hidden"
                                    }`}
                            >
                                <Link href="/#">
                                    <li>HOME</li>
                                </Link>
                                <Link href="/about-us">
                                    <li>ABOUT</li>
                                </Link>
                                <Link href="/projects">
                                    <li>PROJECTS</li>
                                </Link>
                                <Link href="/gallery">
                                    <li>GALLERY</li>
                                </Link>
                                <Link href="/services">
                                    <li>SERVICES</li>
                                </Link>
                                <Link href="/contact">
                                    <li>CONTACT</li>
                                </Link>
                                <li> <div className="flex gap-x-1  items-center">
                                    <WifiCalling3 /> <span>+8801738399899</span>
                                </div> </li>

                            </ul>

                        </div>

                    </div>
                </div>
                <div className="bannerContent">
                    <h1>  Welcome To Ana Developer</h1>
                    <p className="mt-5 ">Ana Developer is an innovative real estate WordPress theme that helps to ensure your website’s success in this super-competitive market.</p>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;