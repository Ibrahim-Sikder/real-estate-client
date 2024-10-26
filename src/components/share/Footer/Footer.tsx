import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../src/assets/images/logo/logo.png";
import softy from "../../../../src/assets/images/logo/softy.png";
import Container from "../Container";

import facebook from "../../../../src/assets/images/icon/facebook.png";
import instagram from "../../../../src/assets/images/icon/instagram.png";
import linkedin from "../../../../src/assets/images/icon/linkedin.png";
import twitter from "../../../../src/assets/images/icon/twitter.png";
import youtube from "../../../../src/assets/images/icon/youtube.png";

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
                <Link href='/'>
                  <div className="flex lg:justify-start justify-center">
                    <Image src={logo} alt="" className="w-28" />
                  </div>
                </Link>
                <h4 className="mt-5 lg:text-start text-center">
                  Connect Wit Us
                </h4>
                <div className="flex justify-center space-x-3 mt-5">
                  <Link href="https://www.facebook.com/AnaaDevelopersLtd">
                    <Image src={facebook} alt="" className="w-7" />
                  </Link>
                  <Link href="#">
                    <Image src={instagram} alt="" className="w-7" />
                  </Link>
                  <Link href="#">
                    <Image src={linkedin} alt="" className="w-7" />
                  </Link>
                  <Link href="#">
                    <Image src={twitter} alt="" className="w-7" />
                  </Link>
                  <Link href="https://youtube.com/@anaadevelopersltd?si=sSn6G0hth6Xw2znd">
                    <Image src={youtube} alt="" className="w-7" />
                  </Link>
                </div>
              </div>
            </div>

            {/* contact */}
            <div className="flex lg:justify-start justify-center">
              <div className="lg:mt-0 mt-10">
                <h4 className="mb-3 lg:text-start text-center">Contact</h4>
                <ul className="space-y-3 lg:text-start text-center">
                  <li>
                    <CallIcon /> <a href="tel:+8801738399899" className="hover:underline">
                      <span>+8801738399899</span>
                    </a>
                  </li>
                  <li>
                    <MailOutlineIcon /> anaadevelopersltd@gmail.com
                  </li>
                  <li>
                    <LocationOnIcon /> Dhaka, Bangladesh
                  </li>
                </ul>
              </div>
            </div>
            {/* <a href="mailto:muissaltd@gmail.com" className="text-blue-500">
                  info@muissa.com
                  </a> */}
            {/* Our Services */}
            <div className="flex lg:justify-start justify-center">
              <div className="lg:mt-0 mt-10">
                <h4 className="lg:text-start text-center">Company</h4>
                <ul className="mt-3 space-y-2 lg:text-start text-center">
                  <Link href="#">
                    <li>FAQ</li>
                  </Link>
                  <Link href="#">
                    <li>About us</li>
                  </Link>
                  <Link href="#">
                    <li>Terms & Condition</li>
                  </Link>
                  <Link href="#">
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
