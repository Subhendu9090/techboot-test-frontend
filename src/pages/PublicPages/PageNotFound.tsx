import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute bg-blue-100 rounded-full top-1/4 left-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute bg-purple-100 rounded-full top-1/3 right-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-bounce" />
        <div className="absolute bg-pink-100 rounded-full bottom-1/4 left-1/3 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-3xl">
          <div className="absolute inset-0 bg-grid-slate-200/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] animate-pulse" />
        </div>
      </div>

      <div className="relative w-full max-w-3xl p-8 space-y-12 text-center backdrop-blur-sm rounded-2xl">
        {/* Error Code & Illustration */}
        <div className="relative py-10">
          <h1 className="text-[12rem] font-bold text-gray-200/80 leading-none animate-pulse">
            404
          </h1>
          <div className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce">
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Message */}
        <div className="max-w-xl mx-auto space-y-4 backdrop-blur-sm">
          <p className="text-xl font-medium text-gray-700 animate-fade-in">
            Oops! Looks like you've ventured into uncharted territory.
          </p>
          <p className="text-lg text-gray-500">
            The page you're looking for has either moved or doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-8 mt-12 sm:flex-row">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-3 text-gray-700 transition-all duration-300 border border-gray-100 shadow-lg group bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-xl hover:-translate-y-1 hover:bg-white"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>

          <button 
            onClick={() => window.location.href = '/overview'}
            className="flex items-center gap-2 px-8 py-3 text-white transition-all duration-300 shadow-lg group bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700"
          >
            <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
            Back to Home
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-16 space-y-2">
          <p className="text-gray-600">Need assistance? We're here to help!</p>
          <Link 
            to="*" 
            className="inline-block font-medium text-blue-600 transition-colors duration-300 hover:text-purple-600"
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;