"use client";

import { useEffect, useRef, useState } from "react";

export default function PaymentForm({ selectedClub, selectedBenefits }) {
  const [sdkMounted, setSDKMounted] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Rebill && !sdkMounted) {
      const public_key = "pk_test_58d68139-c7b4-4f90-ad4b-e15eef832ce4";
      const rebill = new window.Rebill(public_key);
      setSDKMounted(rebill);
    }
    return () => {};
  }, [selectedClub, selectedBenefits]);

  useEffect(() => {
    if (sdkMounted) {
      const totalAmount =
        selectedClub.price +
        selectedBenefits.reduce((sum, benefit) => sum + benefit.price, 0);
      const checkoutForm = sdkMounted.checkout.create({
        name: `LATAM Pass - ${selectedClub.name}`,
        description: `Subscription to LATAM Pass ${selectedClub.name} with additional benefits`,
        amount: totalAmount,
        currency: "USD",
      });
      checkoutForm.display({
        userLogin: false,
      });
      checkoutForm.on("approved", (e) => {
        console.log("Payment approved:", e);
        // Handle successful payment here
      });
      checkoutForm.on("rejected", (e) => {
        console.log("Payment rejected:", e);
        // Handle rejected payment here
      });
      checkoutForm.on("error", (e) => {
        console.log("Payment error:", e);
        // Handle payment error here
      });
      checkoutForm.custom({
        css: `
          #input-label {
            display: none;
          }
        `,
      });
      checkoutForm.mount("rebill");
    }
  }, [sdkMounted]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[380px] lg:w-[500px]">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Payment Information
        </h2>
        <div id="rebill" className="w-full"></div>
      </div>
    </div>
  );
}
