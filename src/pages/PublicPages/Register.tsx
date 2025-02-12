import React, { useState } from 'react';
import { CustomButton, CustomInput } from '../../components';
import { Link } from 'react-router-dom';
import { paths } from '../../routes/Path';
import { Alert } from '../../utils/Alert';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    mobile: false,
    password: false,
    confirmPassword: false,
  });
  
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const inputFields = [
    {
      name: 'name',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      type: 'text',
      errorText: touched.name && formData.name === '' ? 'Name is required' : '',
    },
    {
      name: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
      type: 'email',
      errorText: touched.email && formData.email === '' ? 'Email is required' : '',
    },
    {
      name: 'mobile',
      label: 'Mobile Number',
      placeholder: 'Enter your mobile number',
      type: 'tel',
      errorText: touched.mobile && formData.mobile === '' ? 'Mobile number is required' : '',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Create a password',
      type: 'password',
      errorText: touched.password && formData.password === '' ? 'Password is required' : '',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: 'Confirm your password',
      type: 'password',
      errorText: touched.confirmPassword && formData.confirmPassword === '' ? 'Please confirm password' : '',
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
    // Add your registration logic here
    if (formData.password !== formData.confirmPassword) {
      setAlertMessage("Passwords don't match");
      setShowAlert(true);
      setLoading(false);
      return;
    }
    // Handle registration...
  };

  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center min-h-screen bg-white md:flex-row">
        {/* Left Side - Registration Form */}
        <div className="relative w-full md:w-2/4">
          <div className="w-full px-4 py-8 md:px-8">
            <form onSubmit={handleSubmit} className="max-w-md p-6 mx-auto bg-[#F1F1F1] md:py-16 rounded-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Create Account</h2>

              {inputFields.map((field) => (
                <div key={field.name} className="mb-6">
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

              <CustomButton
                fullWidth={true}
                loading={loading}
                label="Register"
                type="submit"
                size="medium"
              />

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">Already have an account? </span>
                <Link to={paths.login} className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Animated Background (same as login page) */}
        <div className="relative w-full min-h-[300px] md:h-screen md:w-2/4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600">
            {/* Animated circles */}
            <div className="absolute rounded-full w-72 h-72 bg-white/10 -top-10 -right-10 blur-2xl animate-pulse" />
            <div className="absolute delay-700 rounded-full w-96 h-96 bg-white/10 -bottom-10 -left-10 blur-3xl animate-pulse" />
            <div className="absolute w-64 h-64 delay-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 top-1/2 left-1/2 blur-2xl animate-pulse" />
            
            {/* Floating shapes */}
            <div className="absolute w-20 h-20 transform rotate-45 rounded-lg top-1/4 left-1/4 bg-white/20 animate-float" />
            <div className="absolute w-16 h-16 delay-300 rounded-full bottom-1/4 right-1/4 bg-white/20 animate-float" />
            <div className="absolute w-24 h-24 delay-700 transform rounded-lg top-3/4 left-1/3 bg-white/20 -rotate-12 animate-float" />
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

export default Register;