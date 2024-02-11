import React, { useState } from "react";
import OtpInput from "./OtpInput";

const OtpLoginForm = () => {
  const [phone, setPhone] = useState("");
  const [otpInput, setOtpInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (phone.length < 10 || regex.test(phone)) {
      alert("Invalid Phone Number");
      return;
    }

    setOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log(otp);
  };

  return (
    <>
      {!otpInput ? (
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone Number"
            className="p-2 border border-gray-300 rounded-md outline-none"
          />
          <button
            type="submit"
            className="p-2 px-4 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p className="mb-3 font-medium text-black/60">
            Enter OTP sent to {phone}
          </p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </>
  );
};

export default OtpLoginForm;
