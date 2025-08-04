import React from 'react';
import { X, Building2, FileText, Users, MapPin } from 'lucide-react';

interface StateData {
  id: string;
  name: string;
  standards: number;
  institutions: number;
  samplePolicy: string;
  type: string[];
}

interface StateInfoPanelProps {
  state: StateData | null;
  onClose: () => void;
}

const StateInfoPanel: React.FC<StateInfoPanelProps> = ({ state, onClose }) => {
  if (!state) return null;

  const healthSystemTypes = [
    { id: 'academic', label: 'Academic Medical Centers', icon: Building2 },
    { id: 'rural', label: 'Rural Hospitals', icon: MapPin },
    { id: 'urban', label: 'Urban Health Systems', icon: Building2 },
    { id: 'community', label: 'Community Hospitals', icon: Users }
  ];

  const getTypeInfo = (typeId: string) => {
    return healthSystemTypes.find(t => t.id === typeId);
  };

  return (
    <>
      {/* Mobile overlay */}
      <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
        <div className="bg-white w-full max-h-[80vh] overflow-y-auto rounded-t-xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {state.name} - AI Governance Standards
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <StateContent state={state} />
          </div>
        </div>
      </div>

      {/* Desktop panel */}
      <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {state.name}
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <StateContent state={state} />
      </div>
    </>
  );
};

const StateContent: React.FC<{ state: StateData }> = ({ state }) => {
  const healthSystemTypes = [
    { id: 'academic', label: 'Academic Medical Centers', icon: Building2 },
    { id: 'rural', label: 'Rural Hospitals', icon: MapPin },
    { id: 'urban', label: 'Urban Health Systems', icon: Building2 },
    { id: 'community', label: 'Community Hospitals', icon: Users }
  ];

  const getTypeInfo = (typeId: string) => {
    return healthSystemTypes.find(t => t.id === typeId);
  };

  return (
    <div className="space-y-6">
      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Standards</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{state.standards}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Building2 className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-900">Institutions</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{state.institutions}</div>
        </div>
      </div>

      {/* Sample Policy */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Featured Policy</h3>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900 leading-relaxed">
            {state.samplePolicy}
          </p>
        </div>
      </div>

      {/* Health System Types */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Health System Types</h3>
        <div className="space-y-2">
          {state.type.map((typeId) => {
            const typeInfo = getTypeInfo(typeId);
            if (!typeInfo) return null;
            
            const Icon = typeInfo.icon;
            return (
              <div key={typeId} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                <Icon className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-900">{typeInfo.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sample Standards */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent Standards</h3>
        <div className="space-y-3">
          <div className="p-3 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-1">
              AI Bias Mitigation Framework
            </h4>
            <p className="text-xs text-gray-600 mb-2">
              Comprehensive guidelines for identifying and mitigating algorithmic bias in clinical AI systems.
            </p>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Policy Document
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Implemented
              </span>
            </div>
          </div>
          
          <div className="p-3 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-1">
              Patient Consent Protocols for AI
            </h4>
            <p className="text-xs text-gray-600 mb-2">
              Standardized procedures for obtaining informed consent when AI is used in patient care.
            </p>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Guidelines
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Under Review
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="pt-4 border-t border-gray-200">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View All {state.name} Standards
        </button>
      </div>
    </div>
  );
};

export default StateInfoPanel;