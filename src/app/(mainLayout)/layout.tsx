// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Header from "@/components/share/Header/Header";
// import Footer from "@/components/share/Footer/Footer";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const pathname = usePathname();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <div>
//       <Header />
//       {children}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import Footer from "@/components/share/Footer/Footer";
import Header from "@/components/share/Header/Header";
import Loader from "@/components/share/Loader/Loader";
import Scroll from "@/components/share/Scroll/Scroll";
import ShareBuy from "@/components/ShareBuy/ShareBuy";
import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import { Metadata } from "next";
import React, { ReactNode, Suspense } from "react";

export const metadata: Metadata = {
  title: "Anaa Developers Ltd",
  description: "Anaa Developers Limited is a prominent real estate company specializing in the sale of land shares across various projects. Our mission is to offer high-quality...",
};



const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LandingPageProvider>

      <Suspense fallback={<Loader />}>
        <Header />
        {children}
        <Scroll />
        <ShareBuy />
        <Footer />
      </Suspense>
    </LandingPageProvider>
  );
};

export default layout; 
