import React, { useState } from 'react';
import { Filter, MapPin, Building2, Brain, Shield, Eye, Users } from 'lucide-react';
import StateInfoPanel from '../components/StateInfoPanel';
import MapLegend from '../components/MapLegend';
import D3USMap from '../components/D3USMap';

interface StateData {
  id: string;
  name: string;
  standards: number;
  institutions: number;
  samplePolicy: string;
  type: string[];
}

const MapPage = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [filters, setFilters] = useState({
    healthSystemType: [],
    governanceFocus: []
  });

  const healthSystemTypes = [
    { id: 'academic', label: 'Academic Medical Centers', icon: Building2 },
    { id: 'rural', label: 'Rural Hospitals', icon: MapPin },
    { id: 'urban', label: 'Urban Health Systems', icon: Building2 },
    { id: 'community', label: 'Community Hospitals', icon: Users }
  ];

  const governanceFocusAreas = [
    { id: 'bias', label: 'Bias Mitigation', icon: Shield },
    { id: 'consent', label: 'Patient Consent', icon: Users },
    { id: 'fda', label: 'FDA Engagement', icon: Building2 },
    { id: 'interpretability', label: 'AI Model Interpretability', icon: Eye },
    { id: 'incident', label: 'AI Incident Reporting', icon: Brain }
  ];

  const handleStateClick = (state: StateData) => {
    setSelectedState(state);
  };

  const handleClosePanel = () => {
    setSelectedState(null);
  };

  const toggleFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive U.S. Map
          </h1>
          <p className="text-xl text-gray-600">
            Explore AI governance standards by region with advanced filtering capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </h2>

              {/* Health System Type */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Health System Type</h3>
                <div className="space-y-3">
                  {healthSystemTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <label key={type.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.healthSystemType.includes(type.id)}
                          onChange={() => toggleFilter('healthSystemType', type.id)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <Icon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{type.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Governance Focus Areas */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Governance Focus Areas</h3>
                <div className="space-y-3">
                  {governanceFocusAreas.map((area) => {
                    const Icon = area.icon;
                    return (
                      <label key={area.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.governanceFocus.includes(area.id)}
                          onChange={() => toggleFilter('governanceFocus', area.id)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <Icon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{area.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">United States Map</h2>
                    <p className="text-gray-600">Click on states to view detailed AI governance standards</p>
                  </div>
                  <div className="hidden lg:block">
                    <MapLegend />
                  </div>
                </div>
              </div>

              {/* Map Placeholder - Add your map component here */}
              <div className="h-96 lg:h-[500px]">
                <D3USMap 
                  onStateClick={handleStateClick}
                  selectedState={selectedState}
                />
              </div>
              
              {/* Mobile Legend */}
              <div className="lg:hidden mt-4">
                <MapLegend />
              </div>
            </div>

            {/* Desktop State Info Panel */}
            <div className="hidden lg:block">
              {selectedState ? (
                <StateInfoPanel 
                  state={selectedState}
                  onClose={handleClosePanel}
                />
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Select a State
                  </h3>
                  <p className="text-sm text-gray-600">
                    Click on any state in the map to view detailed healthcare AI governance information.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile State Info Panel */}
        <StateInfoPanel 
          state={selectedState}
          onClose={handleClosePanel}
        />
      </div>
    </div>
  );
};

export default MapPage;