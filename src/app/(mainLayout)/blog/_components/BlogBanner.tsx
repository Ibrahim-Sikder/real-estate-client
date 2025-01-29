import Image from "next/image";
import bannerImage from "../../../../../src/assets/banner/breadcumb-bg.jpg";

type BannerProps = {
  title: string;
};

const BlogBanner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className="relative flex items-center justify-center h-[200px] lg:h-[300px]">
      <Image src={bannerImage} alt="Banner Background" layout="fill" />
      <h1 className="relative z-10 lg:text-4xl md:text-4xl text-2xl font-bold text-white uppercase">
        {title}
      </h1>
    </div>
  );
};

export default BlogBanner;
