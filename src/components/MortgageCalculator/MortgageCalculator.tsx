import React, { useState } from "react";
import Container from "../share/Container";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState<string>(""); // Set initial value as empty string
  const [downPayment, setDownPayment] = useState<string>("");
  const [loanTerm, setLoanTerm] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const calculateMortgage = () => {
    const principal = Number(homePrice) - Number(downPayment);
    const monthlyInterest = Number(interestRate) / 100 / 12;
    const numOfPayments = Number(loanTerm) * 12;

    if (!principal || !monthlyInterest || !numOfPayments) {
      setMonthlyPayment(0);
      return;
    }

    const monthly =
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numOfPayments)) /
      (Math.pow(1 + monthlyInterest, numOfPayments) - 1);

    setMonthlyPayment(monthly || 0);
  };

  return (
    <Container>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Mortgage Calculator
      </h2>
      <div className="bg-white shadow-md p-8 space-y-5 max-w-4xl mx-auto border">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">
              Home Price
            </label>
            <input
              type="text"
              className="w-full p-3 border focus:outline-none"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              placeholder="Enter home price"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">
              Down Payment
            </label>
            <input
              type="text"
              className="w-full p-3 border focus:outline-none"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              placeholder="Enter down payment"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">
              Loan Term (Years)
            </label>
            <input
              type="text"
              className="w-full p-3 border focus:outline-none"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="Enter loan term"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">
              Interest Rate (%)
            </label>
            <input
              type="text"
              className="w-full p-3 border focus:outline-none"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter interest rate"
            />
          </div>
        </div>
        <button
          onClick={calculateMortgage}
          className="w-full py-3 bg-[#135F4A] text-white"
        >
          Calculate Monthly Payment
        </button>
        {monthlyPayment > 0 && (
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold">
              Estimated Monthly Payment:
            </h3>
            <p className="text-3xl font-bold text-[#135F4A]">
              ${monthlyPayment.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MortgageCalculator;
