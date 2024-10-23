/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import "./HomeBanner.css";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { WifiCalling3 } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../../../assets/images/logo/logo.png";
import Container from "@/components/share/Container";
import Tab from "../SearchBar/Tab";

const HomeBanner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 200);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="homeBannerWrap lg:h-[600px] h-[400px] relative ">
      <div
        className={`${stickyMenu
            ? "stickyMenu"
            : "fixed w-full z-50 text-white border-b lg:pb-0 pb-4"
          }`}
      >
        <Container>
          <div className="navbar">
            <Link href="/">
              <h2 className="text-[#eeb808] mt-3 md:mt-0">Anaa Developer</h2>
            </Link>

            <div
              className="lg:hidden block cursor-pointer"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <CloseIcon fontSize="medium" className="close-icon" />
              ) : (
                <MenuIcon fontSize="medium" className="open-icon" />
              )}
            </div>

            <ul
              className={`lg:flex justify-between gap-10 lg:p-7 text-sm lg:font-semibold nav-items ${isMenuOpen ? "open" : "hidden"
                }`}
            >
              <Link href="/#" onClick={closeMenu}>
                <li>HOME</li>
              </Link>
              <Link href="/about-us" onClick={closeMenu}>
                <li>ABOUT</li>
              </Link>
              <Link href="/projects" onClick={closeMenu}>
                <li>PROJECTS</li>
              </Link>
              <Link href="/gallery" onClick={closeMenu}>
                <li>GALLERY</li>
              </Link>
              <Link href="/services" onClick={closeMenu}>
                <li>SERVICES</li>
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                <li>CONTACT</li>
              </Link>
              <li className="flex gap-x-1 items-center">
                <WifiCalling3 /> <span>+8801738399899</span>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div className="bannerContent space-y-1 lg:w-[700px] w-full lg:px-0 px-5">
        <h3>Welcome To</h3>
        <h1 className="text-[#E3C80D] font-bold">Anaa Developers Ltd </h1>
        <p className="hidden md:block ">
          We believe in creating opportunities for all types of investors,
          making land ownership accessible and affordable, while promoting
          sustainable development.
        </p>
      </div>
      <Tab />
    </section>
  );
};

export default HomeBanner;
