import "./HomeBanner.css";
import SearchProjectTab from "../SearchBar/SearchProjectTab";

const HomeBanner = () => {
  return (
    <section className="homeBannerWrap">
      <div className="bannerContent space-y-1 lg:w-[700px] w-full lg:px-0 px-5">
        <h3>Welcome To</h3>
        <h1 className="text-[#E3C80D] font-bold">Anaa Developers Ltd </h1>
        <p className="hidden md:block ">
          We believe in creating opportunities for all types of investors,
          making land ownership accessible and affordable, while promoting
          sustainable development.
        </p>
      </div>
      <SearchProjectTab />
    </section>
  );
};

export default HomeBanner;
