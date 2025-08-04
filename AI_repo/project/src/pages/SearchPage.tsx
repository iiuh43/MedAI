import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useDocuments } from '../hooks/useDocuments';
import { FilterState, debounce } from '../utils/filterUtils';
import FilterPanel from '../components/FilterPanel';
import DocumentCard from '../components/DocumentCard';
import DocumentModal from '../components/DocumentModal';
import { Document } from '../utils/filterUtils';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  
  const { documents, loading, error, availableStates, yearRange, filterDocuments } = useDocuments();
  
  const [filters, setFilters] = useState<FilterState>({
    focusAreas: [],
    categories: [],
    state: 'all',
    yearRange: yearRange,
    aiApplications: [],
    clinicalCategories: []
  });

  // Update year range when documents load
  React.useEffect(() => {
    if (yearRange[0] !== yearRange[1]) {
      setFilters(prev => ({ ...prev, yearRange }));
    }
  }, [yearRange]);

  // Debounced search function
  const debouncedSearch = React.useMemo(
    () => debounce((query: string) => {
      // Search functionality would be implemented here
      console.log('Searching for:', query);
    }, 300),
    []
  );

  React.useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    }
  }, [searchQuery, debouncedSearch]);

  // Filter and sort documents
  const filteredDocuments = React.useMemo(() => {
    let filtered = filterDocuments(filters);
    
    // Apply text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.focusAreas.some(area => area.toLowerCase().includes(query)) ||
        doc.aiApplications.some(app => app.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'date-newest':
        return filtered.sort((a, b) => (b.year || 0) - (a.year || 0));
      case 'date-oldest':
        return filtered.sort((a, b) => (a.year || 0) - (b.year || 0));
      case 'title':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'category':
        return filtered.sort((a, b) => a.category.localeCompare(b.category));
      default:
        return filtered;
    }
  }, [filterDocuments, filters, searchQuery, sortBy]);
  
  const suggestions = [
    'bias mitigation',
    'patient consent', 
    'AI incident reporting',
    'algorithm validation',
    'privacy protection',
    'clinical decision support'
  ];

  const handleDocumentSelect = (document: Document) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading documents...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search AI Governance Standards
          </h1>
          <p className="text-xl text-gray-600">
            Find specific standards, policies, and frameworks using our NLP-enhanced search
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search AI governance standards, policies, and frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(suggestion)}
                  className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm rounded-full transition-colors duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="hidden lg:block sticky top-8">
              <FilterPanel
                filters={filters}
                onFiltersChange={setFilters}
                availableStates={availableStates}
                yearRange={yearRange}
              />
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-gray-600">
                <span className="font-medium text-gray-900">{filteredDocuments.length}</span> results found
                {searchQuery && (
                  <span className="ml-2">for "{searchQuery}"</span>
                )}
              </div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="relevance">Sort by relevance</option>
                <option value="date-newest">Sort by date (newest)</option>
                <option value="date-oldest">Sort by date (oldest)</option>
                <option value="title">Sort by title</option>
                <option value="category">Sort by category</option>
              </select>
            </div>

            {filteredDocuments.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters to find relevant documents.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilters({
                      focusAreas: [],
                      categories: [],
                      state: 'all',
                      yearRange: yearRange,
                      aiApplications: [],
                      clinicalCategories: []
                    });
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredDocuments.map((document) => (
                  <DocumentCard
                    key={document.id}
                    document={document}
                    onViewDetails={handleDocumentSelect}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isMobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[80vh] overflow-y-auto rounded-t-xl">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <FilterPanel
                filters={filters}
                onFiltersChange={setFilters}
                availableStates={availableStates}
                yearRange={yearRange}
              />
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Document Detail Modal */}
      <DocumentModal
        document={selectedDocument}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default SearchPage;