import React from "react";
import Container from "@/components/share/Container";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import ContactBanner from "./ContactBanner";
import Affiliation from "@/components/Affiliation/Affiliation";

import ContactForm from "./_components/ContactForm";
import Header from "@/components/share/Header/Header";

const page = () => {
  return (
    <div>
         <Header/>
      <ContactBanner />
      <div className="bg-gray-100 py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Side: Contact Form */}
            <ContactForm />

            {/* Right Side: Contact Info */}
            <div className="p-8">
              <h3 className="text-[#135F4A] uppercase mb-6">
                Let&apos;s Get In Touch With Our Professionals Team
              </h3>
              <p className="text-gray-600 mb-8">
                Anaa Developers Limited is a prominent real estate company specializing in the sale of land shares across various projects.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#135F4A]  p-4 rounded-full text-white">
                    <LocationOnIcon fontSize="large" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Head Quarter</h3>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#135F4A]  p-4 rounded-full text-white">
                    <MailOutlineIcon fontSize="large" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <p>anaadevelopersltd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#135F4A]  p-4 rounded-full text-white">
                    <CallIcon fontSize="large" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p>+8801738399899</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.1518268683578!2d90.42238324968673!3d23.820644750680454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700ff992a63%3A0xbdcb1d9ae66b2d5c!2sSoftypi%20Technology!5e0!3m2!1sen!2sbd!4v1711790838610!5m2!1sen!2sbd"
              className="map w-full h-[450px]"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Affiliation />
        </Container>
      </div>
    </div>
  );
};

export default page;