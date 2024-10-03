import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faq from "../../../../../src/assets/images/faq/faq.png";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="py-20">
      <h2 className="text-center mb-5">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="lg:order1 order-2">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ fontWeight: "bold" }}
            >
              What is the process of buying a home?
            </AccordionSummary>
            <AccordionDetails>
              <div className="space-y-5 text-justify">
                <p>
                  The home buying process involves several steps, including
                  finding a property, securing financing, making an offer,
                  negotiating terms, conducting a home inspection, and closing
                  the deal. Working with a real estate agent can simplify this
                  process.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontWeight: "bold" }}
            >
              How much should I save for a down payment?
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Typically, homebuyers are required to put down 20% of the
                purchase price of the home as a down payment, though some loans
                may allow lower down payments (such as 5%-10%) depending on
                credit scores and loan types.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{ fontWeight: "bold" }}
            >
              What are closing costs in a real estate transaction?
            </AccordionSummary>
            <AccordionDetails>
              <div className="space-y-5">
                <p>
                  Closing costs include all the fees required to finalize the
                  real estate transaction, such as loan origination fees, title
                  insurance, attorney fees, and property taxes. These usually
                  amount to 2%-5% of the purchase price.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
              sx={{ fontWeight: "bold" }}
            >
              What factors should I consider when choosing a neighborhood?
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-justify">
                Key factors include the neighborhood’s safety, proximity to
                schools, shopping centers, and public transport, future
                development plans, and the overall community atmosphere.
                It&aos;s essential to choose a location that fits your lifestyle
                and long-term needs.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
              sx={{ fontWeight: "bold" }}
            >
              How can I improve my home’s value before selling?
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-justify">
                Improving curb appeal, updating kitchens and bathrooms, adding
                energy-efficient appliances, and enhancing landscaping are great
                ways to boost your home’s value. Regular maintenance and repairs
                also ensure your home stays market-ready.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="lg:order-2 order-1">
          <Image src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
