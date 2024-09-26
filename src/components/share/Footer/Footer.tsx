import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/images/logo/Kalam_s-Tutorial.png";
import softyPy from "../../../../src/assets/images/logo/softy.png";
import pay from "../../../../src/assets/images/logo/pay.png";
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
                <div className="flex items-center space-x-2">
                  <Image src={logo} alt="Seville Logo" width={50} height={50} />
                  <h3 className="font-bold text-lg">Kalam&apos;s Tutorial</h3>
                </div>
                <h4 className="font-semibold text-2xl mt-5">
                  আমাদের সাথে যুক্ত হও
                </h4>
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
                <h4 className="font-semibold text-2xl mb-3 lg:text-start text-center">
                  যোগাযোগ
                </h4>
                <ul className="space-y-3 lg:text-start text-center">
                  <li>
                    <CallIcon /> 01601929244
                  </li>
                  <li>
                    <MailOutlineIcon /> fahadstutorial@gmail.com
                  </li>
                  <li>
                    <LocationOnIcon /> 10/B, Plot: 03, Fakirbari, Mirpur, Dhaka
                    - 1216
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Services */}
            <div className="flex lg:justify-start justify-center">
              <div className="lg:mt-0 mt-10">
                <h4 className="font-semibold lg:text-start text-center">
                  কোম্পানি
                </h4>
                <ul className="mt-3 space-y-2 lg:text-start text-center">
                  <Link href="/faq">
                    <li>সচরাচর জিজ্ঞাসিত প্রশ্ন</li>
                  </Link>
                  <Link href="/about">
                    <li>আমাদের সম্পর্কে</li>
                  </Link>
                  <Link href="/terms">
                    <li>টার্মস এবং শর্তাবলি</li>
                  </Link>
                  <Link href="/privacy">
                    <li>প্রাইভেসি পলিসি</li>
                  </Link>
                  <Link href="/refund">
                    <li>রিফান্ড পলিসি</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 text-center">
            <div className="my-5">
              <Image src={pay} alt="" className="w-full" />
            </div>
            <p>
              &copy; Copyrights Kalam&apos;s Tutorial 2024. All Rights Reserved
            </p>
            <div className="flex justify-center items-center space-x-5 mt-3 lg:w-64 md:w-64 w-full mx-auto rounded">
              <p>Developed by</p>
              <Image src={softyPy} alt="" className="w-24" />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
