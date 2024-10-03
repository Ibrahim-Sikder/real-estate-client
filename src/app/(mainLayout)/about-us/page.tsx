import Container from "@/components/share/Container";
import React from "react";
import TeamSection from "./_components/TeamSection";
import Affiliation from "@/components/Affiliation/Affiliation";
import Statement from "./_components/Statement";
import MissionVision from "./_components/MissionVision";
import ProblemSolve from "./_components/ProblemSolve";
import FAQ from "./_components/FAQ";
import Banner from "@/components/share/Banner/Banner";

const page = () => {
  return (
    <div className="bg-gray-100">
      <Banner/>
      <Container>
        <Statement />
        <ProblemSolve />
        <MissionVision />
        <TeamSection />
        <FAQ />
        <Affiliation />
      </Container>
    </div>
  );
};

export default page;
