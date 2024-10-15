"use client";
import React, { useState } from "react";
import Container from "../Container";
import logo from "../../../../src/assets/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-50 text-white w-full border-b-2 lg:pb-0 pb-2">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="w-28">
              <Image src={logo} alt="Logo" />
            </div>
          </Link>

          <div className="lg:hidden block cursor-pointer" onClick={toggleMenu}>
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
            <Link href="/login">
              <li className="lg:hidden block">
                LOGIN <LoginIcon />
              </li>
            </Link>
          </ul>

          {/* <div className="hidden lg:block">
            <Link href="/login">
            <button className="bg-[#135F4A] px-6 py-2 text-white text-sm font-semibold">
              LOGIN <LoginIcon />
            </button>
            </Link>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
