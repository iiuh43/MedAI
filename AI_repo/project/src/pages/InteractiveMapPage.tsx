import React, { useState } from 'react';
import Header from '../src/components/Header';
import USMap from '../src/components/USMap';
import StateInfoPanel from '../src/components/StateInfoPanel';
import MapLegend from './MapLegend';

interface StateData {
  id: string;
  name: string;
  governanceStandards: number;
  policyDescription: string;
  categories?: string[];
  lastUpdated?: string;
  slug?: string;
}

const InteractiveMapPage: React.FC = () => {
  const [selectedState1, setSelectedState1] = useState<StateData | null>(null);
  const [selectedState2, setSelectedState2] = useState<StateData | null>(null);
  
  // Store the active map (left or right) for highlighting the correct selection UI
  const [activeMap, setActiveMap] = useState<'left' | 'right'>('left');

  // Placeholder stateData source - if a global / context version exists replace this or pass as prop
  // Keyed by state id/abbreviation. Extend as needed.
  const stateData: Record<string, StateData> = {
    CA: { id: 'CA', name: 'California', governanceStandards: 25, policyDescription: 'Comprehensive framework', categories: ['Bias Audits','Transparency','Privacy'], lastUpdated: '2025-08-10', slug: 'california' },
    GA: { id: 'GA', name: 'Georgia', governanceStandards: 15, policyDescription: 'Oversight focused', categories: ['Oversight','Risk Mgmt'], lastUpdated: '2025-07-22', slug: 'georgia' },
    NY: { id: 'NY', name: 'New York', governanceStandards: 21, policyDescription: 'Broad governance measures', categories: ['Ethics','Privacy','Validation'], lastUpdated: '2025-08-01', slug: 'new-york' },
    TX: { id: 'TX', name: 'Texas', governanceStandards: 13, policyDescription: 'Developing standards', categories: ['Transparency','Training'], lastUpdated: '2025-07-15', slug: 'texas' }
  };

  // Build comparison card
  const buildCard = (abbr: string) => {
    const data = stateData[abbr];
    if (!data) return null;
    const lastUpdated = data.lastUpdated ? new Date(data.lastUpdated).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A';
    return (
      <article key={abbr} className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm p-5 focus-within:ring-2 focus-within:ring-blue-500" aria-labelledby={`state-${abbr}-title`}>
        <header className="mb-4">
          <h3 id={`state-${abbr}-title`} className="text-lg font-semibold text-gray-900">{data.name}</h3>
          <p className="text-xs text-gray-500">Standards Count: <span className="font-medium text-gray-700">{data.governanceStandards}</span></p>
          <p className="text-xs text-gray-500">Last Updated: <span className="font-medium text-gray-700">{lastUpdated}</span></p>
        </header>
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Key Categories</h4>
          <div className="flex flex-wrap gap-1">
            {(data.categories || []).length > 0 ? data.categories!.map(c => <span key={c} className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">{c}</span>) : <span className="text-gray-400 text-xs">None listed</span>}
          </div>
        </div>
        <div className="mt-auto pt-4">
          <a href={`/states/${data.slug || data.id.toLowerCase()}`} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors" aria-label={`View more governance details for ${data.name}`}>View More</a>
        </div>
      </article>
    );
  };



  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">Compare State Governance Standards</h1>
          <p className="text-lg text-gray-600 text-center">Select states on either map to compare their AI governance standards side by side</p>
        </div>

        {/* Split Screen Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Map */}
          <div className={`relative ${activeMap === 'left' ? 'ring-2 ring-blue-500' : ''}`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">First State</h2>
                <div className="hidden sm:block"><MapLegend /></div>
              </div>
              <div className="h-[600px]">
                <USMap 
                  onStateClick={(state: StateData) => {
                    setSelectedState1(state);
                    setActiveMap('left');
                  }} 
                  selectedState={selectedState1}
                />
              </div>
              {selectedState1 && (
                <div className="mt-6">
                  <StateInfoPanel state={selectedState1} onClose={() => setSelectedState1(null)} />
                </div>
              )}
            </div>
            {!selectedState1 && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-semibold mb-2">Select First State</h3>
                  <p>Click on a state to begin comparison</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Map */}
          <div className={`relative ${activeMap === 'right' ? 'ring-2 ring-blue-500' : ''}`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Second State</h2>
                <div className="hidden sm:block"><MapLegend /></div>
              </div>
              <div className="h-[600px]">
                <USMap 
                  onStateClick={(state: StateData) => {
                    setSelectedState2(state);
                    setActiveMap('right');
                  }} 
                  selectedState={selectedState2}
                />
              </div>
              {selectedState2 && (
                <div className="mt-6">
                  <StateInfoPanel state={selectedState2} onClose={() => setSelectedState2(null)} />
                </div>
              )}
            </div>
            {!selectedState2 && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-semibold mb-2">Select Second State</h3>
                  <p>Click on a state to compare</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Panel - Direct Comparison */}
        {selectedState1 && selectedState2 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Governance Standards Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {buildCard(selectedState1.id)}
              {buildCard(selectedState2.id)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMapPage;
