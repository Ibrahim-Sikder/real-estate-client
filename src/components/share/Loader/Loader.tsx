"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import loaderAnimation from "../../../../src/assets/loader/loader.json";

const Loader = () => {
  return (
    <div className="relative w-20 h-20 mx-auto">
      <Player
        autoplay
        loop
        src={loaderAnimation}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Loader;
