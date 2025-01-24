import React from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl">
        {/* Main Error Container */}
        <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
          {/* Top Decorative Bar */}
          <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse" />

          {/* Content Container */}
          <div className="p-6 md:p-8">
            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-100 rounded-full opacity-25 animate-ping" />
                <div className="relative p-4 rounded-full bg-red-50">
                  <AlertTriangle className="w-12 h-12 text-red-500 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8 text-center">
              <h1 className="mb-3 text-3xl font-bold text-gray-900 animate-fade-in">
                Oops! Something went wrong
              </h1>
              <p className="mb-4 text-gray-600 animate-fade-in-delayed">
                Don't worry! This is just a temporary hiccup. Our team has been
                notified.
              </p>

              {/* Error Details (Collapsible) */}
              <div className="p-4 mt-4 overflow-auto text-left rounded-lg bg-gray-50 max-h-32">
                <p className="font-mono text-sm text-gray-600 break-all">
                  {error?.message}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up">
              <button
                onClick={() => window?.location?.reload()}
                className="flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
              >
                <RotateCcw className="w-5 h-5" />
                Restart Application
              </button>

              <a
                href="/"
                className="flex items-center gap-2 px-6 py-3 text-gray-700 transition-all duration-300 bg-gray-100 rounded-lg hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="p-4 text-center border-t bg-gray-50">
            <p className="text-sm text-gray-600">
              If the problem persists, please contact{' '}
              <a
                href="mailto:support@example.com"
                className="text-blue-600 hover:underline"
              >
                support@example.com
              </a>
            </p>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-red-500 rounded-full opacity-20 animate-float-${i}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
