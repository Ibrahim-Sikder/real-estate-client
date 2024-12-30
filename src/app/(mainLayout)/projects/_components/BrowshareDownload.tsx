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
      <div className="flex justify-center text-[#135F4A] bg-gray-200 rounded-lg content-center items-center py-5 mb-4">
        <div className="flex gap-2 justify-center items-center text-center content-center font-bold">
          <Image src={logo} alt="logo" className="w-32" />
          <h4 className="uppercase">Anna Developer&apos;s Brochure </h4>
        </div>
      </div>
      <div className="flex gap-10 justify-center">
        <div className="lg:mt-10 ">
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
            <CloudDownloadIcon sx={{ fontSize: "80px", marginBottom: "8px" }} />
            Download Brochure
          </Button>
        </div>

      </div>
    </>
  );
};

export default BrowshareDownload;
