import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = ({ 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className={`${sizeClasses[size]} text-red-500 animate-spin mb-2`} />
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
};
