import Footer from "@/components/share/Footer/Footer";
import Loader from "@/components/share/Loader/Loader";
import Scroll from "@/components/share/Scroll/Scroll";
import ShareBuy from "@/components/ShareBuy/ShareBuy";

import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LandingPageProvider>
      <Suspense fallback={<Loader />}>
        {/* <Header /> */}
        {children}
        <Scroll />
        <ShareBuy />
        <Footer />
      </Suspense>
    </LandingPageProvider>
  );
};

export default layout;
