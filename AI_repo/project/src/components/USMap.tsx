import React, { useState } from 'react';

interface StateData {
  id: string;
  name: string;
  standards: number;
  institutions: number;
  type: string[];
}

interface USMapProps {
  onStateClick: (state: StateData) => void;
  selectedState: StateData | null;
}

const USMap: React.FC<USMapProps> = ({ onStateClick, selectedState }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const stateData: Record<string, StateData> = {
    'AL': { id: 'AL', name: 'Alabama', standards: 15, institutions: 4, type: ['community', 'rural'] },
    'AK': { id: 'AK', name: 'Alaska', standards: 8, institutions: 2, type: ['rural'] },
    'AZ': { id: 'AZ', name: 'Arizona', standards: 22, institutions: 6, type: ['community', 'urban'] },
    'AR': { id: 'AR', name: 'Arkansas', standards: 12, institutions: 3, type: ['rural', 'community'] },
    'CA': { id: 'CA', name: 'California', standards: 45, institutions: 12, type: ['academic', 'urban'] },
    'CO': { id: 'CO', name: 'Colorado', standards: 18, institutions: 5, type: ['academic', 'community'] },
    'CT': { id: 'CT', name: 'Connecticut', standards: 25, institutions: 4, type: ['academic', 'urban'] },
    'DE': { id: 'DE', name: 'Delaware', standards: 10, institutions: 2, type: ['community'] },
    'FL': { id: 'FL', name: 'Florida', standards: 28, institutions: 10, type: ['community', 'urban'] },
    'GA': { id: 'GA', name: 'Georgia', standards: 22, institutions: 9, type: ['academic', 'community'] },
    'HI': { id: 'HI', name: 'Hawaii', standards: 14, institutions: 3, type: ['community'] },
    'ID': { id: 'ID', name: 'Idaho', standards: 9, institutions: 2, type: ['rural'] },
    'IL': { id: 'IL', name: 'Illinois', standards: 25, institutions: 7, type: ['academic', 'urban'] },
    'IN': { id: 'IN', name: 'Indiana', standards: 16, institutions: 5, type: ['community', 'urban'] },
    'IA': { id: 'IA', name: 'Iowa', standards: 13, institutions: 4, type: ['rural', 'community'] },
    'KS': { id: 'KS', name: 'Kansas', standards: 11, institutions: 3, type: ['rural', 'community'] },
    'KY': { id: 'KY', name: 'Kentucky', standards: 14, institutions: 4, type: ['community', 'rural'] },
    'LA': { id: 'LA', name: 'Louisiana', standards: 17, institutions: 5, type: ['community', 'urban'] },
    'ME': { id: 'ME', name: 'Maine', standards: 12, institutions: 3, type: ['rural', 'community'] },
    'MD': { id: 'MD', name: 'Maryland', standards: 32, institutions: 6, type: ['academic', 'urban'] },
    'MA': { id: 'MA', name: 'Massachusetts', standards: 35, institutions: 6, type: ['academic'] },
    'MI': { id: 'MI', name: 'Michigan', standards: 24, institutions: 8, type: ['academic', 'urban'] },
    'MN': { id: 'MN', name: 'Minnesota', standards: 21, institutions: 6, type: ['academic', 'community'] },
    'MS': { id: 'MS', name: 'Mississippi', standards: 10, institutions: 3, type: ['rural', 'community'] },
    'MO': { id: 'MO', name: 'Missouri', standards: 19, institutions: 6, type: ['academic', 'community'] },
    'MT': { id: 'MT', name: 'Montana', standards: 7, institutions: 2, type: ['rural'] },
    'NE': { id: 'NE', name: 'Nebraska', standards: 11, institutions: 3, type: ['rural', 'community'] },
    'NV': { id: 'NV', name: 'Nevada', standards: 15, institutions: 3, type: ['urban', 'community'] },
    'NH': { id: 'NH', name: 'New Hampshire', standards: 13, institutions: 2, type: ['community'] },
    'NJ': { id: 'NJ', name: 'New Jersey', standards: 27, institutions: 7, type: ['academic', 'urban'] },
    'NM': { id: 'NM', name: 'New Mexico', standards: 12, institutions: 3, type: ['rural', 'community'] },
    'NY': { id: 'NY', name: 'New York', standards: 38, institutions: 8, type: ['academic', 'urban'] },
    'NC': { id: 'NC', name: 'North Carolina', standards: 18, institutions: 6, type: ['academic', 'community'] },
    'ND': { id: 'ND', name: 'North Dakota', standards: 8, institutions: 2, type: ['rural'] },
    'OH': { id: 'OH', name: 'Ohio', standards: 20, institutions: 8, type: ['community', 'urban'] },
    'OK': { id: 'OK', name: 'Oklahoma', standards: 13, institutions: 4, type: ['community', 'rural'] },
    'OR': { id: 'OR', name: 'Oregon', standards: 19, institutions: 4, type: ['academic', 'community'] },
    'PA': { id: 'PA', name: 'Pennsylvania', standards: 30, institutions: 11, type: ['academic', 'urban'] },
    'RI': { id: 'RI', name: 'Rhode Island', standards: 11, institutions: 2, type: ['community'] },
    'SC': { id: 'SC', name: 'South Carolina', standards: 14, institutions: 4, type: ['community', 'rural'] },
    'SD': { id: 'SD', name: 'South Dakota', standards: 9, institutions: 2, type: ['rural'] },
    'TN': { id: 'TN', name: 'Tennessee', standards: 16, institutions: 5, type: ['community', 'urban'] },
    'TX': { id: 'TX', name: 'Texas', standards: 32, institutions: 15, type: ['community', 'rural', 'urban'] },
    'UT': { id: 'UT', name: 'Utah', standards: 17, institutions: 4, type: ['academic', 'community'] },
    'VT': { id: 'VT', name: 'Vermont', standards: 10, institutions: 2, type: ['rural', 'community'] },
    'VA': { id: 'VA', name: 'Virginia', standards: 23, institutions: 7, type: ['academic', 'community'] },
    'WA': { id: 'WA', name: 'Washington', standards: 26, institutions: 6, type: ['academic', 'urban'] },
    'WV': { id: 'WV', name: 'West Virginia', standards: 9, institutions: 2, type: ['rural'] },
    'WI': { id: 'WI', name: 'Wisconsin', standards: 18, institutions: 5, type: ['academic', 'community'] },
    'WY': { id: 'WY', name: 'Wyoming', standards: 6, institutions: 1, type: ['rural'] },
  };

  const getStateColor = (stateId: string) => {
    const data = stateData[stateId];
    if (!data) return '#e5e7eb'; // gray-200 for states without data
    
    if (selectedState?.id === stateId) return '#1d4ed8'; // blue-700 for selected
    if (hoveredState === stateId) return '#3b82f6'; // blue-500 for hovered
    
    // Color based on number of standards
    if (data.standards >= 40) return '#059669'; // green-600
    if (data.standards >= 30) return '#0891b2'; // cyan-600
    if (data.standards >= 20) return '#2563eb'; // blue-600
    return '#6366f1'; // indigo-500
  };

  const handleStateClick = (stateId: string) => {
    const data = stateData[stateId];
    if (data) {
      onStateClick(data);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full max-w-6xl"
        style={{ maxHeight: '500px' }}
      >
        {/* Alabama */}
        <path
          id="AL"
          d="M647 365 L647 435 L680 435 L680 365 Z"
          fill={getStateColor('AL')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('AL')}
          onMouseEnter={() => setHoveredState('AL')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Alaska */}
        <path
          id="AK"
          d="M80 450 L150 450 L150 520 L80 520 Z"
          fill={getStateColor('AK')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('AK')}
          onMouseEnter={() => setHoveredState('AK')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Arizona */}
        <path
          id="AZ"
          d="M200 350 L270 350 L270 420 L200 420 Z"
          fill={getStateColor('AZ')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('AZ')}
          onMouseEnter={() => setHoveredState('AZ')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Arkansas */}
        <path
          id="AR"
          d="M520 320 L570 320 L570 370 L520 370 Z"
          fill={getStateColor('AR')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('AR')}
          onMouseEnter={() => setHoveredState('AR')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* California */}
        <path
          id="CA"
          d="M80 250 L150 250 L150 420 L80 420 Z"
          fill={getStateColor('CA')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('CA')}
          onMouseEnter={() => setHoveredState('CA')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Colorado */}
        <path
          id="CO"
          d="M350 280 L420 280 L420 330 L350 330 Z"
          fill={getStateColor('CO')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('CO')}
          onMouseEnter={() => setHoveredState('CO')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Connecticut */}
        <path
          id="CT"
          d="M780 200 L810 200 L810 220 L780 220 Z"
          fill={getStateColor('CT')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('CT')}
          onMouseEnter={() => setHoveredState('CT')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Delaware */}
        <path
          id="DE"
          d="M750 240 L765 240 L765 270 L750 270 Z"
          fill={getStateColor('DE')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('DE')}
          onMouseEnter={() => setHoveredState('DE')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Florida */}
        <path
          id="FL"
          d="M680 400 L750 400 L750 470 L680 470 Z"
          fill={getStateColor('FL')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('FL')}
          onMouseEnter={() => setHoveredState('FL')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Georgia */}
        <path
          id="GA"
          d="M680 330 L720 330 L720 400 L680 400 Z"
          fill={getStateColor('GA')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('GA')}
          onMouseEnter={() => setHoveredState('GA')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Hawaii */}
        <path
          id="HI"
          d="M200 450 L250 450 L250 480 L200 480 Z"
          fill={getStateColor('HI')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('HI')}
          onMouseEnter={() => setHoveredState('HI')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Idaho */}
        <path
          id="ID"
          d="M270 180 L320 180 L320 280 L270 280 Z"
          fill={getStateColor('ID')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('ID')}
          onMouseEnter={() => setHoveredState('ID')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Illinois */}
        <path
          id="IL"
          d="M570 230 L600 230 L600 320 L570 320 Z"
          fill={getStateColor('IL')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('IL')}
          onMouseEnter={() => setHoveredState('IL')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Indiana */}
        <path
          id="IN"
          d="M600 230 L630 230 L630 320 L600 320 Z"
          fill={getStateColor('IN')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('IN')}
          onMouseEnter={() => setHoveredState('IN')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Iowa */}
        <path
          id="IA"
          d="M520 230 L570 230 L570 280 L520 280 Z"
          fill={getStateColor('IA')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('IA')}
          onMouseEnter={() => setHoveredState('IA')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Kansas */}
        <path
          id="KS"
          d="M420 280 L520 280 L520 320 L420 320 Z"
          fill={getStateColor('KS')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('KS')}
          onMouseEnter={() => setHoveredState('KS')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Kentucky */}
        <path
          id="KY"
          d="M630 280 L700 280 L700 320 L630 320 Z"
          fill={getStateColor('KY')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('KY')}
          onMouseEnter={() => setHoveredState('KY')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Louisiana */}
        <path
          id="LA"
          d="M520 370 L580 370 L580 420 L520 420 Z"
          fill={getStateColor('LA')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('LA')}
          onMouseEnter={() => setHoveredState('LA')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Maine */}
        <path
          id="ME"
          d="M810 120 L840 120 L840 200 L810 200 Z"
          fill={getStateColor('ME')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('ME')}
          onMouseEnter={() => setHoveredState('ME')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Maryland */}
        <path
          id="MD"
          d="M720 240 L750 240 L750 270 L720 270 Z"
          fill={getStateColor('MD')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('MD')}
          onMouseEnter={() => setHoveredState('MD')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Massachusetts */}
        <path
          id="MA"
          d="M780 180 L820 180 L820 200 L780 200 Z"
          fill={getStateColor('MA')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('MA')}
          onMouseEnter={() => setHoveredState('MA')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Michigan */}
        <path
          id="MI"
          d="M600 180 L650 180 L650 250 L600 250 Z"
          fill={getStateColor('MI')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('MI')}
          onMouseEnter={() => setHoveredState('MI')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Minnesota */}
        <path
          id="MN"
          d="M520 150 L570 150 L570 230 L520 230 Z"
          fill={getStateColor('MN')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('MN')}
          onMouseEnter={() => setHoveredState('MN')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Mississippi */}
        <path
          id="MS"
          d="M580 320 L610 320 L610 400 L580 400 Z"
          fill={getStateColor('MS')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('MS')}
          onMouseEnter={() => setHoveredState('MS')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Missouri */}
        <path
          id="MO"
          d="M470 280 L520 280 L520 330 L470 330 Z"
          fill={getStateColor('MO')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('MO')}
          onMouseEnter={() => setHoveredState('MO')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Montana */}
        <path
          id="MT"
          d="M350 150 L470 150 L470 230 L350 230 Z"
          fill={getStateColor('MT')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('MT')}
          onMouseEnter={() => setHoveredState('MT')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Nebraska */}
        <path
          id="NE"
          d="M420 230 L520 230 L520 280 L420 280 Z"
          fill={getStateColor('NE')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('NE')}
          onMouseEnter={() => setHoveredState('NE')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Nevada */}
        <path
          id="NV"
          d="M200 250 L270 250 L270 350 L200 350 Z"
          fill={getStateColor('NV')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('NV')}
          onMouseEnter={() => setHoveredState('NV')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* New Hampshire */}
        <path
          id="NH"
          d="M780 160 L800 160 L800 200 L780 200 Z"
          fill={getStateColor('NH')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('NH')}
          onMouseEnter={() => setHoveredState('NH')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* New Jersey */}
        <path
          id="NJ"
          d="M750 220 L770 220 L770 260 L750 260 Z"
          fill={getStateColor('NJ')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('NJ')}
          onMouseEnter={() => setHoveredState('NJ')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* New Mexico */}
        <path
          id="NM"
          d="M270 330 L350 330 L350 420 L270 420 Z"
          fill={getStateColor('NM')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('NM')}
          onMouseEnter={() => setHoveredState('NM')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* New York */}
        <path
          id="NY"
          d="M720 160 L780 160 L780 220 L720 220 Z"
          fill={getStateColor('NY')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('NY')}
          onMouseEnter={() => setHoveredState('NY')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* North Carolina */}
        <path
          id="NC"
          d="M700 300 L780 300 L780 340 L700 340 Z"
          fill={getStateColor('NC')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('NC')}
          onMouseEnter={() => setHoveredState('NC')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* North Dakota */}
        <path
          id="ND"
          d="M420 150 L470 150 L470 200 L420 200 Z"
          fill={getStateColor('ND')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('ND')}
          onMouseEnter={() => setHoveredState('ND')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Ohio */}
        <path
          id="OH"
          d="M650 230 L700 230 L700 280 L650 280 Z"
          fill={getStateColor('OH')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('OH')}
          onMouseEnter={() => setHoveredState('OH')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Oklahoma */}
        <path
          id="OK"
          d="M420 320 L520 320 L520 370 L420 370 Z"
          fill={getStateColor('OK')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('OK')}
          onMouseEnter={() => setHoveredState('OK')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Oregon */}
        <path
          id="OR"
          d="M150 200 L270 200 L270 250 L150 250 Z"
          fill={getStateColor('OR')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('OR')}
          onMouseEnter={() => setHoveredState('OR')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Pennsylvania */}
        <path
          id="PA"
          d="M700 200 L750 200 L750 250 L700 250 Z"
          fill={getStateColor('PA')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('PA')}
          onMouseEnter={() => setHoveredState('PA')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Rhode Island */}
        <path
          id="RI"
          d="M810 190 L820 190 L820 210 L810 210 Z"
          fill={getStateColor('RI')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('RI')}
          onMouseEnter={() => setHoveredState('RI')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* South Carolina */}
        <path
          id="SC"
          d="M720 330 L760 330 L760 370 L720 370 Z"
          fill={getStateColor('SC')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('SC')}
          onMouseEnter={() => setHoveredState('SC')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* South Dakota */}
        <path
          id="SD"
          d="M420 200 L470 200 L470 250 L420 250 Z"
          fill={getStateColor('SD')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('SD')}
          onMouseEnter={() => setHoveredState('SD')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Tennessee */}
        <path
          id="TN"
          d="M610 320 L700 320 L700 360 L610 360 Z"
          fill={getStateColor('TN')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('TN')}
          onMouseEnter={() => setHoveredState('TN')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Texas */}
        <path
          id="TX"
          d="M350 370 L520 370 L520 470 L350 470 Z"
          fill={getStateColor('TX')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('TX')}
          onMouseEnter={() => setHoveredState('TX')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Utah */}
        <path
          id="UT"
          d="M270 280 L350 280 L350 370 L270 370 Z"
          fill={getStateColor('UT')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('UT')}
          onMouseEnter={() => setHoveredState('UT')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Vermont */}
        <path
          id="VT"
          d="M760 160 L780 160 L780 200 L760 200 Z"
          fill={getStateColor('VT')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('VT')}
          onMouseEnter={() => setHoveredState('VT')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Virginia */}
        <path
          id="VA"
          d="M700 250 L780 250 L780 300 L700 300 Z"
          fill={getStateColor('VA')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('VA')}
          onMouseEnter={() => setHoveredState('VA')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Washington */}
        <path
          id="WA"
          d="M150 120 L270 120 L270 200 L150 200 Z"
          fill={getStateColor('WA')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('WA')}
          onMouseEnter={() => setHoveredState('WA')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* West Virginia */}
        <path
          id="WV"
          d="M680 250 L720 250 L720 300 L680 300 Z"
          fill={getStateColor('WV')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('WV')}
          onMouseEnter={() => setHoveredState('WV')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Wisconsin */}
        <path
          id="WI"
          d="M570 180 L600 180 L600 250 L570 250 Z"
          fill={getStateColor('WI')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('WI')}
          onMouseEnter={() => setHoveredState('WI')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* Wyoming */}
        <path
          id="WY"
          d="M350 230 L420 230 L420 280 L350 280 Z"
          fill={getStateColor('WY')}
          stroke="#ffffff"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-200 hover:stroke-2"
          onClick={() => handleStateClick('WY')}
          onMouseEnter={() => setHoveredState('WY')}
          onMouseLeave={() => setHoveredState(null)}
        />

        {/* State Labels */}
        {Object.entries(stateData).map(([stateId, data]) => {
          const positions: Record<string, { x: number; y: number }> = {
            'AL': { x: 663, y: 400 },
            'AK': { x: 115, y: 485 },
            'AZ': { x: 235, y: 385 },
            'AR': { x: 545, y: 345 },
            'CA': { x: 115, y: 335 },
            'CO': { x: 385, y: 305 },
            'CT': { x: 795, y: 210 },
            'DE': { x: 757, y: 255 },
            'FL': { x: 715, y: 435 },
            'GA': { x: 700, y: 365 },
            'HI': { x: 225, y: 465 },
            'ID': { x: 295, y: 230 },
            'IL': { x: 585, y: 275 },
            'IN': { x: 615, y: 275 },
            'IA': { x: 545, y: 255 },
            'KS': { x: 470, y: 300 },
            'KY': { x: 665, y: 300 },
            'LA': { x: 550, y: 395 },
            'ME': { x: 825, y: 160 },
            'MD': { x: 735, y: 255 },
            'MA': { x: 800, y: 190 },
            'MI': { x: 625, y: 215 },
            'MN': { x: 545, y: 190 },
            'MS': { x: 595, y: 360 },
            'MO': { x: 495, y: 305 },
            'MT': { x: 410, y: 190 },
            'NE': { x: 470, y: 255 },
            'NV': { x: 235, y: 300 },
            'NH': { x: 790, y: 180 },
            'NJ': { x: 760, y: 240 },
            'NM': { x: 310, y: 375 },
            'NY': { x: 750, y: 190 },
            'NC': { x: 740, y: 320 },
            'ND': { x: 445, y: 175 },
            'OH': { x: 675, y: 255 },
            'OK': { x: 470, y: 345 },
            'OR': { x: 210, y: 225 },
            'PA': { x: 725, y: 225 },
            'RI': { x: 815, y: 200 },
            'SC': { x: 740, y: 350 },
            'SD': { x: 445, y: 225 },
            'TN': { x: 655, y: 340 },
            'TX': { x: 435, y: 420 },
            'UT': { x: 310, y: 325 },
            'VT': { x: 770, y: 180 },
            'VA': { x: 740, y: 275 },
            'WA': { x: 210, y: 160 },
            'WV': { x: 700, y: 275 },
            'WI': { x: 585, y: 215 },
            'WY': { x: 385, y: 255 },
          };
          
          const pos = positions[stateId];
          if (!pos) return null;
          
          return (
            <g key={stateId}>
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                className="fill-white text-xs font-semibold pointer-events-none"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
              >
                {stateId}
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

export default USMap;