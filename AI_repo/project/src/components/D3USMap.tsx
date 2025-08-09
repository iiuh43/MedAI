import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';

interface StateData {
  id: string;
  name: string;
  standards: number;
  institutions: number;
  samplePolicy: string;
  type: string[];
}

interface D3USMapProps {
  onStateClick?: (state: StateData) => void;
  selectedState?: StateData | null;
}

const D3USMap: React.FC<D3USMapProps> = ({ onStateClick, selectedState }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [usData, setUsData] = useState<any>(null);

  // State name mapping from FIPS codes to full names
  const stateNames: Record<string, string> = {
    '01': 'Alabama', '02': 'Alaska', '04': 'Arizona', '05': 'Arkansas', '06': 'California',
    '08': 'Colorado', '09': 'Connecticut', '10': 'Delaware', '12': 'Florida', '13': 'Georgia',
    '15': 'Hawaii', '16': 'Idaho', '17': 'Illinois', '18': 'Indiana', '19': 'Iowa',
    '20': 'Kansas', '21': 'Kentucky', '22': 'Louisiana', '23': 'Maine', '24': 'Maryland',
    '25': 'Massachusetts', '26': 'Michigan', '27': 'Minnesota', '28': 'Mississippi', '29': 'Missouri',
    '30': 'Montana', '31': 'Nebraska', '32': 'Nevada', '33': 'New Hampshire', '34': 'New Jersey',
    '35': 'New Mexico', '36': 'New York', '37': 'North Carolina', '38': 'North Dakota', '39': 'Ohio',
    '40': 'Oklahoma', '41': 'Oregon', '42': 'Pennsylvania', '44': 'Rhode Island', '45': 'South Carolina',
    '46': 'South Dakota', '47': 'Tennessee', '48': 'Texas', '49': 'Utah', '50': 'Vermont',
    '51': 'Virginia', '53': 'Washington', '54': 'West Virginia', '55': 'Wisconsin', '56': 'Wyoming'
  };

  // Mock state data with realistic information
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

  useEffect(() => {
    const handleResize = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: Math.min(container.clientHeight, container.clientWidth * 0.6)
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Load TopoJSON data from CDN
    d3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
      .then((topology: any) => {
        if (topology && topology.objects && topology.objects.states) {
          const states = feature(topology, topology.objects.states);
          setUsData(states);
        } else {
          throw new Error('Invalid TopoJSON structure');
        }
      })
      .catch((error) => {
        console.error('Error loading TopoJSON data:', error);
        // Create fallback simplified map data
        const fallbackData = {
          type: "FeatureCollection",
          features: Object.entries(stateNames).map(([id, name]) => ({
            type: "Feature",
            id: id,
            properties: { name },
            geometry: {
              type: "Polygon",
              coordinates: [[[0, 0], [100, 0], [100, 50], [0, 50], [0, 0]]]
            }
          }))
        };
        setUsData(fallbackData);
      });
  }, []);

  useEffect(() => {
    if (!svgRef.current || !usData) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const { width, height } = dimensions;
    
    // Set up projection and path generator
    const projection = d3.geoAlbersUsa()
      .scale(width * 0.8)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Color scale based on standards count
    const getStateColor = (standards: number, stateName: string) => {
      if (selectedState?.name === stateName) return '#1d4ed8'; // blue-700
      if (hoveredState === stateName) return '#3b82f6'; // blue-500
      if (standards >= 40) return '#059669'; // green-600
      if (standards >= 30) return '#0891b2'; // cyan-600
      if (standards >= 20) return '#2563eb'; // blue-600
      return '#6366f1'; // indigo-500
    };

    // Draw states
    svg.selectAll('path')
      .data(usData.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', (d: any) => {
        const stateName = stateNames[d.id] || d.properties?.name;
        const stateInfo = stateData[stateName];
        return stateInfo ? getStateColor(stateInfo.standards, stateName) : '#e5e7eb';
      })
      .attr('stroke', '#FFFFFF')
      .attr('stroke-width', '1px')
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d: any) {
        const stateName = stateNames[d.id] || d.properties?.name;
        setHoveredState(stateName);
        d3.select(this).attr('stroke-width', '2px');
      })
      .on('mouseout', function(event, d: any) {
        setHoveredState(null);
        d3.select(this).attr('stroke-width', '1px');
      })
      .on('click', function(event, d: any) {
        const stateName = stateNames[d.id] || d.properties?.name;
        const stateInfo = stateData[stateName];
        if (stateInfo && onStateClick) {
          onStateClick(stateInfo);
        }
      });

    // Add state labels
    svg.selectAll('.state-label')
      .data(usData.features)
      .enter()
      .append('text')
      .attr('class', 'state-label')
      .attr('x', (d: any) => {
        const centroid = path.centroid(d);
        return centroid[0];
      })
      .attr('y', (d: any) => {
        const centroid = path.centroid(d);
        return centroid[1];
      })
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('font-weight', 'bold')
      .attr('fill', 'white')
      .style('pointer-events', 'none')
      .style('text-shadow', '1px 1px 2px rgba(0,0,0,0.7)')
      .text((d: any) => {
        const stateName = stateNames[d.id] || d.properties?.name;
        const stateInfo = stateData[stateName];
        return stateInfo ? stateInfo.id : '';
      });

    // Add standards count labels
    svg.selectAll('.standards-label')
      .data(usData.features)
      .enter()
      .append('text')
      .attr('class', 'standards-label')
      .attr('x', (d: any) => {
        const centroid = path.centroid(d);
        return centroid[0];
      })
      .attr('y', (d: any) => {
        const centroid = path.centroid(d);
        return centroid[1] + 12;
      })
      .attr('text-anchor', 'middle')
      .attr('font-size', '8px')
      .attr('fill', 'white')
      .style('pointer-events', 'none')
      .style('text-shadow', '1px 1px 2px rgba(0,0,0,0.7)')
      .text((d: any) => {
        const stateName = stateNames[d.id] || d.properties?.name;
        const stateInfo = stateData[stateName];
        return stateInfo ? stateInfo.standards.toString() : '';
      });

    // Add hover tooltip
    if (hoveredState && stateData[hoveredState]) {
      const data = stateData[hoveredState];
      const stateFeature = usData.features.find((f: any) => {
        const stateName = stateNames[f.id] || f.properties?.name;
        return stateName === hoveredState;
      });
      
      if (stateFeature) {
        const centroid = path.centroid(stateFeature);
        
        const tooltip = svg.append('g')
          .attr('class', 'tooltip')
          .style('pointer-events', 'none');

        const tooltipBg = tooltip.append('rect')
          .attr('x', centroid[0] + 15)
          .attr('y', centroid[1] - 50)
          .attr('width', 220)
          .attr('height', 80)
          .attr('fill', 'rgba(0,0,0,0.9)')
          .attr('rx', 6);

        tooltip.append('text')
          .attr('x', centroid[0] + 25)
          .attr('y', centroid[1] - 30)
          .attr('fill', 'white')
          .attr('font-size', '12px')
          .attr('font-weight', 'bold')
          .text(data.name);

        tooltip.append('text')
          .attr('x', centroid[0] + 25)
          .attr('y', centroid[1] - 15)
          .attr('fill', 'white')
          .attr('font-size', '10px')
          .text(`${data.standards} governance standards`);

        tooltip.append('text')
          .attr('x', centroid[0] + 25)
          .attr('y', centroid[1])
          .attr('fill', 'white')
          .attr('font-size', '10px')
          .text(`${data.institutions} healthcare institutions`);

        tooltip.append('text')
          .attr('x', centroid[0] + 25)
          .attr('y', centroid[1] + 15)
          .attr('fill', '#9ca3af')
          .attr('font-size', '9px')
          .text('Click to view details');
      }
    }

  }, [dimensions, hoveredState, selectedState, onStateClick, usData]);

  return (
    <div className="w-full h-full">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
    </div>
  );
};

export default D3USMap;