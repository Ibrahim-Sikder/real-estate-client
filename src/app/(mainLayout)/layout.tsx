
import Footer from "@/components/share/Footer/Footer";
import ShareBuy from "@/components/ShareBuy/ShareBuy";

import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LandingPageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Header /> */}
        {children}
        <ShareBuy/>
        <Footer />
      </Suspense>
    </LandingPageProvider>
  );
};

export default layout;
