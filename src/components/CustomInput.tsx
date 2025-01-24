import React from 'react';
import { Mail, Lock, Search, User, AlertCircle } from 'lucide-react';

interface CustomInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  errorText?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  placeholder = ' ',
  type = 'text',
  value,
  errorText,
  helperText,
  required = false,
  disabled = false,
  icon,
  onChange,
  onBlur,
}) => {
  // const [isFocused, setIsFocused] = useState(false);

  // Determine input type for password field
  // const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  // Get default icon based on input type
  const getDefaultIcon = () => {
    if (icon) return icon;

    switch (type) {
      case 'email':
        return <Mail className="w-5 h-5 text-gray-400" />;
      case 'password':
        return <Lock className="w-5 h-5 text-gray-400" />;
      case 'search':
        return <Search className="w-5 h-5 text-gray-400" />;
      case 'text':
        if (name.toLowerCase().includes('name')) {
          return <User className="w-5 h-5 text-gray-400" />;
        }
        return null;
      default:
        return null;
    }
  };

  const defaultIcon = getDefaultIcon();

  // Container class based on states
  const containerClass = `
    relative mb-4 custom-input
    ${disabled ? 'opacity-60' : ''}
  `;

  // Input class based on states
  const inputClass = `
    w-full px-4 py-1 shadow-md border-none outline-none rounded-xl transition-all duration-200
    ${defaultIcon ? '' : ''}
    ${type === 'password' ? 'pr-11' : ''}
    ${errorText ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
    ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
    focus:outline-none
  `;

  // Label class based on states
  const labelClass = `
    block mb-2 text-sm font-medium
    ${errorText ? 'text-red-500' : 'text-gray-700'}
    ${disabled ? 'text-gray-400' : ''}
  `;

  // const handleFocus = () => setIsFocused(true);
  // const handleBlurWrapper = (e: React.FocusEvent<HTMLInputElement>) => {
  //   // setIsFocused(false);
  //   onBlur(e);
  // };

  return (
    <div className={containerClass}>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        {/* Left Icon */}
        {/* {defaultIcon && (
          <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
            {defaultIcon}
          </div>
        )} */}

        {/* Input Field */}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          className={inputClass}
          aria-invalid={!!errorText}
          aria-describedby={errorText ? `${name}-error` : undefined}
        />

        {/* Password Toggle Icon */}
        {/* {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600 focus:outline-none"
          >
            {!errorText && (showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            ))}
          </button>
        )} */}

        {/* Error Icon */}
        {errorText && (
          <div className="absolute transform -translate-y-1/2 right-3 top-1/2">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
        )}
      </div>

      {/* Error Message */}
      {errorText && (
        <p
          className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
          id={`${name}-error`}
        >
          {errorText}
        </p>
      )}

      {/* Helper Text */}
      {helperText && !errorText && (
        <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default CustomInput;
