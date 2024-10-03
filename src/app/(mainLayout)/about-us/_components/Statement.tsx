import Image from "next/image";
import chairman from "../../../../../src/assets/images/profile/director.png";
import md from "../../../../../src/assets/images/profile/md.jpg";
import facebook from "../../../../../src/assets/images/icon/facebook.png";
import instagram from "../../../../../src/assets/images/icon/instagram.png";
import linkedin from "../../../../../src/assets/images/icon/linkedin.png";
import twitter from "../../../../../src/assets/images/icon/twitter.png";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

export default function Statement() {
  return (
    <section className="py-12 space-y-10">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image of the Chairman */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center rounded-lg shadow-2xl border">
          <Image
            src={chairman}
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
            Founder & Chairman
            <br />
            {/* Anaa Developer Ltd. */}
          </p>

          <p className="text-base text-gray-600 mb-5 text-justify">
            {/* <strong className="font-bold">Anaa Developer Ltd.</strong> drives
            forward to provide superior quality real-estate products under the
            energetic and capable leadership of the Founder & Chairman,{" "}
            <strong>Nasrin Akter</strong>. */}
            As the Chairman of Anaa Developers Ltd., it is my privilege to lead a company that is committed to redefining the real estate landscape in Bangladesh. Our journey has been guided by the core values of integrity, innovation, and excellence. We aim not only to build homes but also to foster thriving communities that offer a harmonious blend of comfort, security, and modern living.
          </p>
          <p className="text-base text-gray-600 mb-5 text-justify">
            

            Our unwavering dedication to quality, timely project completion, and customer satisfaction sets us apart in the industry. We believe in creating value-driven opportunities for our clients, whether they are looking to invest or find their dream home. As we continue to grow, we remain focused on sustainable practices and contributing positively to the urban development of our country.

            Thank you for your trust in Anaa Developers Ltd. Together, we are building a brighter, better future.
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
      <div className="flex flex-col md:flex-row items-center gap-10">
        

        {/* Chairman's Statement */}
        <div className="md:w-2/3 w-full md:pl-0 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-1 text-[#135F4A]">
            Md. Ashraful Alam
          </h2>
          <p className="text-lg font-semibold text-gray-500 mb-4">
            Managing Director
            <br />
            {/* Anaa Developer Ltd. */}
          </p>

          <p className="text-base text-gray-600 mb-5 text-justify">
            {/* <strong className="font-bold">Anaa Developer Ltd.</strong> drives
            forward to provide superior quality real-estate products under the
            energetic and capable leadership of the Founder & Chairman,{" "}
            <strong>Mr. Williams</strong>. */}
            As the Managing Director of Anaa Developers Ltd., I am proud to be part of a company that is transforming the real estate sector in Bangladesh. Our focus has always been on creating high-quality developments that meet the needs of modern living while maintaining the highest standards of construction and design. We understand that purchasing a property is one of the most significant decisions in our clients lives, and we take that responsibility seriously.
          </p>
          <p className="text-base text-gray-600 mb-5 text-justify">
            

            Our commitment to transparency, innovation, and customer satisfaction is at the core of everything we do. From the planning stages to project completion, we ensure that every detail is meticulously crafted to provide value and peace of mind to our clients. We also place great emphasis on sustainable development, ensuring that our projects contribute positively to the environment and the communities around them.

            I would like to extend my heartfelt gratitude to our clients, partners, and team for their continued trust and support. Together, we will continue to shape the future of real estate in Bangladesh with passion and purpose.
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

        {/* Image of the Chairman */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center rounded-lg shadow-2xl border p-5">
          <Image
            src={md}
            alt="Chairman"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}
