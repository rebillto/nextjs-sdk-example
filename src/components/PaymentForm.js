"use client";

import { useEffect, useState } from "react";

export default function PaymentForm({ selectedClub }) {
  const [sdkMounted, setSDKMounted] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Rebill && !sdkMounted) {
      const public_key = process.env.NEXT_PUBLIC_REBILL_PUBLIC_KEY;
      const rebill = new window.Rebill(public_key);
      setSDKMounted(rebill);
    }
    return () => {};
  }, []);

  useEffect(() => {
    if (sdkMounted) {
      const checkoutForm = sdkMounted.checkout.create({
        name: `Pass - ${selectedClub.name}`,
        amount: selectedClub.price,
        currency: "USD",
      });
      checkoutForm.mount("rebill");
    }
  }, [selectedClub, sdkMounted]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[380px] lg:w-[500px]">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Payment Information
        </h2>
        <div id="rebill" className="w-full">
          {/* ------ The iframe will be inserted here ------ */}
        </div>
      </div>
    </div>
  );
}
