import Container from "@/components/share/Container";
import React from "react";
import ProjectsBanner from "./_components/ProjectsBanner";

const page = () => {
  return (
    <div>
      <ProjectsBanner />
      <Container>
        <h1>All Projects</h1>
      </Container>
    </div>
  );
};

export default page;
