import React, { useState, useRef } from 'react';
import { CustomButton } from '../../components';

const TwoStepVerification = () => {
  const [verificationCode, setVerificationCode] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    // setLoading(true);

    // try {
    //   // Combine verification code
    //   const code = verificationCode.join('');

    //   // Verify the password reset code
    //   await verifyPasswordResetCode(auth, code);

    //   // If code is valid, proceed to reset password
    //   await confirmPasswordReset(auth, code, newPassword);

    //   // Navigate back to login
    //   navigate(paths.login);
    // } catch (error) {
    //   console.error("Password reset verification error", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white md:flex-row">
      {/* Left Side - Verification Form */}
      <div className="flex items-center justify-center w-full px-4 py-8 md:w-2/4 md:px-2">
        <div className="w-full px-6 py-8">
          <form onSubmit={handleVerifyCode} className="p-6 bg-white rounded-xl">
            <h2 className="mb-6 text-[32px] font-[400px] text-center text-black">
              Two Step Verification
            </h2>

            <p className="mb-8 text-[20px] font-[400px] text-center text-black">
              Enter 6 digit code sent on john********@gmail.com email.
            </p>

            {/* Verification Code Input Boxes */}
            <div className="grid grid-cols-6 gap-2 mb-8">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="number"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="h-[68px] w-[68px] text-lg font-semibold text-center bg-white border-2 border-gray-200 rounded-lg shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  style={{ appearance: 'textfield' }}
                />
              ))}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center w-full">
              <CustomButton
                label="Verify"
                type="submit"
                size="medium"
              />
            </div>

            {/* Resend Code */}
            <p className="mt-6 text-[14px] font-[400px] text-center text-black">
              Didn't receive the code?{' '}
              <button
                type="button"
                className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                onClick={() => {
                  /* Add resend logic */
                }}
              >
                Resend
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative w-full h-[300px] md:h-screen md:w-2/4">
        <img
          src="LoginPage/The Road Less Travelled Motivational Instagram Post  1.png"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default TwoStepVerification;
