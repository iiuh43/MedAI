import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp, X, RotateCcw } from 'lucide-react';
import { FilterState, FOCUS_AREAS, CATEGORIES, AI_APPLICATIONS, CLINICAL_CATEGORIES, getActiveFilterCount } from '../utils/filterUtils';

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  availableStates: string[];
  yearRange: [number, number];
  className?: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFiltersChange,
  availableStates,
  yearRange,
  className = ''
}) => {
  const [expandedSections, setExpandedSections] = useState({
    focusAreas: true,
    categories: true,
    aiApplications: false,
    clinicalCategories: false
  });

  const [searchTerms, setSearchTerms] = useState({
    aiApplications: '',
    clinicalCategories: ''
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleMultiSelectChange = (
    filterKey: keyof FilterState,
    value: string,
    checked: boolean
  ) => {
    const currentValues = filters[filterKey] as string[];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter(v => v !== value);

    onFiltersChange({
      ...filters,
      [filterKey]: newValues
    });
  };

  const handleSelectAll = (filterKey: keyof FilterState, options: string[]) => {
    const currentValues = filters[filterKey] as string[];
    const allSelected = options.every(option => currentValues.includes(option));
    
    onFiltersChange({
      ...filters,
      [filterKey]: allSelected ? [] : options
    });
  };

  const handleStateChange = (state: string) => {
    onFiltersChange({
      ...filters,
      state
    });
  };

  const handleYearRangeChange = (index: 0 | 1, value: number) => {
    const newRange: [number, number] = [...filters.yearRange];
    newRange[index] = value;
    
    // Ensure min <= max
    if (index === 0 && value > newRange[1]) {
      newRange[1] = value;
    } else if (index === 1 && value < newRange[0]) {
      newRange[0] = value;
    }
    
    onFiltersChange({
      ...filters,
      yearRange: newRange
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      focusAreas: [],
      categories: [],
      state: 'all',
      yearRange: yearRange,
      aiApplications: [],
      clinicalCategories: []
    });
    setSearchTerms({
      aiApplications: '',
      clinicalCategories: ''
    });
  };

  const activeFilterCount = getActiveFilterCount(filters);

  const filteredAiApplications = AI_APPLICATIONS.filter(app =>
    app.toLowerCase().includes(searchTerms.aiApplications.toLowerCase())
  );

  const filteredClinicalCategories = CLINICAL_CATEGORIES.filter(cat =>
    cat.toLowerCase().includes(searchTerms.clinicalCategories.toLowerCase())
  );

  return (
    <div className={`bg-white rounded-xl shadow-sm ${className}`}>
      {/* Fixed Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </h2>
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-600 hover:text-gray-800 flex items-center space-x-1"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset All</span>
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Filter Content */}
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-6">
        <div className="space-y-6">
          {/* Focus Areas Filter */}
          <div>
            <button
              onClick={() => toggleSection('focusAreas')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-sm font-medium text-gray-700">Focus Areas</h3>
              {expandedSections.focusAreas ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.focusAreas && (
              <div className="mt-3 space-y-2">
                <button
                  onClick={() => handleSelectAll('focusAreas', FOCUS_AREAS)}
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  {FOCUS_AREAS.every(area => filters.focusAreas.includes(area)) ? 'Deselect All' : 'Select All'}
                </button>
                {FOCUS_AREAS.map(area => (
                  <label key={area} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.focusAreas.includes(area)}
                      onChange={(e) => handleMultiSelectChange('focusAreas', area, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{area}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <button
              onClick={() => toggleSection('categories')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-sm font-medium text-gray-700">Category</h3>
              {expandedSections.categories ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.categories && (
              <div className="mt-3 space-y-2">
                <button
                  onClick={() => handleSelectAll('categories', CATEGORIES)}
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  {CATEGORIES.every(cat => filters.categories.includes(cat)) ? 'Deselect All' : 'Select All'}
                </button>
                {CATEGORIES.map(category => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={(e) => handleMultiSelectChange('categories', category, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* State Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">State</h3>
            <select
              value={filters.state}
              onChange={(e) => handleStateChange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="all">All States</option>
              {availableStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {/* Year Range Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Year Range</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min={yearRange[0]}
                  max={yearRange[1]}
                  value={filters.yearRange[0]}
                  onChange={(e) => handleYearRangeChange(0, parseInt(e.target.value))}
                  className="flex-1"
                />
                <span className="text-xs text-gray-600 w-12">{filters.yearRange[0]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min={yearRange[0]}
                  max={yearRange[1]}
                  value={filters.yearRange[1]}
                  onChange={(e) => handleYearRangeChange(1, parseInt(e.target.value))}
                  className="flex-1"
                />
                <span className="text-xs text-gray-600 w-12">{filters.yearRange[1]}</span>
              </div>
              <div className="text-center text-sm text-gray-600">
                {filters.yearRange[0]} - {filters.yearRange[1]}
              </div>
            </div>
          </div>

          {/* AI Applications Filter */}
          <div>
            <button
              onClick={() => toggleSection('aiApplications')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-sm font-medium text-gray-700">AI Applications</h3>
              {expandedSections.aiApplications ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.aiApplications && (
              <div className="mt-3 space-y-2">
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerms.aiApplications}
                  onChange={(e) => setSearchTerms(prev => ({ ...prev, aiApplications: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-md text-xs focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => handleSelectAll('aiApplications', filteredAiApplications)}
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  {filteredAiApplications.every(app => filters.aiApplications.includes(app)) ? 'Deselect All' : 'Select All'}
                </button>
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {filteredAiApplications.map(application => (
                    <label key={application} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.aiApplications.includes(application)}
                        onChange={(e) => handleMultiSelectChange('aiApplications', application, e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{application}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Clinical Categories Filter */}
          <div>
            <button
              onClick={() => toggleSection('clinicalCategories')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-sm font-medium text-gray-700">Clinical Categories</h3>
              {expandedSections.clinicalCategories ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.clinicalCategories && (
              <div className="mt-3 space-y-2">
                <button
                  onClick={() => handleSelectAll('clinicalCategories', CLINICAL_CATEGORIES)}
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  {CLINICAL_CATEGORIES.every(cat => filters.clinicalCategories.includes(cat)) ? 'Deselect All' : 'Select All'}
                </button>
                {CLINICAL_CATEGORIES.map(category => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.clinicalCategories.includes(category)}
                      onChange={(e) => handleMultiSelectChange('clinicalCategories', category, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {activeFilterCount > 0 && (
        <div className="p-6 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {filters.focusAreas.map(area => (
              <span key={area} className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {area}
                <button
                  onClick={() => handleMultiSelectChange('focusAreas', area, false)}
                  className="ml-1 hover:text-blue-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {filters.categories.map(category => (
              <span key={category} className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                {category}
                <button
                  onClick={() => handleMultiSelectChange('categories', category, false)}
                  className="ml-1 hover:text-green-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {filters.state !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                {filters.state}
                <button
                  onClick={() => handleStateChange('all')}
                  className="ml-1 hover:text-purple-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.aiApplications.map(app => (
              <span key={app} className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                {app}
                <button
                  onClick={() => handleMultiSelectChange('aiApplications', app, false)}
                  className="ml-1 hover:text-orange-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {filters.clinicalCategories.map(cat => (
              <span key={cat} className="inline-flex items-center px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">
                {cat}
                <button
                  onClick={() => handleMultiSelectChange('clinicalCategories', cat, false)}
                  className="ml-1 hover:text-teal-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;