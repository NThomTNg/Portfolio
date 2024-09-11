import React from 'react';
import Icon from '../assets/Icon.png';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-transparent p-6">
        <img 
          src={Icon} 
          alt="Loading" 
          className="w-44 h-44 animate-spin"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;