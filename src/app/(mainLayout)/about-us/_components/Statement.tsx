import Image from "next/image";
import chairman from "../../../../../src/assets/images/profile/1.jpg";
import facebook from "../../../../../src/assets/images/icon/facebook.png";
import instagram from "../../../../../src/assets/images/icon/instagram.png";
import linkedin from "../../../../../src/assets/images/icon/linkedin.png";
import youtube from "../../../../../src/assets/images/icon/youtube.png";
import twitter from "../../../../../src/assets/images/icon/twitter.png";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

export default function Statement() {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image of the Chairman */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center border-2 border-[#135F4A]">
          <Image
            src={chairman}
            alt="Chairman"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Chairman's Statement */}
        <div className="md:w-2/3 w-full md:pl-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Md. Sheikh Shadi
          </h2>
          <p className="text-lg font-semibold text-gray-500 mb-4">
            Founder & Chairman
            <br />
            Assure Group
          </p>

          <p className="text-base text-gray-600 mb-5 text-justify">
            <strong className="font-bold">ASSURE GROUP</strong> drives forward
            to provide superior quality real-estate products under the energetic
            and capable leadership of the Founder & Chairman,{" "}
            <strong>Md. Sheikh Shadi</strong>.
          </p>
          <p className="text-base text-gray-600 mb-5 text-justify">
            His journey into real estate began when he realized that there was a
            huge gap in information and understanding of customer service. So he
            decided to take a new approach to the real estate business.
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
                <Image src={instagram} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={linkedin} alt="" className="w-5" />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="" className="w-5" />
              </Link>
              <Link href="https://youtube.com/@anaadevelopersltd?si=sSn6G0hth6Xw2znd">
                <Image src={youtube} alt="" className="w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
