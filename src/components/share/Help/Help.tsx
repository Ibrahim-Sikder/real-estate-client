import React from "react";
import Image from "next/image";
import help from "../../../assets/icon/call-center-agent.png";
import CallIcon from "@mui/icons-material/Call";

const Help = () => {
  return (
    <>
      <div className="py-5">
        <div>
          <div className="w-full border bg-white rounded-lg lg:flex items-center justify-between p-4 space-y-5 lg:space-y-0">
            <div className="flex flex-col lg:flex lg:flex-row items-center gap-5 text-center">
              <Image src={help} alt="icon" className="h-[120px] w-[120px] " />
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-blue-500">
                  কোন সাহায্য প্রয়োজন?
                </h1>
                <h1 className="text-xl">
                  যেকোন সমস্যায় কল করো (সকাল ১০ টা থেকে রাত ১০ টা)
                </h1>
              </div>
            </div>
            <div className="space-y-3 text-center">
              <h1 className="text-2xl font-bold ">কল করো</h1>
              <h1 className="text-xl border rounded-lg p-3 text-red-600">
                <CallIcon sx={{ color: "red" }} /> 01601929244
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
