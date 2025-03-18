"use client";
import React from "react";
import Head from "next/head";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import CoffeeSection from "@/components/Coffee/Coffee";
import Testimonials from "@/components/Testimonial/Testimonial";
import Affiliation from "@/components/Affiliation/Affiliation";
import Trusted from "@/components/Trusted/Trusted";
import FAQ from "@/components/FAQ/FAQ";
import HomeBanner from "@/components/ui/HomePage/HomeBanner/HomeBanner";
import Projects from "@/components/ui/HomePage/Projects/Projects";
import VideoSection from "@/components/ui/HomePage/VideoSection/VideoSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Anaa Developers Limited | Your Trusted Real Estate Partner</title>
        <meta
          name="description"
          content="Welcome to Anaa Developers Limited! Discover your dream home, explore our latest projects, and trust us to build a brighter future for you."
        />
        <meta name="keywords" content="real estate, Anaa Developers, properties, projects, homes" />
        <meta name="author" content="Anaa Developers Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Anaa Developers Limited | Your Trusted Real Estate Partner" />
        <meta
          property="og:description"
          content="Explore premium real estate projects and properties for sale. Join hands with Anaa Developers for exceptional services."
        />

      </Head>
      <div>
        <HomeBanner />
        <Trusted />
        <Projects />
        <VideoSection />
        <FeaturedProperties />
        <Affiliation />
        <CoffeeSection />
        <Testimonials />
        {/* <ShareBuy /> */}
        <FAQ />
      </div>
    </>
  );
};

export default Home;
