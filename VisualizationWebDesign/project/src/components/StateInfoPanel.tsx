import React from 'react';
import { X, FileText, Shield, CheckCircle } from 'lucide-react';

interface StateData {
  id: string;
  name: string;
  governanceStandards: number;
  policyDescription: string;
}

interface StateInfoPanelProps {
  state: StateData | null;
  onClose: () => void;
}

const StateInfoPanel: React.FC<StateInfoPanelProps> = ({ state, onClose }) => {
  if (!state) return null;

  const getGovernanceLevel = (standards: number) => {
    if (standards >= 20) return { level: 'High', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (standards >= 12) return { level: 'Medium', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { level: 'Basic', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const governance = getGovernanceLevel(state.governanceStandards);

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl lg:relative lg:max-w-none lg:shadow-none">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900">State Information</h2>
            <button
              onClick={onClose}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{state.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Healthcare AI Governance Profile</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <Shield className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Governance Standards</p>
                      <p className="text-2xl font-bold text-blue-600">{state.governanceStandards}</p>
                    </div>
                  </div>
                </div>

                <div className={`${governance.bgColor} rounded-lg p-4`}>
                  <div className="flex items-center">
                    <CheckCircle className={`h-8 w-8 ${governance.color} mr-3`} />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Governance Level</p>
                      <p className={`text-2xl font-bold ${governance.color}`}>{governance.level}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Policy Overview</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {state.policyDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Key Governance Areas</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Algorithm Validation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Data Privacy & Security</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Provider Training</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Patient Consent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-4 lg:hidden">
            <button
              onClick={onClose}
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateInfoPanel;