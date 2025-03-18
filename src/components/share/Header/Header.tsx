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
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-white shadow-md text-black sticky top-0 z-50 lg:py-0 py-2">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="md:w-28 w-20">
              <Image src={logo} alt="Logo" />
            </div>
          </Link>

          <div
            className="lg:hidden block cursor-pointer mt-1"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>

          <ul
            className={`lg:flex justify-between gap-10 lg:p-7 text-sm lg:font-semibold nav-items ${
              isMenuOpen ? "open" : "hidden"
            }`}
          >
            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/#"
              onClick={closeMenu}
            >
              <li>HOME</li>
            </Link>
            <Link
              className={`link ${
                pathname === "/about-us" ? "text-[#135F4A]" : ""
              }`}
              href="/about-us"
              onClick={closeMenu}
            >
              <li>ABOUT</li>
            </Link>
            <Link
              className={`link ${
                pathname === "/projects" ? "text-[#135F4A]" : ""
              }`}
              href="/projects"
              onClick={closeMenu}
            >
              <li>PROJECTS</li>
            </Link>
            <Link
              className={`link ${
                pathname === "/gallery" ? "text-[#135F4A]" : ""
              }`}
              href="/gallery"
              onClick={closeMenu}
            >
              <li>GALLERY</li>
            </Link>
            <Link
              className={`link ${
                pathname === "/services" ? "text-[#135F4A]" : ""
              }`}
              href="/services"
              onClick={closeMenu}
            >
              <li>SERVICES</li>
            </Link>
            <Link
              className={`link ${pathname === "/blog" ? "text-[#135F4A]" : ""}`}
              href="/blog"
              onClick={closeMenu}
            >
              <li>BLOG</li>
            </Link>
            <Link
              className={`link ${
                pathname === "/contact" ? "text-[#135F4A]" : ""
              }`}
              href="/contact"
              onClick={closeMenu}
            >
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
