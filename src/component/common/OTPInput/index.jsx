import React, { useRef, useState, useEffect } from "react";
import { NormalButton } from "component/common";
import "./index.scss";

export function OTPInput({ OTP, setOTP }) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(50);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, event) => {
    const value = event.target.value;

    // Check if value is a number
    if (isNaN(value)) {
      return;
    }

    // Update OTP value
    const newOtp = [...OTP];
    newOtp[index] = value;
    setOTP(newOtp.join(""));

    // Focus on next input field
    if (index < inputRefs.length - 1 && value !== "") {
      inputRefs[index + 1].current.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text/plain").slice(0, 4);

    // Check if pasted data is a number
    if (isNaN(pastedData)) {
      return;
    }

    // Update OTP value
    const newOtp = pastedData.split("");
    setOTP(newOtp.join(""));

    // Update input field values
    for (let i = 0; i < inputRefs.length; i++) {
      if (newOtp[i]) {
        inputRefs[i].current.value = newOtp[i];
      } else {
        inputRefs[i].current.value = "";
      }
    }

    // Focus on last input field
    inputRefs[inputRefs.length - 1].current.focus();
  };

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(50);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="otp-modal">
      <div className="timer">
        {seconds > 0 || minutes > 0 ? (
          <p>
            {minutes < 10 ? `${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div>
        {inputRefs.map((inputRef, index) => (
          <input
            key={index}
            className="otp-input"
            type="number"
            maxLength="1"
            ref={inputRef}
            value={OTP[index] || ""}
            onChange={(event) => handleChange(index, event)}
            onPaste={handlePaste}
          />
        ))}
      </div>
      {seconds > 0 || minutes > 0 ? (
        <></>
      ) : (
        <p className="resend-otp">
          Didn’t send the OTP? <span onClick={resendOTP}>RESEND</span>{" "}
        </p>
      )}

      <div className="mt-5">
        <NormalButton label="Verify" saveBtn={true} type="submit" />
      </div>
    </div>
  );
}
