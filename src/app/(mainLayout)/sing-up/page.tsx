import Image from "next/image";
import login from "../../../../src/assets/images/login/login.png";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex max-w-4xl w-full mx-5">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2">
          <Image
            className="object-cover h-full w-full"
            src={login}
            alt="Login Image"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 bg-white shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Please Sign Up !
          </h2>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="email">
                Name
              </label>
              <input
                type="name"
                id="name"
                className="w-full px-4 py-2 mt-2 border focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 border focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 border focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-[#135F4A]"
                />
                <span className="ml-2 text-gray-600 text-xs mt-[2px]">
                  Remember me
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#135F4A] text-white"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#135F4A]">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
