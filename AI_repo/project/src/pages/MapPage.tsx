import React, { useState } from 'react';
import { Filter, MapPin, Building2, Brain, Shield, Eye, Users, BarChart3, Calendar, Tag, ExternalLink } from 'lucide-react';
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
  const [compareState1, setCompareState1] = useState<StateData | null>(null);
  const [compareState2, setCompareState2] = useState<StateData | null>(null);
  const [selectedStateForDetails, setSelectedStateForDetails] = useState<StateData | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

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

  // Complete state data for comparison
  const allStateData: Record<string, StateData> = {
    'Alabama': { id: 'AL', name: 'Alabama', standards: 15, institutions: 4, type: ['community', 'rural'], samplePolicy: 'AI bias mitigation protocols for rural healthcare systems with emphasis on equitable care delivery.' },
    'Alaska': { id: 'AK', name: 'Alaska', standards: 8, institutions: 2, type: ['rural'], samplePolicy: 'Telemedicine AI governance framework addressing unique challenges of remote healthcare delivery.' },
    'Arizona': { id: 'AZ', name: 'Arizona', standards: 22, institutions: 6, type: ['community', 'urban'], samplePolicy: 'Comprehensive AI model validation standards for desert climate health considerations.' },
    'Arkansas': { id: 'AR', name: 'Arkansas', standards: 12, institutions: 3, type: ['rural', 'community'], samplePolicy: 'Patient consent protocols for AI-driven diagnostic tools in community hospital settings.' },
    'California': { id: 'CA', name: 'California', standards: 45, institutions: 12, type: ['academic', 'urban'], samplePolicy: 'Advanced AI interpretability requirements for clinical decision support systems in academic medical centers.' },
    'Colorado': { id: 'CO', name: 'Colorado', standards: 18, institutions: 5, type: ['academic', 'community'], samplePolicy: 'High-altitude health AI algorithms with specialized governance for mountain region healthcare.' },
    'Connecticut': { id: 'CT', name: 'Connecticut', standards: 25, institutions: 4, type: ['academic', 'urban'], samplePolicy: 'AI incident reporting framework for integrated health systems with real-time monitoring capabilities.' },
    'Delaware': { id: 'DE', name: 'Delaware', standards: 10, institutions: 2, type: ['community'], samplePolicy: 'Small state AI governance model focusing on inter-institutional collaboration and resource sharing.' },
    'Florida': { id: 'FL', name: 'Florida', standards: 28, institutions: 10, type: ['community', 'urban'], samplePolicy: 'Geriatric-focused AI governance standards addressing the unique needs of elderly patient populations.' },
    'Georgia': { id: 'GA', name: 'Georgia', standards: 22, institutions: 9, type: ['academic', 'community'], samplePolicy: 'AI ethics framework for diverse patient populations with cultural competency requirements.' },
    'Hawaii': { id: 'HI', name: 'Hawaii', standards: 14, institutions: 3, type: ['community'], samplePolicy: 'Island healthcare AI governance addressing geographic isolation and resource constraints.' },
    'Idaho': { id: 'ID', name: 'Idaho', standards: 9, institutions: 2, type: ['rural'], samplePolicy: 'Rural AI implementation guidelines with emphasis on provider training and support systems.' },
    'Illinois': { id: 'IL', name: 'Illinois', standards: 25, institutions: 7, type: ['academic', 'urban'], samplePolicy: 'Urban healthcare AI governance with focus on health equity and bias prevention in diverse communities.' },
    'Indiana': { id: 'IN', name: 'Indiana', standards: 16, institutions: 5, type: ['community', 'urban'], samplePolicy: 'Manufacturing-region health AI standards addressing occupational health and industrial medicine applications.' },
    'Iowa': { id: 'IA', name: 'Iowa', standards: 13, institutions: 4, type: ['rural', 'community'], samplePolicy: 'Agricultural community AI health governance focusing on rural population health management.' },
    'Kansas': { id: 'KS', name: 'Kansas', standards: 11, institutions: 3, type: ['rural', 'community'], samplePolicy: 'Plains region AI governance model emphasizing telemedicine and remote patient monitoring.' },
    'Kentucky': { id: 'KY', name: 'Kentucky', standards: 14, institutions: 4, type: ['community', 'rural'], samplePolicy: 'Appalachian healthcare AI framework addressing geographic and socioeconomic health disparities.' },
    'Louisiana': { id: 'LA', name: 'Louisiana', standards: 17, institutions: 5, type: ['community', 'urban'], samplePolicy: 'Disaster-resilient AI governance protocols for hurricane-prone regions with emergency preparedness focus.' },
    'Maine': { id: 'ME', name: 'Maine', standards: 12, institutions: 3, type: ['rural', 'community'], samplePolicy: 'Coastal healthcare AI governance addressing seasonal population changes and rural access challenges.' },
    'Maryland': { id: 'MD', name: 'Maryland', standards: 32, institutions: 6, type: ['academic', 'urban'], samplePolicy: 'Federal healthcare AI compliance framework aligning with NIH and FDA regulatory requirements.' },
    'Massachusetts': { id: 'MA', name: 'Massachusetts', standards: 35, institutions: 6, type: ['academic'], samplePolicy: 'Leading-edge AI research governance with emphasis on clinical trial integration and innovation ethics.' },
    'Michigan': { id: 'MI', name: 'Michigan', standards: 24, institutions: 8, type: ['academic', 'urban'], samplePolicy: 'Great Lakes region AI governance focusing on industrial health applications and automotive safety.' },
    'Minnesota': { id: 'MN', name: 'Minnesota', standards: 21, institutions: 6, type: ['academic', 'community'], samplePolicy: 'Cold-climate healthcare AI standards with specialized protocols for seasonal affective health conditions.' },
    'Mississippi': { id: 'MS', name: 'Mississippi', standards: 10, institutions: 3, type: ['rural', 'community'], samplePolicy: 'Delta region AI governance addressing health disparities and rural healthcare access challenges.' },
    'Missouri': { id: 'MO', name: 'Missouri', standards: 19, institutions: 6, type: ['academic', 'community'], samplePolicy: 'Midwest AI healthcare governance balancing urban academic centers with rural community hospital needs.' },
    'Montana': { id: 'MT', name: 'Montana', standards: 7, institutions: 2, type: ['rural'], samplePolicy: 'Big Sky healthcare AI framework for vast geographic coverage and frontier medicine applications.' },
    'Nebraska': { id: 'NE', name: 'Nebraska', standards: 11, institutions: 3, type: ['rural', 'community'], samplePolicy: 'Agricultural state AI governance emphasizing farm safety and rural occupational health monitoring.' },
    'Nevada': { id: 'NV', name: 'Nevada', standards: 15, institutions: 3, type: ['urban', 'community'], samplePolicy: 'Desert healthcare AI governance addressing extreme climate health impacts and tourism-related medical needs.' },
    'New Hampshire': { id: 'NH', name: 'New Hampshire', standards: 13, institutions: 2, type: ['community'], samplePolicy: 'Live Free or Die state AI governance emphasizing patient autonomy and minimal regulatory burden.' },
    'New Jersey': { id: 'NJ', name: 'New Jersey', standards: 27, institutions: 7, type: ['academic', 'urban'], samplePolicy: 'Garden State AI governance for high-density population health management and pharmaceutical industry collaboration.' },
    'New Mexico': { id: 'NM', name: 'New Mexico', standards: 12, institutions: 3, type: ['rural', 'community'], samplePolicy: 'Land of Enchantment AI governance addressing Native American health sovereignty and cultural considerations.' },
    'New York': { id: 'NY', name: 'New York', standards: 38, institutions: 8, type: ['academic', 'urban'], samplePolicy: 'Empire State AI governance for complex urban health systems with emphasis on financial district occupational health.' },
    'North Carolina': { id: 'NC', name: 'North Carolina', standards: 18, institutions: 6, type: ['academic', 'community'], samplePolicy: 'Tar Heel State AI governance balancing Research Triangle innovation with rural Appalachian healthcare needs.' },
    'North Dakota': { id: 'ND', name: 'North Dakota', standards: 8, institutions: 2, type: ['rural'], samplePolicy: 'Peace Garden State AI governance for oil boom healthcare challenges and agricultural community health.' },
    'Ohio': { id: 'OH', name: 'Ohio', standards: 20, institutions: 8, type: ['community', 'urban'], samplePolicy: 'Buckeye State AI governance addressing Rust Belt health challenges and manufacturing-related occupational medicine.' },
    'Oklahoma': { id: 'OK', name: 'Oklahoma', standards: 13, institutions: 4, type: ['community', 'rural'], samplePolicy: 'Sooner State AI governance for oil and gas industry health monitoring with Native American health considerations.' },
    'Oregon': { id: 'OR', name: 'Oregon', standards: 19, institutions: 4, type: ['academic', 'community'], samplePolicy: 'Pacific Northwest AI governance emphasizing environmental health factors and sustainable healthcare practices.' },
    'Pennsylvania': { id: 'PA', name: 'Pennsylvania', standards: 30, institutions: 11, type: ['academic', 'urban'], samplePolicy: 'Keystone State AI governance for industrial health applications and historical urban health system modernization.' },
    'Rhode Island': { id: 'RI', name: 'Rhode Island', standards: 11, institutions: 2, type: ['community'], samplePolicy: 'Ocean State AI governance for small-scale integrated health systems with coastal health considerations.' },
    'South Carolina': { id: 'SC', name: 'South Carolina', standards: 14, institutions: 4, type: ['community', 'rural'], samplePolicy: 'Palmetto State AI governance addressing hurricane preparedness and coastal vs. inland health disparities.' },
    'South Dakota': { id: 'SD', name: 'South Dakota', standards: 9, institutions: 2, type: ['rural'], samplePolicy: 'Mount Rushmore State AI governance for frontier medicine and Native American tribal health sovereignty.' },
    'Tennessee': { id: 'TN', name: 'Tennessee', standards: 16, institutions: 5, type: ['community', 'urban'], samplePolicy: 'Volunteer State AI governance balancing Nashville urban health with rural Appalachian healthcare access.' },
    'Texas': { id: 'TX', name: 'Texas', standards: 32, institutions: 15, type: ['community', 'rural', 'urban'], samplePolicy: 'Lone Star State AI governance for diverse geographic and demographic health needs across vast territory.' },
    'Utah': { id: 'UT', name: 'Utah', standards: 17, institutions: 4, type: ['academic', 'community'], samplePolicy: 'Beehive State AI governance emphasizing family-centered care and high-altitude health considerations.' },
    'Vermont': { id: 'VT', name: 'Vermont', standards: 10, institutions: 2, type: ['rural', 'community'], samplePolicy: 'Green Mountain State AI governance for small-scale rural healthcare with emphasis on environmental health.' },
    'Virginia': { id: 'VA', name: 'Virginia', standards: 23, institutions: 7, type: ['academic', 'community'], samplePolicy: 'Old Dominion AI governance balancing federal healthcare requirements with state-level innovation initiatives.' },
    'Washington': { id: 'WA', name: 'Washington', standards: 26, institutions: 6, type: ['academic', 'urban'], samplePolicy: 'Evergreen State AI governance for tech industry health applications and Pacific Northwest environmental factors.' },
    'West Virginia': { id: 'WV', name: 'West Virginia', standards: 9, institutions: 2, type: ['rural'], samplePolicy: 'Mountain State AI governance addressing coal industry health legacy and rural healthcare infrastructure challenges.' },
    'Wisconsin': { id: 'WI', name: 'Wisconsin', standards: 18, institutions: 5, type: ['academic', 'community'], samplePolicy: 'Badger State AI governance for dairy industry health monitoring and Great Lakes environmental health factors.' },
    'Wyoming': { id: 'WY', name: 'Wyoming', standards: 6, institutions: 1, type: ['rural'], samplePolicy: 'Equality State AI governance for the least populous state focusing on frontier medicine and energy industry health.' }
  };

  const getHealthSystemTypeLabel = (type: string) => {
    const typeMap: Record<string, string> = {
      'academic': 'Academic Medical Centers',
      'rural': 'Rural Hospitals',
      'urban': 'Urban Health Systems',
      'community': 'Community Hospitals'
    };
    return typeMap[type] || type;
  };

  const handleViewMoreDetails = (stateInfo: StateData) => {
    setSelectedStateForDetails(stateInfo);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedStateForDetails(null);
  };

  const StateComparisonCard: React.FC<{ stateInfo: StateData; cardId: string }> = ({ stateInfo, cardId }) => {
    return (
      <article 
        className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-200"
        id={cardId}
        aria-label={`${stateInfo.name} governance standards`}
      >
        <header className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{stateInfo.name}</h3>
          <p className="text-base text-gray-600 mt-2">Healthcare AI Governance Profile</p>
        </header>
        
        <div className="space-y-6">
          {/* Health System Types */}
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-3 flex items-center">
              <Tag className="h-5 w-5 mr-2" />
              Health System Types
            </h4>
            <div className="flex flex-wrap gap-2">
              {stateInfo.type.map((type, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {getHealthSystemTypeLabel(type)}
                </span>
              ))}
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Standards</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">{stateInfo.standards}</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Building2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-900">Institutions</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{stateInfo.institutions}</div>
            </div>
          </div>

          {/* Sample Policy */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-base font-medium text-gray-700 mb-3">Featured Policy</h4>
            <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
              {stateInfo.samplePolicy}
            </p>
          </div>

          {/* View More Button */}
          <div className="border-t border-gray-100 pt-6">
            <button 
              onClick={() => handleViewMoreDetails(stateInfo)}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-base font-medium"
            >
              <ExternalLink className="h-5 w-5" />
              <span>View More Details</span>
            </button>
          </div>
        </div>
      </article>
    );
  };

  const handleStateClick = (state: StateData) => {
    // If no comparison states are selected, set as first comparison state
    if (!compareState1 && !compareState2) {
      setCompareState1(state);
    }
    // If only first state is selected, set as second comparison state
    else if (compareState1 && !compareState2) {
      setCompareState2(state);
    }
    // If both states are selected, replace the first state
    else if (compareState1 && compareState2) {
      setCompareState1(state);
      setCompareState2(null);
    }
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
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Interactive U.S. Map
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 text-center max-w-4xl mx-auto">
              Explore AI governance standards by region with advanced filtering capabilities
            </p>
          </div>

          {/* State Comparison Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
                    <BarChart3 className="h-7 w-7 mr-3 text-blue-600" />
                    Compare AI Governance Standards
                  </h2>
                  
                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-medium text-blue-800">How to Compare States</h3>
                        <div className="mt-2 text-base text-blue-700">
                          <p>Click on states in the map below to select them for comparison. You can compare up to 2 states at a time.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Selected States Display */}
                  <div className="flex flex-col lg:flex-row gap-6 mb-8 max-w-4xl mx-auto">
                    <div className="flex-1">
                      <label className="block text-base font-medium text-gray-700 mb-3">
                        State 1
                      </label>
                      <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 min-h-[50px] flex items-center">
                        {compareState1 ? (
                          <div className="flex items-center justify-between w-full">
                            <span className="text-gray-900 text-lg">{compareState1.name}</span>
                            <button
                              onClick={() => setCompareState1(null)}
                              className="text-gray-400 hover:text-gray-600 ml-2"
                              aria-label="Remove state 1"
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <span className="text-gray-500 text-lg">Click a state on the map...</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <label className="block text-base font-medium text-gray-700 mb-3">
                        State 2
                      </label>
                      <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 min-h-[50px] flex items-center">
                        {compareState2 ? (
                          <div className="flex items-center justify-between w-full">
                            <span className="text-gray-900 text-lg">{compareState2.name}</span>
                            <button
                              onClick={() => setCompareState2(null)}
                              className="text-gray-400 hover:text-gray-600 ml-2"
                              aria-label="Remove state 2"
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <span className="text-gray-500 text-lg">Click another state on the map...</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison Container */}
                <div className="min-h-[300px]">
                  {!compareState1 && !compareState2 ? (
                    /* Interactive Map */
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive U.S. Map</h3>
                        <p className="text-gray-600">Click on states to select them for comparison</p>
                      </div>
                      <div className="h-[500px] lg:h-[600px] xl:h-[700px]">
                        <D3USMap 
                          onStateClick={handleStateClick}
                          selectedState={null}
                        />
                      </div>
                    </div>
                  ) : (!compareState1 || !compareState2) ? (
                    /* Interactive Map with partial selection */
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive U.S. Map</h3>
                        <p className="text-gray-600">Click another state to complete the comparison</p>
                      </div>
                      <div className="h-[500px] lg:h-[600px] xl:h-[700px]">
                        <D3USMap 
                          onStateClick={handleStateClick}
                          selectedState={null}
                        />
                      </div>
                    </div>
                  ) : (
                    /* Cards Container with Map Above */
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive U.S. Map</h3>
                          <p className="text-gray-600">Click on states to change your selection</p>
                        </div>
                        <div className="h-[500px] lg:h-[600px] xl:h-[700px]">
                          <D3USMap 
                            onStateClick={handleStateClick}
                            selectedState={null}
                          />
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">State Comparison Results</h3>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
                          <StateComparisonCard 
                            stateInfo={compareState1} 
                            cardId="state-1" 
                          />
                          <StateComparisonCard 
                            stateInfo={compareState2} 
                            cardId="state-2" 
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Map Legend */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Standards Activity Level
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-lg bg-green-600 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">40+ Standards</div>
                        <div className="text-xs text-gray-500">High Activity</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-lg bg-cyan-600 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">30-39 Standards</div>
                        <div className="text-xs text-gray-500">Moderate-High</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-600 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">20-29 Standards</div>
                        <div className="text-xs text-gray-500">Moderate</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-lg bg-indigo-500 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">10-19 Standards</div>
                        <div className="text-xs text-gray-500">Emerging</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-lg bg-gray-200 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">No Data</div>
                        <div className="text-xs text-gray-500">Not Available</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-blue-900 mb-1">How to Use</p>
                          <p className="text-xs text-blue-800 leading-relaxed">
                            Click on any state in the map to view detailed governance information and compare standards across regions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* State Details Modal */}
          {isDetailsModalOpen && selectedStateForDetails && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedStateForDetails.name}</h2>
                      <p className="text-lg text-gray-600">Comprehensive AI Governance Profile</p>
                    </div>
                    <button
                      onClick={closeDetailsModal}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-8">
                  {/* Overview Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <BarChart3 className="h-8 w-8 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium text-blue-900">Governance Standards</p>
                          <p className="text-3xl font-bold text-blue-600">{selectedStateForDetails.standards}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Building2 className="h-8 w-8 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-green-900">Healthcare Institutions</p>
                          <p className="text-3xl font-bold text-green-600">{selectedStateForDetails.institutions}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Shield className="h-8 w-8 text-purple-600" />
                        <div>
                          <p className="text-sm font-medium text-purple-900">Governance Level</p>
                          <p className="text-2xl font-bold text-purple-600">
                            {selectedStateForDetails.standards >= 30 ? 'Advanced' : 
                             selectedStateForDetails.standards >= 20 ? 'Moderate' : 'Developing'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Health System Types */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Building2 className="h-6 w-6 mr-2 text-blue-600" />
                      Health System Types
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedStateForDetails.type.map((type, index) => (
                        <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-gray-900 font-medium">{getHealthSystemTypeLabel(type)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Policy */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="h-6 w-6 mr-2 text-green-600" />
                      Featured AI Governance Policy
                    </h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <p className="text-gray-800 leading-relaxed text-lg">
                        {selectedStateForDetails.samplePolicy}
                      </p>
                    </div>
                  </div>

                  {/* Sample Standards */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Tag className="h-6 w-6 mr-2 text-orange-600" />
                      Key Governance Areas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Algorithm Validation</h4>
                        <p className="text-sm text-gray-600">Comprehensive testing and validation protocols for AI algorithms before clinical deployment.</p>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Implemented
                          </span>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Bias Mitigation</h4>
                        <p className="text-sm text-gray-600">Frameworks for identifying and addressing algorithmic bias in healthcare AI systems.</p>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Patient Consent</h4>
                        <p className="text-sm text-gray-600">Standardized procedures for obtaining informed consent for AI-assisted healthcare.</p>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Under Review
                          </span>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Data Privacy</h4>
                        <p className="text-sm text-gray-600">Comprehensive data protection and privacy protocols for AI healthcare applications.</p>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Implemented
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => {
                        // Navigate to search page with state filter
                        window.location.href = `/search?state=${selectedStateForDetails.name}`;
                      }}
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span>View All {selectedStateForDetails.name} Standards</span>
                    </button>
                    <button
                      onClick={closeDetailsModal}
                      className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MapPage;