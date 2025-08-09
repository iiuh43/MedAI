import React from 'react';

const MapLegend = () => {
  const legendItems = [
    { color: '#059669', label: '40+ Standards', range: 'High Activity' },
    { color: '#0891b2', label: '30-39 Standards', range: 'Moderate-High' },
    { color: '#2563eb', label: '20-29 Standards', range: 'Moderate' },
    { color: '#6366f1', label: '10-19 Standards', range: 'Emerging' },
    { color: '#e5e7eb', label: 'No Data', range: 'Not Available' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Standards Activity Level</h3>
      <div className="space-y-2">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-900">{item.label}</div>
              <div className="text-xs text-gray-500">{item.range}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-600">
          Click on any state to view detailed information
        </p>
      </div>
    </div>
  );
};

export default MapLegend;