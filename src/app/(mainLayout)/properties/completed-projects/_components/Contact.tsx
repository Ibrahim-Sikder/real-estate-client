import Image from "next/image";
import img from "../../../../../../src/assets/images/contact/contact.png";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 border shadow-lg bg-[#76B486]">
        <Image src={img} className="lg:h-[500px] w-auto" alt="this is img" />

        <form className="space-y-3">
          <div>
            <label className="text-sm">Name</label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-2 focus:outline-none bg-gray-50"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 focus:outline-none bg-gray-50"
            />
          </div>
          <div>
            <label className="text-sm">Number</label>
            <input
              id="text"
              type="text"
              className="w-full p-2 focus:outline-none bg-gray-50"
            />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              id="message"
              className="w-full p-3 focus:outline-none bg-gray-50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase bg-[#135F4A]  text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
