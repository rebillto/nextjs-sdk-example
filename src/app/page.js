"use client";

import { useState } from "react";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import ClubSelection from "../components/ClubSelection";
import PurchaseSummary from "../components/PurchaseSummary";
import PaymentForm from "../components/PaymentForm";
import { clubOptions, additionalBenefits } from "../lib/data";

export default function REBILLPassSubscription() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClub, setSelectedClub] = useState(null);

  const handleClubSelect = (club) => {
    setSelectedClub(club);
    setCurrentStep(2);
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
          <div className="flex flex-col justify-center md:flex-row md:items-start gap-2 mt-10">
            <PaymentForm selectedClub={selectedClub} />
            <PurchaseSummary selectedClub={selectedClub} />
          </div>
        )}
      </main>
    </div>
  );
}
