import React, { useState } from 'react';
import { CustomButton, CustomInput } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../routes/Path';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '../../utils/FireBaseConfig';
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential: any = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

     navigate(`${paths.twoStepVerification}?email=${encodeURIComponent(userCredential.user.email)}&token=${encodeURIComponent(userCredential.user.accessToken)}`);

      console.log('Logged in user:', userCredential?.user);
      // navigate(paths.twoStepVerification);
    } catch (error: any) {
      console.log('Login Error', error);
      setAlertMessage(error.code || ' Something went Wrong ');
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
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

              <div className='flex justify-between w-full p-1 '>
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
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full min-h-[300px] md:h-screen md:w-2/4">
          <img
            src="LoginPage/Bike.svg"
            alt="Background"
            className="object-cover w-full h-full"
          />
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
