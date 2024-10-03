import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Certified from "./Certified";

export default function MissionVision() {
  return (
    <>
      <Certified />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-20">
        {/* Mission Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">
            Our Mission
          </h2>
          <div className="lg:w-28 h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
          <p className="text-lg text-gray-600 mb-5 text-justify">
            Our mission is to create value and make a difference by delivering
            exceptional services and solutions in the real estate industry. We
            aim to provide quality living spaces that exceed expectations.
          </p>
          <ul className="text-gray-600 space-y-3">
            <li>
              <CheckCircleIcon className="text-[#135F4A]" /> Provide top-notch
              customer service and support.
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A]" /> Ensure the highest
              standards of quality in construction.
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A]" /> Focus on
              sustainability and eco-friendly solutions.
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A]" /> Build lasting
              relationships with clients and partners.
            </li>
          </ul>
        </div>

        {/* Vision Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">
            Our Vision
          </h2>
          <div className="lg:w-28 h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
          <p className="text-lg text-gray-600 mb-5 text-justify">
            Our vision is to become the most trusted real estate company by
            setting the benchmark for quality, innovation, and customer
            satisfaction.
          </p>
          <ul className="text-gray-600 space-y-3">
            <li>
              <CheckCircleIcon className="text-[#135F4A]" /> Expand into new
              markets and regions.
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A]" /> Promote green
              building practices.
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A]" /> Innovate through
              technology and smart home integration.
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A]" /> Establish a global
              presence in the real estate industry.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
