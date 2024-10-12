/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from 'react';
import './HomeBanner.css'
import Link from 'next/link';
import CloseIcon from "@mui/icons-material/Close";
import { WifiCalling3 } from "@mui/icons-material";
import Image from "next/image";
import logo from '../../../../assets/images/logo/transparent_logo.jpeg'
const HomeBanner = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <section className='homeBannerWrap'>
            <div className="menuWraps ">
                <div className="headers">
                    <div className="menuItemWrap">
                        <div className="menuItems">
                            <Link href="/">
                                {/* <div className="w-28">
                            <Image src={logo} alt="Logo" />
                        </div> */}
                                <h2>Anaa Developers </h2>
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
                                    className={`lg:flex justify-between gap-x-8  text-sm  nav-items ${isMenuOpen ? "open" : "hidden"
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
                </div>
                <div className="bannerContent space-y-1 ">
                    <h3>Welcome To</h3>
                    <h1 className="text-[#E3C80D] font-bold ">   Anaa Developers Ltd </h1>
                    <p >We believe in creating opportunities for all types of investors, making land ownership accessible and affordable, while promoting sustainable development.</p>
                </div>
            </div>

        </section>
    );
};

export default HomeBanner;