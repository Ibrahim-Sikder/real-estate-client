"use client";
import { useState } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../src/assets/images/logo/Kalam_s-Tutorial.png";
import Container from "../Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="sticky top-0 w-full bg-white shadow-md z-50 py-2">
      <Container>
        <div className="lg:flex justify-between items-center">
          <div>
            {open ? (
              <div onClick={handleClose} className="bar1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <div
                onClick={handleOpen}
                className={`bar2 ${open ? "" : "activeBar"}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <ul
              className={`flex justify-between items-center font-medium lg:text-lg text-sm navItems ${
                open ? "" : "activeMenu"
              }`}
            >
              <li className="hidden lg:block">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="logo"
                    className="w-16"
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
              <li className="lg:border-none border-b lg:py-0 py-2">
                <Link href="/">হোম</Link>
              </li>
              <li className="lg:border-none border-b lg:py-0 py-2">
                <Link href="/freecourse">ফ্রী কোর্স</Link>
              </li>
              <li className="dropdownMenuWrap lg:border-none border-b lg:py-0 py-2 z-10">
                <Link href="/#">
                  স্পেশাল ব্যাচ <KeyboardArrowDownIcon />
                </Link>
                <ul className="dropdownMenu submenu">
                  <li>
                    <Link href="/hsc-25">HSC 2025 all courses</Link>
                  </li>
                  <li>
                    <Link href="/hsc-26">HSC 2026 all courses</Link>
                  </li>
                  <li>
                    <Link href="/ssc-25">SSC 2025 all courses</Link>
                  </li>
                </ul>
              </li>

              <li className="lg:border-none border-b lg:py-0 py-2">
                <Link href="/notice">নোটিশ</Link>
              </li>
              <li className="lg:border-none border-b lg:py-0 py-2">
                <Link href="/about">আমাদের সম্পর্কে</Link>
              </li>
              <li className="lg:border-none border-b lg:py-0 py-2">
                <Link href="/contact">যোগাযোগ</Link>
              </li>
              <li className="lg:hidden block">
                <Link href="/login">লগ ইন</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <div className="lg:hidden block">
              <Image
                src={logo}
                alt="logo"
                className="w-12"
                width={50}
                height={50}
              />
            </div>
            <ul className="font-medium lg:text-lg text-sm">
              <li className="dropdownMenuWrap border px-4 py-2"> 
                <Link href="/#">
                  আমাদের কোর্সসমূহ <KeyboardArrowDownIcon />
                </Link>
                <ul className="dropdownMenu">
                  <li>
                    <Link href="/our-courses/all-course">সকল কোর্স</Link>
                  </li>
                  <li>
                    <Link href="/our-courses/class-nine">নবম শ্রেণী</Link>
                  </li>
                  <li>
                    <Link href="/our-courses/ssc">এসএসসি</Link>
                  </li>
                  <li>
                    <Link href="/our-courses/hsc">এইচএসসি</Link>
                  </li>
                  <li>
                    <Link href="/our-courses/admission">এডমিশন</Link>
                  </li>
                  <li>
                    <Link href="/our-courses/skill-development">
                      স্কিল ডেভেলপমেন্ট
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-courses/running-course">রানিং কোর্স</Link>
                  </li>
                  <li>
                    <Link href="/our-courses/upcoming-course">
                      আপকামিং কোর্স
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-red-600 to-yellow-600 px-4 py-2 rounded text-white hidden lg:block">
              <Link href="/login">লগ ইন</Link>
            </button>
            <div>
              <ul className="font-medium lg:text-lg text-sm">
                <li className="dropdownMenuWrap">
                  <Link href="/#">
                    <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-2 rounded-full text-white">
                      <AccountCircleIcon fontSize="large" />
                    </div>
                  </Link>
                  <ul className="dropdownMenu submenu2">
                    <li>
                      <Link href="/account">আমার একাউন্ট</Link>
                    </li>
                    <li>
                      <Link href="/contact">যোগাযোগ</Link>
                    </li>
                    <li>
                      <Link href="/about">আমাদের সম্পর্কে</Link>
                    </li>
                    <li>
                      <Link href="/faq">সচরাচর জিজ্ঞাসিত প্রশ্ন</Link>
                    </li>
                    <li>
                      <Link href="/terms">টার্মস এবং শর্তাবলি</Link>
                    </li>
                    <li>
                      <Link href="/privacy">প্রাইভেসি পলিসি</Link>
                    </li>
                    <li>
                      <Link href="/refund">রিফান্ড পলিসি</Link>
                    </li>
                    <li>
                      <Link href="/#">লগ আউট</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
