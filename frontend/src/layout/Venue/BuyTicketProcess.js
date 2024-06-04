import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Step1 from '../../components/Step1';
import Step2 from '../../components/Step2';
import Step3 from '../../components/Step4';
import Step4 from '../../components/Step3';
import Step5 from '../../components/Step5';

export default function BuyTicketProcess() {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setPaymentStatus(true);
    }, 1000);
  };

  return (
    <div className="relative">
      <div className="columns items-center bg-opacity-70 justify-center w-full h-screen">
        <Routes> {/* Change Switch to Routes */}
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 handlePayment={handlePayment} />} />
          <Route path="/step5" element={<Step5 paymentStatus={paymentStatus} />} />
          <Route path="/" element={<Step1 />} />
        </Routes>
      </div>
    </div>
  );
}
