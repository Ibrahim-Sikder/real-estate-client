"use client";

import { useEffect, useState } from "react";
import "./Scroll.css";
import { FaAnglesUp } from "react-icons/fa6";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="scroll-up-button" onClick={scrollToTop}>
          <FaAnglesUp className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default Scroll;
