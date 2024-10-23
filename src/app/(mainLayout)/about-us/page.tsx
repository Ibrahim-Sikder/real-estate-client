import Container from "@/components/share/Container";
import React from "react";
import TeamSection from "./_components/TeamSection";
import Affiliation from "@/components/Affiliation/Affiliation";
import Statement from "./_components/Statement";
import MissionVision from "./_components/MissionVision";
import ProblemSolve from "./_components/ProblemSolve";
import FAQ from "./_components/FAQ";
import AboutBanner from "./_components/AboutBanner";
import Header from "@/components/share/Header/Header";


const page = () => {
  return (
    <>
    <Header/>
      <div className="bg-gray-100">
        <AboutBanner />
        <Container>
          <Statement />
          <ProblemSolve />
          <MissionVision />
          <TeamSection />
          <Affiliation />
          <FAQ />
        </Container>
      </div>
    </>
  );
};

export default page;
