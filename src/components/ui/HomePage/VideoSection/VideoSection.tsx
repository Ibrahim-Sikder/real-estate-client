import Container from "@/components/share/Container";
import React from "react";

const VideoSection = () => {
  return (
    <Container>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/WjFJf_bIv54?rel=0"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default VideoSection;
