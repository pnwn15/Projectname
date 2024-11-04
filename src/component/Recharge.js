// Recharge.js
import React, { useState } from 'react';

function Recharge() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleRecharge = () => {
    if (amount && paymentMethod) {
      // ทำการเรียก API หรือดำเนินการอื่นๆ
      alert(`คุณเติมเงิน ${amount} บาท ด้วยวิธีการชำระเงิน ${paymentMethod}`);
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-roboto-mono p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-8">เติมเงิน</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block text-lg mb-2">จำนวนเงิน</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 border-2 border-yellow-400 rounded-lg focus:outline-none focus:border-yellow-500 text-center"
          placeholder="กรอกจำนวนเงิน"
        />

        <label className="block text-lg mb-2">วิธีการชำระเงิน</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-2 mb-6 bg-gray-700 border-2 border-yellow-400 rounded-lg focus:outline-none focus:border-yellow-500 text-center"
        >
          <option value="">เลือกวิธีการชำระเงิน</option>
          <option value="Bank Transfer">โอนผ่านธนาคาร</option>
          <option value="Credit Card">บัตรเครดิต</option>
          <option value="PromptPay">PromptPay</option>
          <option value="TrueMoney Wallet">TrueMoney Wallet</option>
        </select>

        <button
          onClick={handleRecharge}
          className="w-full bg-yellow-400 text-gray-900 p-2 rounded-lg hover:bg-yellow-500 transition duration-300 font-semibold"
        >
          ยืนยันการเติมเงิน
        </button>
      </div>
    </div>
  );
}

export default Recharge;
