import React from "react";

const State = () => {
  const steps = [
    {
      id: "01",
      title: "Find From Listing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "02",
      title: "Call The Owner",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "03",
      title: "Deal & Happy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div>
      <div className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#76B486] py-10 border-l-8 border-[#135F4A]">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              {/* Number */}
              <h2 className="text-5xl font-bold text-[#d35400] mb-4">
                {step.id}
              </h2>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

              {/* Description */}
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default State;
