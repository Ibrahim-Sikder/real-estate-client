import { useState } from "react";
import SearchBar from "./SearchBar";

const SearchProjectTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="flex justify-center items-center">
      <div className="absolute lg:-bottom-20 -bottom-[320px]  xl:w-[1000px] mx-auto w-full z-10">
        <div className="lg:w-[400px] mx-auto grid grid-cols-3 gap-1 mb-2">
          <button
            className={`lg:p-3 py-2 px-1  lg:text-sm text-xs text-center uppercase font-bold rounded ${activeTab === "tab1"
              ? "bg-white text-[#eeb808]"
              : "bg-[rgba(227,200,13,0.56)] opacity-80 text-white"
              }`}
            onClick={() => setActiveTab("tab1")}
          >
            All Status
          </button>
          <button
            className={`lg:p-3 py-2 px-1  lg:text-sm text-xs text-center uppercase font-bold rounded ${activeTab === "tab2"
              ? "bg-white text-[#eeb808]"
              : "bg-[rgba(227,200,13,0.56)] opacity-80 text-white"
              }`}
            onClick={() => setActiveTab("tab2")}
          >
            Land Share
          </button>
          <button
            className={`lg:p-3 py-2 px-1  lg:text-sm text-xs text-center uppercase font-bold rounded ${activeTab === "tab3"
              ? "bg-white text-[#eeb808]"
              : "bg-[rgba(227,200,13,0.56)] opacity-80 text-white"
              }`}
            onClick={() => setActiveTab("tab3")}
          >
            For Sale
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "tab1" && <SearchBar />}
          {activeTab === "tab2" && <SearchBar />}
          {activeTab === "tab3" && <SearchBar />}
        </div>
      </div>
    </div>
  );
};

export default SearchProjectTab;
