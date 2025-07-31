import React from 'react';

const MapLegend: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Governance Standards</h3>
      <div className="space-y-2">
        <div className="flex items-center text-sm">
          <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
          <span className="text-gray-700">High (20+ standards)</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
          <span className="text-gray-700">Medium (12-19 standards)</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
          <span className="text-gray-700">Basic (&lt; 12 standards)</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Click on any state to view detailed governance information
        </p>
      </div>
    </div>
  );
};

export default MapLegend;