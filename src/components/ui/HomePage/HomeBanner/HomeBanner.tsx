/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="homeBannerWrap lg:h-[600px] h-[400px]">
      <div className="fixed w-full z-50 text-white border-b lg:pb-0 pb-2">
        <Container>
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="w-28">
                <Image src={logo} alt="Logo" />
              </div>
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
              className={`lg:flex justify-between gap-10 lg:p-7 text-sm lg:font-semibold nav-items ${
                isMenuOpen ? "open" : "hidden"
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
              <li className="flex gap-x-1  items-center">
                <WifiCalling3 /> <span>+8801738399899</span>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div className="bannerContent space-y-1 lg:w-[700px] w-full lg:px-0 px-5">
        <h3>Welcome To</h3>
        <h1 className="text-[#E3C80D] font-bold">Anaa Developers Ltd </h1>
        <p>
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
