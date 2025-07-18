import React from 'react';
import { Activity, Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Activity className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">
                US Healthcare AI Governance Dashboard
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="h-4 w-4 mr-1" />
              <span>50 States Monitored</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;