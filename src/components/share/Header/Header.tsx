"use client";
import React, { useState } from "react";
import Container from "../Container";
import logo from "../../../../src/assets/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { WifiCalling3 } from "@mui/icons-material";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed z-50 text-black bg-white w-full border-b-2 lg:pb-0 pb-2">
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
            <Link href="/login" onClick={closeMenu}>
              <li className="flex gap-x-1 items-center">
                <WifiCalling3 /> <span>+8801738399899</span>
              </li>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
