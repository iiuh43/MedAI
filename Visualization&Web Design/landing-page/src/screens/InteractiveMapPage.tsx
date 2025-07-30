import React, { useState } from 'react';
import Header from '../components/Header';
import USMap from '../components/USMap';
import StateInfoPanel from '../components/StateInfoPanel';
import MapLegend from '../components/MapLegend';

interface StateData {
  id: string;
  name: string;
  governanceStandards: number;
  policyDescription: string;
}

const InteractiveMapPage: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);

  const handleStateClick = (state: StateData) => {
    setSelectedState(state);
  };

  const handleClosePanel = () => {
    setSelectedState(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Interactive US Map
                </h2>
                <div className="hidden sm:block">
                  <MapLegend />
                </div>
              </div>
              <div className="h-96 lg:h-[500px]">
                <USMap 
                  onStateClick={handleStateClick}
                  selectedState={selectedState}
                />
              </div>
            </div>
            <div className="sm:hidden mt-4">
              <MapLegend />
            </div>
          </div>
          <div className="lg:col-span-1">
            {selectedState ? (
              <div className="hidden lg:block">
                <StateInfoPanel 
                  state={selectedState}
                  onClose={handleClosePanel}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Select a State
                  </h3>
                  <p className="text-sm text-gray-600">
                    Click on any state in the map to view detailed healthcare AI governance information.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile panel overlay */}
      <StateInfoPanel 
        state={selectedState}
        onClose={handleClosePanel}
      />
    </div>
  );
};

export default InteractiveMapPage;
