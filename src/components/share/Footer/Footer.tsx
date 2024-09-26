import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../src/assets/images/logo/logo.png";
import softy from "../../../../src/assets/images/logo/softy.png";
import Container from "../Container";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <Container>
          <div className="lg:flex justify-between">
            {/* Social Media Icons */}
            <div className="flex lg:justify-start justify-center">
              <div className="lg:mt-0 mt-10">
                <Image src={logo} alt="" className="w-28" />
                <h4 className="mt-5">Connect Wit Us</h4>
                <ul className="flex lg:justify-start justify-center gap-5 mt-3">
                  <li>
                    <Link href="#">
                      <FacebookIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <InstagramIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <LinkedInIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <XIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* contact */}
            <div className="flex lg:justify-start justify-center">
              <div className="lg:mt-0 mt-10">
                <h4 className="mb-3 lg:text-start text-center">Contact</h4>
                <ul className="space-y-3 lg:text-start text-center">
                  <li>
                    <CallIcon /> 01XXXXXXXXXX
                  </li>
                  <li>
                    <MailOutlineIcon /> example@gmail.com
                  </li>
                  <li>
                    <LocationOnIcon /> Dhaka, Bangladesh
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Services */}
            <div className="flex lg:justify-start justify-center">
              <div className="lg:mt-0 mt-10">
                <h4 className="lg:text-start text-center">Company</h4>
                <ul className="mt-3 space-y-2 lg:text-start text-center">
                  <Link href="/faq">
                    <li>FAQ</li>
                  </Link>
                  <Link href="/about">
                    <li>About us</li>
                  </Link>
                  <Link href="/terms">
                    <li>Terms & Condition</li>
                  </Link>
                  <Link href="/privacy">
                    <li>Privacy Policy</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          {/* Bottom Section */}
          <div className="flex justify-center items-center space-x-5 mt-5 lg:w-64 md:w-64 w-full mx-auto rounded">
            <p className="text-center">Developed by</p>
            <Image src={softy} alt="" className="w-24" />
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
