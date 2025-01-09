import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import React from "react";
import Button from "@mui/material/Button";
import { OverviewProps } from "@/types/project";
import Link from "next/link";
import logo from "../../../../assets/images/logo/logo.png";
import Image from "next/image";

const BrowshareDownload: React.FC<OverviewProps> = ({ projectData }) => {
  return (
    <>
      <div className="lg:flex md:flex justify-between gap-5 text-[#135F4A] bg-gray-200 rounded-lg content-center items-center p-5 lg:mt-0 mt-5">
        <div className="flex gap-2 justify-center items-center text-center content-center font-bold">
          <Image src={logo} alt="logo" className="lg:w-56 md:w-52 w-32" />
          <h4 className="uppercase">Anna Developer&apos;s Brochure </h4>
        </div>
        <div className="flex gap-10 justify-center lg:mt-0 mt-5">
          <div className="">
            <Button
              target="_blank"
              component={Link}
              href={`${projectData.brochure_link}`}
              sx={{
                height: "200px",
                width: "250px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#135F4A",
                color: "#fff",
              }}
            >
              <CloudDownloadIcon
                sx={{ fontSize: "80px", marginBottom: "8px" }}
              />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowshareDownload;
