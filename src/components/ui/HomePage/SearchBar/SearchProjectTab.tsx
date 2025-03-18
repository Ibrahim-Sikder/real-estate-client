import { useState } from "react";
import SearchBar from "./SearchBar";
import ReadyFlate from "./ReadyFlate";

const SearchProjectTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="mx-5">
      <div className="flex justify-center items-center">
        <div className="absolute lg:top-[470px] md:top-[450px] top-[185px] xl:w-[1000px] mx-auto w-full z-10">
          <div className="mx-5">
            <div className="lg:w-[400px] mx-auto grid grid-cols-3 lg:gap-5 md:gap-5 gap-2 md:mb-2">
              <button
                className={`lg:p-3 py-2 px-1 lg:text-sm text-xs text-center uppercase font-bold rounded ${
                  activeTab === "tab1"
                    ? "bg-[#E3C80D] text-[#135F4A]"
                    : "bg-[#135F4A] text-white"
                }`}
                onClick={() => setActiveTab("tab1")}
              >
                All Status
              </button>
              <button
                className={`lg:p-3 py-2 px-1  lg:text-sm text-xs text-center uppercase font-bold rounded ${
                  activeTab === "tab2"
                    ? "bg-[#E3C80D] text-[#135F4A]"
                    : "bg-[#135F4A] text-white"
                }`}
                onClick={() => setActiveTab("tab2")}
              >
                Land Share
              </button>
              <button
                className={`lg:p-3 py-2 px-1  lg:text-sm text-xs text-center uppercase font-bold rounded ${
                  activeTab === "tab3"
                    ? "bg-[#E3C80D] text-[#135F4A]"
                    : "bg-[#135F4A] text-white"
                }`}
                onClick={() => setActiveTab("tab3")}
              >
                Ready Flat
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-5">
            {activeTab === "tab1" && <SearchBar />}
            {activeTab === "tab2" && <SearchBar />}
            {activeTab === "tab3" && <ReadyFlate />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProjectTab;
