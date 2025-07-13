import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'orange', 
  variant = 'spinner',
  className = '',
  text = ''
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'lg':
        return 'w-12 h-12';
      case 'xl':
        return 'w-16 h-16';
      default:
        return 'w-8 h-8';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'text-blue-600';
      case 'green':
        return 'text-green-600';
      case 'red':
        return 'text-red-600';
      case 'purple':
        return 'text-purple-600';
      case 'white':
        return 'text-white';
      default:
        return 'text-orange-600';
    }
  };

  const SpinnerVariant = () => (
    <div className={`${getSizeClasses()} ${getColorClasses()} ${className}`}>
      <svg className="animate-spin" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );

  const DotsVariant = () => (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${getSizeClasses()} ${getColorClasses()} rounded-full animate-pulse`}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );

  const PulseVariant = () => (
    <div className={`${getSizeClasses()} ${getColorClasses()} ${className}`}>
      <div className="w-full h-full bg-current rounded-full animate-ping" />
    </div>
  );

  const BarsVariant = () => (
    <div className={`flex space-x-1 items-end ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-1 ${getColorClasses()} bg-current animate-pulse`}
          style={{ 
            height: size === 'sm' ? '12px' : size === 'lg' ? '32px' : size === 'xl' ? '48px' : '24px',
            animationDelay: `${i * 0.15}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );

  const RippleVariant = () => (
    <div className={`${getSizeClasses()} ${className} relative`}>
      <div className={`absolute inset-0 ${getColorClasses()} border-2 border-current rounded-full animate-ping`} />
      <div 
        className={`absolute inset-0 ${getColorClasses()} border-2 border-current rounded-full animate-ping`}
        style={{ animationDelay: '0.5s' }}
      />
    </div>
  );

  const GradientSpinnerVariant = () => (
    <div className={`${getSizeClasses()} ${className}`}>
      <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 animate-spin relative">
        <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full" />
      </div>
    </div>
  );

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return <DotsVariant />;
      case 'pulse':
        return <PulseVariant />;
      case 'bars':
        return <BarsVariant />;
      case 'ripple':
        return <RippleVariant />;
      case 'gradient':
        return <GradientSpinnerVariant />;
      default:
        return <SpinnerVariant />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {renderSpinner()}
      {text && (
        <p className={`text-sm font-medium ${getColorClasses()}`}>
          {text}
        </p>
      )}
    </div>
  );
};

// Full page loading overlay
export const LoadingOverlay = ({ 
  isLoading, 
  text = 'Loading...', 
  variant = 'spinner',
  className = '' 
}) => {
  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm ${className}`}>
      <div className="text-center">
        <LoadingSpinner size="xl" variant={variant} text={text} />
      </div>
    </div>
  );
};

// Inline loading state
export const InlineLoader = ({ 
  isLoading, 
  children, 
  fallback,
  size = 'md',
  variant = 'spinner'
}) => {
  if (isLoading) {
    return fallback || <LoadingSpinner size={size} variant={variant} />;
  }

  return children;
};

export default LoadingSpinner;
