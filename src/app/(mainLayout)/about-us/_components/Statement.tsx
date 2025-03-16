import Image from "next/image";
import facebook from "../../../../../src/assets/images/icon/facebook.png";
import instagram from "../../../../../src/assets/images/icon/instagram.png";
import linkedin from "../../../../../src/assets/images/icon/linkedin.png";
import twitter from "../../../../../src/assets/images/icon/twitter.png";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import nasrin from "../../../../../src/assets/about/nasrin.jpeg";
import asraful from "../../../../../src/assets/about/asraful.jpeg";
import arowa from "../../../../../src/assets/about/arowa.jpeg";
export default function Statement() {
  return (
    <section className="py-12 space-y-10">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image of the Chairman */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center rounded-lg shadow-2xl border">
          <Image
            src={nasrin}
            alt="Chairman"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Chairman's Statement */}
        <div className="md:w-2/3 w-full md:pl-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#135F4A] mb-1">
            Nasrin Akter
          </h2>
          <p className="text-lg font-semibold text-gray-500 mb-4">
            Founder & Chairman of Anaa Developers Ltd.
            <br />
          </p>

          <p className="text-base text-gray-600 mb-5 text-justify">
            Nasrin Akter – Founder & Chairman of Anaa Developers Ltd. Nasrin
            Akter, the visionary Founder & Chairman of Anaa Developers Ltd., has
            been leading the company with dedication and expertise in
            Bangladesh’s real estate sector. With a deep understanding of land
            development and property investment, she has successfully built Anaa
            Developers into a trusted name for land share sales and ready flat
            solutions.
          </p>
          <p className="text-base text-gray-600 mb-5 text-justify">
            Under her leadership, the company has undertaken innovative
            residential projects, ensuring modern, secure, and high-quality
            housing solutions for homebuyers and investors. Her commitment to
            transparency, customer satisfaction, and excellence has earned Anaa
            Developers Ltd. a strong reputation in the industry.
          </p>
          <p className="text-base text-gray-600 mb-5 text-justify">
            With a passion for shaping Dhaka’s urban landscape, Nasrin Akter
            continues to drive Anaa Developers towards creating sustainable,
            well-planned communities that meet the evolving needs of modern
            living.
          </p>
          <b>📍 Anaa Developers Ltd. – Turning Dreams into Reality.</b>
          {/* Find Out More Link */}
          <div className="flex lg:gap-10 gap-5 items-center">
            <p>
              Connect To
              <EastIcon fontSize="small" className="text-[#135F4A]" />
            </p>
            <div className="flex space-x-3">
              <Link href="https://www.facebook.com/AnaaDevelopersLtd">
                <Image src={facebook} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={linkedin} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="" className="w-5" />
              </Link>

              {/* <Link href="https://youtube.com/@anaadevelopersltd?si=sSn6G0hth6Xw2znd">
                <Image src={youtube} alt="" className="w-5" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Managing Director Statement */}
        <div className="md:w-2/3 w-full md:pl-0 text-center md:text-left md:order-1 order-2">
          <h2 className="text-3xl font-bold mb-1 text-[#135F4A]">
            Md. Ashraful Alam
          </h2>
          <p className="text-lg font-semibold text-gray-500 mb-4">
            Managing Director of Anaa Developers Ltd.
            <br />
          </p>

          <p className="text-base text-gray-600 mb-5 text-justify">
            Md. Ashraful Alam – Managing Director of Anaa Developers Ltd. Md.
            Ashraful Alam, the Managing Director of Anaa Developers Ltd., is a
            dynamic leader with extensive expertise in real estate development
            and property management. With a strong vision for sustainable urban
            growth, he has played a key role in shaping Anaa Developers into a
            trusted name in Bangladesh’s real estate industry.
          </p>
          <p className="text-base text-gray-600 mb-5 text-justify">
            His leadership focuses on delivering high-quality housing solutions,
            ensuring customer satisfaction, and maintaining transparency in land
            share sales and ready flat services. His strategic planning and
            dedication have helped Anaa Developers successfully complete
            multiple residential projects, offering modern, secure, and
            well-planned living spaces.
          </p>
          <p>
            With a commitment to excellence, Md. Ashraful Alam continues to
            drive Anaa Developers Ltd. toward greater innovation, setting new
            standards in urban housing and land development.
          </p>
          <b>📍 Anaa Developers Ltd. – Your Trusted Partner in Real Estate.</b>
          {/* Find Out More Link */}
          <div className="flex lg:gap-10 gap-5 items-center">
            <p>
              {" "}
              Connect To{" "}
              <EastIcon fontSize="small" className="text-[#135F4A]" />
            </p>
            <div className="flex space-x-3">
              <Link href="https://www.facebook.com/AnaaDevelopersLtd">
                <Image src={facebook} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={linkedin} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="" className="w-5" />
              </Link>

              {/* <Link href="https://youtube.com/@anaadevelopersltd?si=sSn6G0hth6Xw2znd">
                <Image src={youtube} alt="" className="w-5" />
              </Link> */}
            </div>
          </div>
        </div>

        {/* Image of the Managing Director */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center rounded-lg shadow-2xl border p-5 md:order-2 order-1">
          <Image
            src={asraful}
            alt="Chairman"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        {/* Image of the Chairman */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center rounded-lg shadow-2xl border p-5">
          <Image
            src={arowa}
            alt="Chairman"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Chairman's Statement */}
        <div className="md:w-2/3 w-full md:pl-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#135F4A] mb-1">
            Arowa Binte Ashraf
          </h2>
          <p className="text-lg font-semibold text-gray-500 mb-4">
            Director
            <br />
          </p>

          <p className="text-base text-gray-600 mb-5 text-justify">
            As the Director of Anaa Developers Ltd., it is my privilege to lead
            a company that is committed to redefining the real estate landscape
            in Bangladesh. Our journey has been guided by the core values of
            integrity, innovation, and excellence. We aim not only to build
            homes but also to foster thriving communities that offer a
            harmonious blend of comfort, security, and modern living.
          </p>
          <p className="text-base text-gray-600 mb-5 text-justify">
            Our unwavering dedication to quality, timely project completion, and
            customer satisfaction sets us apart in the industry. We believe in
            creating value-driven opportunities for our clients, whether they
            are looking to invest or find their dream home. As we continue to
            grow, we remain focused on sustainable practices and contributing
            positively to the urban development of our country.
          </p>
          <p>
            {" "}
            Thank you for your trust in Anaa Developers Ltd. Together, we are
            building a brighter, better future.
          </p>

          {/* Find Out More Link */}
          <div className="flex lg:gap-10 gap-5 items-center">
            <p>
              {" "}
              Connect To{" "}
              <EastIcon fontSize="small" className="text-[#135F4A]" />
            </p>
            <div className="flex space-x-3">
              <Link href="https://www.facebook.com/AnaaDevelopersLtd">
                <Image src={facebook} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={linkedin} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="" className="w-5" />
              </Link>

              {/* <Link href="https://youtube.com/@anaadevelopersltd?si=sSn6G0hth6Xw2znd">
                <Image src={youtube} alt="" className="w-5" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
