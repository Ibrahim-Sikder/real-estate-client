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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " About - Anaa Developers Ltd ",
  description: "Anaa Developers Limited is a prominent real estate company specializing in the sale of land shares across various projects. Our mission is to offer high-quality...",
};


const page = () => {
  return (
    <>
      <Header />
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
