import Image from "next/image";
import facebook from "../../../../../src/assets/images/icon/facebook.png";
import instagram from "../../../../../src/assets/images/icon/instagram.png";
import linkedin from "../../../../../src/assets/images/icon/linkedin.png";
import twitter from "../../../../../src/assets/images/icon/twitter.png";
import youtube from "../../../../../src/assets/images/icon/youtube.png";
import user1 from "../../../../../src/assets/images/profile/1.jpg";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Real Estate Agent",
    image: user1,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Property Manager",
    image: user1,
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Broker",
    image: user1,
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Broker",
    image: user1,
  },
];

export default function TeamSection() {
  return (
    <div className="my-20">
      <h2 className="text-center text-gray-800 mb-8 uppercase">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-5 shadow-md">
            <div className="flex justify-center">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mt-4">
              {member.name}
            </h3>
            <p className="text-center text-gray-600">{member.role}</p>
            <div className="flex justify-center space-x-3 mt-5">
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
        ))}
      </div>
    </div>
  );
}
