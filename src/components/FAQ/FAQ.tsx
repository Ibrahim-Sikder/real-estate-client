/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "../share/Container";
import faq from "../../../src/assets/images/faq/faq.png";
import Image from "next/image";
import Loader from "../share/Loader/Loader";

export type TFaq = {
  _id: string;
  question: string;
  answer: string;
  date: string;
};

const FAQ = () => {
  const [faqData, setFaqData] = useState<TFaq[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/faq`
        );
        const data = await response.json();
        setFaqData(data.data?.faqs || []);
      } catch (err) {
        setError("Failed to fetch FAQ data.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
        {error}
      </h1>
    );
  }

  if (!faqData || faqData.length === 0) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
        Oops! FAQ data not found!
      </h1>
    );
  }

  return (
    <Container className="my-20">
      <h2 className="text-center mb-5">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="lg:order1 order-2">
          {faqData.map((faqItem: TFaq, index: number) => (
            <Accordion key={faqItem._id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
                sx={{ fontWeight: "bold" }}
              >
                {faqItem.question}
              </AccordionSummary>
              <AccordionDetails>
                <div className="space-y-5 text-justify">
                  <p>{faqItem.answer}</p>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="lg:order-2 order-1">
          <Image src={faq} alt="FAQ illustration" />
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
