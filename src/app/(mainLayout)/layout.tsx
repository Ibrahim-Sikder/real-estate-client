
import Footer from "@/components/share/Footer/Footer";
import Header from "@/components/share/Header/Header";
import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LandingPageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Header /> */}
        {children}
        <Footer />
      </Suspense>
    </LandingPageProvider>
  );
};

export default layout;
