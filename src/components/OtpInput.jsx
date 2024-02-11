import React, { useEffect, useRef } from "react";
import { useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const refs = useRef([]);

  useEffect(() => {
    if (refs.current[0]) {
      refs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value.length > 1 ? value.slice(-1) : value;

    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }

    if (value && index < length - 1) {
      refs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    refs.current[index].setSelectionRange(1, 1); // set cursor at the end of input();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index].length) {
      refs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            ref={(input) => (refs.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-10 h-10 m-2 text-center border-[2px] border-black/70 rounded-lg outline-blue-700"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
