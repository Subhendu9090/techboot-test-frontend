import React, { useState } from 'react';
import { CustomButton, CustomInput } from '../../components';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { paths } from '../../routes/Path';
import { useAuth } from '../../contexts/Store';

const ForgotPassword: React.FC = () => {
   const {userEmail,token,isAuthenticated} = useAuth()
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
console.log("Data from forgot password",userEmail,token,isAuthenticated);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmitted(true)
    
  };

  return (
    <div className="flex flex-col-reverse min-h-screen bg-white md:flex-row">
      {/* Right Side - Form */}
      <div className="flex items-center justify-center w-full px-4 py-8 md:w-2/4 md:px-8">
        <div className="w-full max-w-md transition-all duration-300 hover:scale-[1.02]">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="p-6 transition-all duration-300 bg-white lg:shadow-xl rounded-xl "
            >
              <Link
                to={paths.login}
                className="flex items-center mb-6 text-sm text-gray-600 transition-all duration-300 hover:text-blue-600 hover:-translate-x-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Link>

              <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 transition-colors duration-300 hover:text-blue-600">
                Forgot Password?
              </h2>

              <p className="mb-6 text-sm text-center text-gray-600">
                Enter your email address and we'll send you instructions to
                reset your password.
              </p>

              <div className="mb-6">
                <CustomInput
                  name="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  errorText={touched && !email ? 'Email is required' : ''}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  icon={<Mail className="w-5 h-5 text-gray-400" />}
                />
              </div>

              <CustomButton
                loading={loading}
                type="submit"
                fullWidth={true}
                label="Send Reset Instructions"
                className="py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              />
            </form>
          ) : (
            <div className="p-6 text-center transition-all duration-300 bg-white shadow-xl rounded-xl hover:shadow-2xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full animate-pulse">
                <Mail className="w-8 h-8 text-green-500 animate-bounce" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">
                Check Your Email
              </h2>
              <p className="mb-6 text-gray-600">
                We've sent password reset instructions to your email address.
              </p>
              <Link
                to={paths.login}
                className="text-sm font-semibold text-blue-600 transition-all duration-300 hover:text-blue-700 hover:underline hover:-translate-y-1"
              >
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Animated Background */}
      <div className="relative w-full min-h-[300px] md:h-screen md:w-2/4 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
            {/* Large Blurred Circles */}
            <div className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-pink-100/40 to-purple-200/40 -top-20 -right-20 blur-3xl animate-pulse" />
            <div className="absolute w-[30rem] h-[30rem] rounded-full bg-gradient-to-l from-rose-100/40 to-yellow-100/40 -bottom-20 -left-20 blur-3xl animate-pulse" />

            {/* Center Piece */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <div className="absolute rounded-full w-80 h-80 bg-gradient-to-br from-rose-100/30 to-yellow-200/30 blur-2xl animate-pulse" />
            </div>

            {/* Floating Elements */}
            <div className="absolute w-20 h-20 top-1/4 left-1/4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 backdrop-blur-sm rounded-xl animate-bounce" />
            <div className="absolute w-16 h-16 delay-1000 rounded-full bottom-1/4 right-1/4 bg-rose-100/20 backdrop-blur-sm animate-bounce" />
            <div className="absolute w-24 h-24 delay-700 rounded-lg top-3/4 left-1/3 bg-purple-100/20 backdrop-blur-sm animate-bounce" />

            {/* Small dots with ping animation */}
            <div className="absolute top-1/3 right-1/3">
              <div className="w-3 h-3 rounded-full bg-rose-200/50 animate-ping" />
            </div>
            <div className="absolute bottom-1/3 left-1/4">
              <div className="w-2 h-2 delay-1000 rounded-full bg-yellow-200/50 animate-ping" />
            </div>
            <div className="absolute top-2/3 right-1/4">
              <div className="w-4 h-4 delay-700 rounded-full bg-purple-200/50 animate-ping" />
            </div>

            {/* Additional pulsing elements */}
            <div className="absolute w-32 h-32 delay-1000 rounded-full top-1/4 right-1/3 bg-gradient-to-r from-rose-100/30 to-yellow-200/30 blur-xl animate-pulse" />
            <div className="absolute w-40 h-40 delay-700 rounded-full bottom-1/3 left-1/3 bg-gradient-to-r from-pink-100/30 to-purple-100/30 blur-xl animate-pulse" />
          </div>
        </div>
    </div>
  );
};

export default ForgotPassword;
