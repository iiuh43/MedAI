import React, { useState } from 'react';

interface StateData {
  id: string;
  name: string;
  standards: number;
  institutions: number;
  samplePolicy: string;
  type: string[];
}

interface InteractiveUSMapProps {
  onStateClick?: (state: StateData) => void;
  selectedState?: StateData | null;
}

const InteractiveUSMap: React.FC<InteractiveUSMapProps> = ({ onStateClick, selectedState }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  // Mock state data
  const stateData: Record<string, StateData> = {
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

  const getStateColor = (stateName: string) => {
    const data = stateData[stateName];
    if (!data) return '#e5e7eb'; // gray-200 for states without data
    
    if (selectedState?.name === stateName) return '#1d4ed8'; // blue-700 for selected
    if (hoveredState === stateName) return '#3b82f6'; // blue-500 for hovered
    
    // Color based on number of standards
    if (data.standards >= 40) return '#059669'; // green-600
    if (data.standards >= 30) return '#0891b2'; // cyan-600
    if (data.standards >= 20) return '#2563eb'; // blue-600
    return '#6366f1'; // indigo-500
  };

  const handleStateClick = (stateName: string) => {
    const data = stateData[stateName];
    if (data && onStateClick) {
      onStateClick(data);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full max-w-6xl"
        style={{ maxHeight: '500px' }}
      >
        {/* Alabama */}
        <path
          d="M647 365 L647 435 L680 435 L680 365 Z"
          fill={getStateColor('Alabama')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Alabama')}
          onMouseEnter={() => setHoveredState('Alabama')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Alaska */}
        <path
          d="M80 450 L150 450 L150 520 L80 520 Z"
          fill={getStateColor('Alaska')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Alaska')}
          onMouseEnter={() => setHoveredState('Alaska')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Arizona */}
        <path
          d="M200 350 L270 350 L270 420 L200 420 Z"
          fill={getStateColor('Arizona')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Arizona')}
          onMouseEnter={() => setHoveredState('Arizona')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Arkansas */}
        <path
          d="M520 320 L570 320 L570 370 L520 370 Z"
          fill={getStateColor('Arkansas')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Arkansas')}
          onMouseEnter={() => setHoveredState('Arkansas')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* California */}
        <path
          d="M80 250 L150 250 L150 420 L80 420 Z"
          fill={getStateColor('California')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('California')}
          onMouseEnter={() => setHoveredState('California')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Colorado */}
        <path
          d="M350 280 L420 280 L420 330 L350 330 Z"
          fill={getStateColor('Colorado')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Colorado')}
          onMouseEnter={() => setHoveredState('Colorado')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Connecticut */}
        <path
          d="M780 200 L810 200 L810 220 L780 220 Z"
          fill={getStateColor('Connecticut')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Connecticut')}
          onMouseEnter={() => setHoveredState('Connecticut')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Delaware */}
        <path
          d="M750 240 L765 240 L765 270 L750 270 Z"
          fill={getStateColor('Delaware')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Delaware')}
          onMouseEnter={() => setHoveredState('Delaware')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Florida */}
        <path
          d="M680 400 L750 400 L750 470 L680 470 Z"
          fill={getStateColor('Florida')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Florida')}
          onMouseEnter={() => setHoveredState('Florida')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Georgia */}
        <path
          d="M680 330 L720 330 L720 400 L680 400 Z"
          fill={getStateColor('Georgia')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Georgia')}
          onMouseEnter={() => setHoveredState('Georgia')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Hawaii */}
        <path
          d="M200 450 L250 450 L250 480 L200 480 Z"
          fill={getStateColor('Hawaii')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Hawaii')}
          onMouseEnter={() => setHoveredState('Hawaii')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Idaho */}
        <path
          d="M270 180 L320 180 L320 280 L270 280 Z"
          fill={getStateColor('Idaho')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Idaho')}
          onMouseEnter={() => setHoveredState('Idaho')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Illinois */}
        <path
          d="M570 230 L600 230 L600 320 L570 320 Z"
          fill={getStateColor('Illinois')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Illinois')}
          onMouseEnter={() => setHoveredState('Illinois')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Indiana */}
        <path
          d="M600 230 L630 230 L630 320 L600 320 Z"
          fill={getStateColor('Indiana')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Indiana')}
          onMouseEnter={() => setHoveredState('Indiana')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Iowa */}
        <path
          d="M520 230 L570 230 L570 280 L520 280 Z"
          fill={getStateColor('Iowa')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Iowa')}
          onMouseEnter={() => setHoveredState('Iowa')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Kansas */}
        <path
          d="M420 280 L520 280 L520 320 L420 320 Z"
          fill={getStateColor('Kansas')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Kansas')}
          onMouseEnter={() => setHoveredState('Kansas')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Kentucky */}
        <path
          d="M630 280 L700 280 L700 320 L630 320 Z"
          fill={getStateColor('Kentucky')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Kentucky')}
          onMouseEnter={() => setHoveredState('Kentucky')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Louisiana */}
        <path
          d="M520 370 L580 370 L580 420 L520 420 Z"
          fill={getStateColor('Louisiana')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Louisiana')}
          onMouseEnter={() => setHoveredState('Louisiana')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Maine */}
        <path
          d="M810 120 L840 120 L840 200 L810 200 Z"
          fill={getStateColor('Maine')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Maine')}
          onMouseEnter={() => setHoveredState('Maine')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Maryland */}
        <path
          d="M720 240 L750 240 L750 270 L720 270 Z"
          fill={getStateColor('Maryland')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Maryland')}
          onMouseEnter={() => setHoveredState('Maryland')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Massachusetts */}
        <path
          d="M780 180 L820 180 L820 200 L780 200 Z"
          fill={getStateColor('Massachusetts')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Massachusetts')}
          onMouseEnter={() => setHoveredState('Massachusetts')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Michigan */}
        <path
          d="M600 180 L650 180 L650 250 L600 250 Z"
          fill={getStateColor('Michigan')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Michigan')}
          onMouseEnter={() => setHoveredState('Michigan')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Minnesota */}
        <path
          d="M520 150 L570 150 L570 230 L520 230 Z"
          fill={getStateColor('Minnesota')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Minnesota')}
          onMouseEnter={() => setHoveredState('Minnesota')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Mississippi */}
        <path
          d="M580 320 L610 320 L610 400 L580 400 Z"
          fill={getStateColor('Mississippi')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Mississippi')}
          onMouseEnter={() => setHoveredState('Mississippi')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Missouri */}
        <path
          d="M470 280 L520 280 L520 330 L470 330 Z"
          fill={getStateColor('Missouri')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Missouri')}
          onMouseEnter={() => setHoveredState('Missouri')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Montana */}
        <path
          d="M350 150 L470 150 L470 230 L350 230 Z"
          fill={getStateColor('Montana')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Montana')}
          onMouseEnter={() => setHoveredState('Montana')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Nebraska */}
        <path
          d="M420 230 L520 230 L520 280 L420 280 Z"
          fill={getStateColor('Nebraska')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Nebraska')}
          onMouseEnter={() => setHoveredState('Nebraska')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Nevada */}
        <path
          d="M200 250 L270 250 L270 350 L200 350 Z"
          fill={getStateColor('Nevada')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Nevada')}
          onMouseEnter={() => setHoveredState('Nevada')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* New Hampshire */}
        <path
          d="M780 160 L800 160 L800 200 L780 200 Z"
          fill={getStateColor('New Hampshire')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('New Hampshire')}
          onMouseEnter={() => setHoveredState('New Hampshire')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* New Jersey */}
        <path
          d="M750 220 L770 220 L770 260 L750 260 Z"
          fill={getStateColor('New Jersey')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('New Jersey')}
          onMouseEnter={() => setHoveredState('New Jersey')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* New Mexico */}
        <path
          d="M270 330 L350 330 L350 420 L270 420 Z"
          fill={getStateColor('New Mexico')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('New Mexico')}
          onMouseEnter={() => setHoveredState('New Mexico')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* New York */}
        <path
          d="M720 160 L780 160 L780 220 L720 220 Z"
          fill={getStateColor('New York')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('New York')}
          onMouseEnter={() => setHoveredState('New York')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* North Carolina */}
        <path
          d="M700 300 L780 300 L780 340 L700 340 Z"
          fill={getStateColor('North Carolina')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('North Carolina')}
          onMouseEnter={() => setHoveredState('North Carolina')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* North Dakota */}
        <path
          d="M420 150 L470 150 L470 200 L420 200 Z"
          fill={getStateColor('North Dakota')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('North Dakota')}
          onMouseEnter={() => setHoveredState('North Dakota')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Ohio */}
        <path
          d="M650 230 L700 230 L700 280 L650 280 Z"
          fill={getStateColor('Ohio')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Ohio')}
          onMouseEnter={() => setHoveredState('Ohio')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Oklahoma */}
        <path
          d="M420 320 L520 320 L520 370 L420 370 Z"
          fill={getStateColor('Oklahoma')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Oklahoma')}
          onMouseEnter={() => setHoveredState('Oklahoma')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Oregon */}
        <path
          d="M150 200 L270 200 L270 250 L150 250 Z"
          fill={getStateColor('Oregon')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Oregon')}
          onMouseEnter={() => setHoveredState('Oregon')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Pennsylvania */}
        <path
          d="M700 200 L750 200 L750 250 L700 250 Z"
          fill={getStateColor('Pennsylvania')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Pennsylvania')}
          onMouseEnter={() => setHoveredState('Pennsylvania')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Rhode Island */}
        <path
          d="M810 190 L820 190 L820 210 L810 210 Z"
          fill={getStateColor('Rhode Island')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Rhode Island')}
          onMouseEnter={() => setHoveredState('Rhode Island')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* South Carolina */}
        <path
          d="M720 330 L760 330 L760 370 L720 370 Z"
          fill={getStateColor('South Carolina')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('South Carolina')}
          onMouseEnter={() => setHoveredState('South Carolina')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* South Dakota */}
        <path
          d="M420 200 L470 200 L470 250 L420 250 Z"
          fill={getStateColor('South Dakota')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('South Dakota')}
          onMouseEnter={() => setHoveredState('South Dakota')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Tennessee */}
        <path
          d="M610 320 L700 320 L700 360 L610 360 Z"
          fill={getStateColor('Tennessee')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Tennessee')}
          onMouseEnter={() => setHoveredState('Tennessee')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Texas */}
        <path
          d="M350 370 L520 370 L520 470 L350 470 Z"
          fill={getStateColor('Texas')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Texas')}
          onMouseEnter={() => setHoveredState('Texas')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Utah */}
        <path
          d="M270 280 L350 280 L350 370 L270 370 Z"
          fill={getStateColor('Utah')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Utah')}
          onMouseEnter={() => setHoveredState('Utah')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Vermont */}
        <path
          d="M760 160 L780 160 L780 200 L760 200 Z"
          fill={getStateColor('Vermont')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Vermont')}
          onMouseEnter={() => setHoveredState('Vermont')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Virginia */}
        <path
          d="M700 250 L780 250 L780 300 L700 300 Z"
          fill={getStateColor('Virginia')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Virginia')}
          onMouseEnter={() => setHoveredState('Virginia')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Washington */}
        <path
          d="M150 120 L270 120 L270 200 L150 200 Z"
          fill={getStateColor('Washington')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Washington')}
          onMouseEnter={() => setHoveredState('Washington')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* West Virginia */}
        <path
          d="M680 250 L720 250 L720 300 L680 300 Z"
          fill={getStateColor('West Virginia')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('West Virginia')}
          onMouseEnter={() => setHoveredState('West Virginia')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Wisconsin */}
        <path
          d="M570 180 L600 180 L600 250 L570 250 Z"
          fill={getStateColor('Wisconsin')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Wisconsin')}
          onMouseEnter={() => setHoveredState('Wisconsin')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Wyoming */}
        <path
          d="M350 230 L420 230 L420 280 L350 280 Z"
          fill={getStateColor('Wyoming')}
          stroke="#000000"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:stroke-4"
          onClick={() => handleStateClick('Wyoming')}
          onMouseEnter={() => setHoveredState('Wyoming')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* State Labels */}
        {Object.entries(stateData).map(([stateName, data]) => {
          const positions: Record<string, { x: number; y: number }> = {
            'Alabama': { x: 663, y: 400 },
            'Alaska': { x: 115, y: 485 },
            'Arizona': { x: 235, y: 385 },
            'Arkansas': { x: 545, y: 345 },
            'California': { x: 115, y: 335 },
            'Colorado': { x: 385, y: 305 },
            'Connecticut': { x: 795, y: 210 },
            'Delaware': { x: 757, y: 255 },
            'Florida': { x: 715, y: 435 },
            'Georgia': { x: 700, y: 365 },
            'Hawaii': { x: 225, y: 465 },
            'Idaho': { x: 295, y: 230 },
            'Illinois': { x: 585, y: 275 },
            'Indiana': { x: 615, y: 275 },
            'Iowa': { x: 545, y: 255 },
            'Kansas': { x: 470, y: 300 },
            'Kentucky': { x: 665, y: 300 },
            'Louisiana': { x: 550, y: 395 },
            'Maine': { x: 825, y: 160 },
            'Maryland': { x: 735, y: 255 },
            'Massachusetts': { x: 800, y: 190 },
            'Michigan': { x: 625, y: 215 },
            'Minnesota': { x: 545, y: 190 },
            'Mississippi': { x: 595, y: 360 },
            'Missouri': { x: 495, y: 305 },
            'Montana': { x: 410, y: 190 },
            'Nebraska': { x: 470, y: 255 },
            'Nevada': { x: 235, y: 300 },
            'New Hampshire': { x: 790, y: 180 },
            'New Jersey': { x: 760, y: 240 },
            'New Mexico': { x: 310, y: 375 },
            'New York': { x: 750, y: 190 },
            'North Carolina': { x: 740, y: 320 },
            'North Dakota': { x: 445, y: 175 },
            'Ohio': { x: 675, y: 255 },
            'Oklahoma': { x: 470, y: 345 },
            'Oregon': { x: 210, y: 225 },
            'Pennsylvania': { x: 725, y: 225 },
            'Rhode Island': { x: 815, y: 200 },
            'South Carolina': { x: 740, y: 350 },
            'South Dakota': { x: 445, y: 225 },
            'Tennessee': { x: 655, y: 340 },
            'Texas': { x: 435, y: 420 },
            'Utah': { x: 310, y: 325 },
            'Vermont': { x: 770, y: 180 },
            'Virginia': { x: 740, y: 275 },
            'Washington': { x: 210, y: 160 },
            'West Virginia': { x: 700, y: 275 },
            'Wisconsin': { x: 585, y: 215 },
            'Wyoming': { x: 385, y: 255 },
          };
          
          const pos = positions[stateName];
          if (!pos) return null;
          
          return (
            <g key={stateName}>
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                className="fill-white text-xs font-semibold pointer-events-none"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
              >
                {data.id}
              </text>
              <text
                x={pos.x}
                y={pos.y + 12}
                textAnchor="middle"
                className="fill-white text-xs pointer-events-none"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
              >
                {data.standards}
              </text>
            </g>
          );
        })}

        {/* Hover tooltip */}
        {hoveredState && stateData[hoveredState] && (
          <g>
            <rect
              x="20"
              y="20"
              width="200"
              height="80"
              fill="rgba(0,0,0,0.9)"
              rx="6"
              className="pointer-events-none"
            />
            <text x="30" y="40" className="fill-white text-sm font-semibold pointer-events-none">
              {stateData[hoveredState].name}
            </text>
            <text x="30" y="55" className="fill-white text-xs pointer-events-none">
              {stateData[hoveredState].standards} governance standards
            </text>
            <text x="30" y="70" className="fill-white text-xs pointer-events-none">
              {stateData[hoveredState].institutions} healthcare institutions
            </text>
            <text x="30" y="85" className="fill-gray-300 text-xs pointer-events-none">
              Click to view details
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default InteractiveUSMap;