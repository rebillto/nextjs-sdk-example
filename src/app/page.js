"use client";

import { useState } from "react";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import ClubSelection from "../components/ClubSelection";
import AdditionalBenefits from "../components/AdditionalBenefits";
import PurchaseSummary from "../components/PurchaseSummary";
import PaymentForm from "../components/PaymentForm";
import { clubOptions, additionalBenefits } from "../lib/data";

export default function LATAMPassSubscription() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const handleClubSelect = (club) => {
    setSelectedClub(club);
    setCurrentStep(2);
  };

  const handleBenefitSelect = (benefit) => {
    setSelectedBenefits((prev) =>
      prev.includes(benefit)
        ? prev.filter((b) => b !== benefit)
        : [...prev, benefit]
    );
  };

  const handleContinue = () => {
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProgressBar currentStep={currentStep} />
        {currentStep === 1 && (
          <ClubSelection
            clubOptions={clubOptions}
            onSelect={handleClubSelect}
          />
        )}
        {currentStep === 2 && (
          <AdditionalBenefits
            additionalBenefits={additionalBenefits}
            selectedBenefits={selectedBenefits}
            onSelect={handleBenefitSelect}
            onContinue={handleContinue}
          />
        )}
        {currentStep === 3 && (
          <div className="flex flex-col justify-center md:flex-row md:items-start gap-2 mt-10">
            <PaymentForm
              selectedClub={selectedClub}
              selectedBenefits={selectedBenefits}
            />
            <PurchaseSummary
              selectedClub={selectedClub}
              selectedBenefits={selectedBenefits}
            />
          </div>
        )}
      </main>
    </div>
  );
}
