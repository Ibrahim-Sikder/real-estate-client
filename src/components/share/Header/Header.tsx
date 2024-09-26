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
    <div className="bg-white shadow-md sticky top-0 z-50 lg:py-0 py-2">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-28">
            <Image src={logo} alt="Logo" />
          </div>

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
            <Link href="/#">
              <li>ABOUT</li>
            </Link>
            <Link href="/#">
              <li>PROJECTS</li>
            </Link>
            <Link href="/#">
              <li>BLOG</li>
            </Link>
            <Link href="/#">
              <li>CONTACT</li>
            </Link>
            <Link href="/#">
              <li className="lg:hidden block">
                LOGIN <LoginIcon />
              </li>
            </Link>
          </ul>

          <div className="hidden lg:block">
            <button className="bg-[#135F4A] px-6 py-2 text-white text-sm font-semibold">
              LOGIN <LoginIcon />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
