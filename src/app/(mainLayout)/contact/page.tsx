import React from "react";
import ContactBanner from "./_components/ContactBanner";
import Container from "@/components/share/Container";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";

const page = () => {
  return (
    <div>
      <ContactBanner />
      <div className="bg-gray-100 py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Side: Contact Form */}
            <div className="bg-white p-8 shadow-md">
              <form className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full mt-2 p-3 border border-[#135F4A] focus:outline-none text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full mt-2 p-3 border border-[#135F4A] focus:outline-none text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full mt-2 p-3 border border-[#135F4A] focus:outline-none text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    placeholder="Your message here..."
                    className="w-full mt-2 p-3 border border-[#135F4A] focus:outline-none text-sm"
                    rows={4}
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#135F4A] text-white font-semibold"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side: Contact Info */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-green-900 mb-6">
                Let&apos;s Get In Touch With Our Professionals Team
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-4 rounded-full text-white">
                    <LocationOnIcon fontSize="large" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Head Quarter</h3>
                    <p>Gresik United East Java Number 123 Block M</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-4 rounded-full text-white">
                    <MailOutlineIcon fontSize="large" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <p>Hello@email.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-4 rounded-full text-white">
                    <CallIcon fontSize="large" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p>+880 123 456789</p>
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
        </Container>
      </div>
    </div>
  );
};

export default page;
