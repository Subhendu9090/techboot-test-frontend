import React, { useState } from 'react';
import { CustomButton, CustomInput } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { paths } from '../../routes/Path';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { firebaseConfig } from '../../utils/FireBaseConfig';
import { initializeApp } from 'firebase/app';
import { useAuth } from '../../contexts/Store';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
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

    if (email) {
      try {
        const res = await sendPasswordResetEmail(auth, email);
        console.log(res);
        setIsSubmitted(true);
        setTimeout(() => navigate(paths.login), 5000);
      } catch (error) {
        console.error('Password reset error', error);
      } finally {
        setLoading(false);
      }
    }
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

export default ForgotPassword;
