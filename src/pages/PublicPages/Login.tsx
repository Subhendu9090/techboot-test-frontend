import React, { useState } from 'react';
import { CustomButton, CustomInput } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../routes/Path';
import { Alert } from '../../utils/Alert';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: 'subhendu.jena@qwegle.com',
    password: '123456789',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const inputFields = [
    {
      name: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
      type: 'email',
      errorText:
        touched.email && formData.email === '' ? 'Email is required' : '',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      type: 'password',
      errorText:
        touched.password && formData.password === ''
          ? 'Password is required'
          : '',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (formData) {
      navigate(paths.overview);
    }
    setAlertMessage('Enter the required Field');
  };

  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center min-h-screen bg-white md:flex-row ">
        {/* Left Side - Login Form */}
        <div className="relative w-full md:w-2/4">
          <div className="w-full px-4 py-8 md:px-8">
            <form
              onSubmit={handleSubmit}
              className="max-w-md  p-6 mx-auto bg-[#F1F1F1] md:py-16 rounded-xl"
            >
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Get Started
              </h2>

              {/* Input fields */}
              {inputFields.map((field) => (
                <div key={field.name} className="mb-8">
                  <CustomInput
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    value={formData[field.name as keyof typeof formData]}
                    errorText={field.errorText}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </div>
              ))}

              {/* Submit Button */}
              <CustomButton
                fullWidth={true}
                loading={loading}
                label="Login"
                type="submit"
                size="medium"
              />

              <div className="flex justify-between w-full p-1 ">
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-blue-700 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-[#0E1E2B] cursor-pointer font-normal"
                  >
                    Remember Me
                  </label>
                </div>

                {/* Forgot Password Link */}
                <div className="mb-6 text-right">
                  <Link
                    to={paths.forgotPassword}
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">
                  Don't have an account?{' '}
                </span>
                <Link
                  to={paths.register}
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Register here
                </Link>
              </div>
            </form>
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
      {showAlert && (
        <Alert
          message={alertMessage}
          type="error"
          duration={5000}
          onClose={() => setShowAlert(false)}
        />
      )}
    </>
  );
};

export default Login;
