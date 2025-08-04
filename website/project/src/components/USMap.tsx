import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';

interface StateData {
  id: string;
  name: string;
  governanceStandards: number;
  policyDescription: string;
}

interface USMapProps {
  onStateClick: (state: StateData) => void;
  selectedState: StateData | null;
}

const USMap: React.FC<USMapProps> = ({ onStateClick, selectedState }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mapData, setMapData] = useState<any>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

  // Mock data for AI governance by state
  const stateGovernanceData: Record<string, StateData> = {
    'Alabama': { id: 'AL', name: 'Alabama', governanceStandards: 12, policyDescription: 'Alabama has implemented comprehensive AI oversight in healthcare facilities, focusing on diagnostic AI validation and patient data protection.' },
    'Alaska': { id: 'AK', name: 'Alaska', governanceStandards: 8, policyDescription: 'Alaska maintains AI governance standards for telemedicine applications, with emphasis on remote patient monitoring systems.' },
    'Arizona': { id: 'AZ', name: 'Arizona', governanceStandards: 18, policyDescription: 'Arizona leads in AI healthcare innovation with robust regulatory frameworks for medical AI deployment and continuous monitoring.' },
    'Arkansas': { id: 'AR', name: 'Arkansas', governanceStandards: 10, policyDescription: 'Arkansas focuses on AI transparency requirements and medical professional training for AI-assisted healthcare delivery.' },
    'California': { id: 'CA', name: 'California', governanceStandards: 25, policyDescription: 'California maintains the most comprehensive AI governance framework, including algorithmic bias testing and patient consent protocols.' },
    'Colorado': { id: 'CO', name: 'Colorado', governanceStandards: 16, policyDescription: 'Colorado emphasizes AI ethics in healthcare with mandatory impact assessments for all medical AI implementations.' },
    'Connecticut': { id: 'CT', name: 'Connecticut', governanceStandards: 14, policyDescription: 'Connecticut requires AI system validation and maintains strict data governance standards for healthcare AI applications.' },
    'Delaware': { id: 'DE', name: 'Delaware', governanceStandards: 11, policyDescription: 'Delaware focuses on AI interoperability standards and patient data security in healthcare AI systems.' },
    'Florida': { id: 'FL', name: 'Florida', governanceStandards: 20, policyDescription: 'Florida has established comprehensive AI governance including liability frameworks and continuous monitoring requirements.' },
    'Georgia': { id: 'GA', name: 'Georgia', governanceStandards: 15, policyDescription: 'Georgia implements AI governance through medical board oversight and mandatory AI system documentation requirements.' },
    'Hawaii': { id: 'HI', name: 'Hawaii', governanceStandards: 9, policyDescription: 'Hawaii maintains AI governance standards focused on telemedicine and remote patient care in island communities.' },
    'Idaho': { id: 'ID', name: 'Idaho', governanceStandards: 7, policyDescription: 'Idaho emphasizes rural healthcare AI applications with governance frameworks for remote diagnostic systems.' },
    'Illinois': { id: 'IL', name: 'Illinois', governanceStandards: 22, policyDescription: 'Illinois maintains comprehensive AI governance including algorithmic transparency and patient rights protection.' },
    'Indiana': { id: 'IN', name: 'Indiana', governanceStandards: 13, policyDescription: 'Indiana focuses on AI system validation and healthcare professional training for AI-assisted medical practice.' },
    'Iowa': { id: 'IA', name: 'Iowa', governanceStandards: 11, policyDescription: 'Iowa emphasizes AI governance in agricultural health applications and rural healthcare delivery systems.' },
    'Kansas': { id: 'KS', name: 'Kansas', governanceStandards: 10, policyDescription: 'Kansas maintains AI governance standards with focus on medical AI system reliability and patient safety protocols.' },
    'Kentucky': { id: 'KY', name: 'Kentucky', governanceStandards: 12, policyDescription: 'Kentucky implements AI governance through state health department oversight and medical facility compliance requirements.' },
    'Louisiana': { id: 'LA', name: 'Louisiana', governanceStandards: 13, policyDescription: 'Louisiana focuses on AI governance in emergency medicine and disaster response healthcare applications.' },
    'Maine': { id: 'ME', name: 'Maine', governanceStandards: 9, policyDescription: 'Maine emphasizes AI governance in elderly care and rural healthcare delivery with strict privacy protections.' },
    'Maryland': { id: 'MD', name: 'Maryland', governanceStandards: 19, policyDescription: 'Maryland maintains advanced AI governance frameworks including federal compliance and research institution oversight.' },
    'Massachusetts': { id: 'MA', name: 'Massachusetts', governanceStandards: 24, policyDescription: 'Massachusetts leads in AI healthcare research governance with comprehensive regulatory frameworks and innovation support.' },
    'Michigan': { id: 'MI', name: 'Michigan', governanceStandards: 17, policyDescription: 'Michigan implements AI governance through multi-stakeholder oversight and continuous system performance monitoring.' },
    'Minnesota': { id: 'MN', name: 'Minnesota', governanceStandards: 16, policyDescription: 'Minnesota emphasizes AI governance in medical imaging and diagnostic systems with robust validation requirements.' },
    'Mississippi': { id: 'MS', name: 'Mississippi', governanceStandards: 8, policyDescription: 'Mississippi focuses on AI governance in rural healthcare delivery and telemedicine applications.' },
    'Missouri': { id: 'MO', name: 'Missouri', governanceStandards: 14, policyDescription: 'Missouri maintains AI governance standards with emphasis on medical AI system interoperability and data sharing.' },
    'Montana': { id: 'MT', name: 'Montana', governanceStandards: 6, policyDescription: 'Montana focuses on AI governance for rural healthcare applications and frontier medicine delivery systems.' },
    'Nebraska': { id: 'NE', name: 'Nebraska', governanceStandards: 9, policyDescription: 'Nebraska emphasizes AI governance in agricultural health and rural healthcare delivery systems.' },
    'Nevada': { id: 'NV', name: 'Nevada', governanceStandards: 12, policyDescription: 'Nevada maintains AI governance standards with focus on healthcare tourism and medical AI system validation.' },
    'New Hampshire': { id: 'NH', name: 'New Hampshire', governanceStandards: 10, policyDescription: 'New Hampshire implements AI governance through state medical board oversight and patient privacy protection.' },
    'New Jersey': { id: 'NJ', name: 'New Jersey', governanceStandards: 21, policyDescription: 'New Jersey maintains comprehensive AI governance including pharmaceutical AI oversight and medical device regulation.' },
    'New Mexico': { id: 'NM', name: 'New Mexico', governanceStandards: 11, policyDescription: 'New Mexico focuses on AI governance in border healthcare and multicultural patient care applications.' },
    'New York': { id: 'NY', name: 'New York', governanceStandards: 26, policyDescription: 'New York maintains the most extensive AI governance framework including financial oversight and patient rights protection.' },
    'North Carolina': { id: 'NC', name: 'North Carolina', governanceStandards: 18, policyDescription: 'North Carolina implements AI governance through research institution collaboration and medical system oversight.' },
    'North Dakota': { id: 'ND', name: 'North Dakota', governanceStandards: 7, policyDescription: 'North Dakota emphasizes AI governance in rural healthcare and oil industry occupational health applications.' },
    'Ohio': { id: 'OH', name: 'Ohio', governanceStandards: 16, policyDescription: 'Ohio maintains AI governance standards with focus on medical AI system reliability and healthcare professional training.' },
    'Oklahoma': { id: 'OK', name: 'Oklahoma', governanceStandards: 11, policyDescription: 'Oklahoma focuses on AI governance in tribal healthcare and rural medical delivery systems.' },
    'Oregon': { id: 'OR', name: 'Oregon', governanceStandards: 17, policyDescription: 'Oregon emphasizes AI governance in environmental health and sustainable healthcare delivery systems.' },
    'Pennsylvania': { id: 'PA', name: 'Pennsylvania', governanceStandards: 20, policyDescription: 'Pennsylvania maintains comprehensive AI governance including medical research oversight and patient safety protocols.' },
    'Rhode Island': { id: 'RI', name: 'Rhode Island', governanceStandards: 12, policyDescription: 'Rhode Island focuses on AI governance in coastal healthcare and maritime medicine applications.' },
    'South Carolina': { id: 'SC', name: 'South Carolina', governanceStandards: 13, policyDescription: 'South Carolina implements AI governance through medical board oversight and healthcare system integration requirements.' },
    'South Dakota': { id: 'SD', name: 'South Dakota', governanceStandards: 8, policyDescription: 'South Dakota emphasizes AI governance in rural healthcare and agricultural health applications.' },
    'Tennessee': { id: 'TN', name: 'Tennessee', governanceStandards: 15, policyDescription: 'Tennessee maintains AI governance standards with focus on medical AI system validation and patient care quality.' },
    'Texas': { id: 'TX', name: 'Texas', governanceStandards: 23, policyDescription: 'Texas implements extensive AI governance including border healthcare and large-scale medical system oversight.' },
    'Utah': { id: 'UT', name: 'Utah', governanceStandards: 14, policyDescription: 'Utah focuses on AI governance in medical research and healthcare innovation with emphasis on patient privacy.' },
    'Vermont': { id: 'VT', name: 'Vermont', governanceStandards: 9, policyDescription: 'Vermont emphasizes AI governance in rural healthcare and sustainable medical delivery systems.' },
    'Virginia': { id: 'VA', name: 'Virginia', governanceStandards: 19, policyDescription: 'Virginia maintains AI governance standards with federal compliance requirements and medical research oversight.' },
    'Washington': { id: 'WA', name: 'Washington', governanceStandards: 21, policyDescription: 'Washington implements comprehensive AI governance including technology innovation support and patient rights protection.' },
    'West Virginia': { id: 'WV', name: 'West Virginia', governanceStandards: 8, policyDescription: 'West Virginia focuses on AI governance in rural healthcare and occupational health applications.' },
    'Wisconsin': { id: 'WI', name: 'Wisconsin', governanceStandards: 15, policyDescription: 'Wisconsin maintains AI governance standards with emphasis on medical AI system interoperability and data sharing.' },
    'Wyoming': { id: 'WY', name: 'Wyoming', governanceStandards: 6, policyDescription: 'Wyoming emphasizes AI governance in rural healthcare and frontier medicine delivery systems.' }
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

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Load US map data
    const loadMapData = async () => {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json');
        const us = await response.json();
        setMapData(us);
      } catch (error) {
        console.error('Error loading map data:', error);
      }
    };

    loadMapData();
  }, []);

  useEffect(() => {
    if (!mapData || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width, height } = dimensions;
    
    const projection = d3.geoAlbersUsa()
      .scale(width * 0.8)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const states = feature(mapData, mapData.objects.states);

    svg.selectAll('path')
      .data(states.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('class', 'state-path')
      .style('fill', (d: any) => {
        const stateName = d.properties.name;
        const isSelected = selectedState?.name === stateName;
        return isSelected ? '#3B82F6' : '#E5E7EB';
      })
      .style('stroke', '#FFFFFF')
      .style('stroke-width', '1px')
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d: any) {
        if (selectedState?.name !== d.properties.name) {
          d3.select(this).style('fill', '#D1D5DB');
        }
      })
      .on('mouseout', function(event, d: any) {
        if (selectedState?.name !== d.properties.name) {
          d3.select(this).style('fill', '#E5E7EB');
        }
      })
      .on('click', function(event, d: any) {
        const stateName = d.properties.name;
        const stateData = stateGovernanceData[stateName];
        if (stateData) {
          onStateClick(stateData);
        }
      });

  }, [mapData, dimensions, selectedState, onStateClick]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="border border-gray-200 rounded-lg shadow-sm"
      />
    </div>
  );
};

export default USMap;