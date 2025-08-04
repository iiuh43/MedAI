import React from 'react';
import { ExternalLink, Download, Calendar, MapPin, Tag } from 'lucide-react';
import { Document } from '../utils/filterUtils';

interface DocumentCardProps {
  document: Document;
  onViewDetails?: (document: Document) => void;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document, onViewDetails }) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'federal government':
        return 'bg-blue-100 text-blue-800';
      case 'state government':
        return 'bg-green-100 text-green-800';
      case 'nonprofit org':
        return 'bg-purple-100 text-purple-800';
      case 'academic institution (.edu)':
        return 'bg-orange-100 text-orange-800';
      case 'professional medical organization':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(document.url, '_blank');
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(document);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 
            className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer line-clamp-2"
            onClick={handleViewDetails}
          >
            {document.title}
          </h3>
          <p className="text-gray-600 mb-3 line-clamp-3">{document.description}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            {document.state && (
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{document.state}</span>
              </div>
            )}
            {document.year && (
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{document.year}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(document.category)}`}>
                {document.category}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleDownload}
                className="text-blue-600 hover:text-blue-700 p-2 rounded-md hover:bg-blue-50 transition-colors"
                title="Open document"
              >
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Focus Areas Tags */}
          {document.focusAreas.length > 0 && (
            <div className="mt-3">
              <div className="flex items-center space-x-1 mb-2">
                <Tag className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">Focus Areas:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {document.focusAreas.slice(0, 4).map((area, index) => (
                  <span key={index} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {area}
                  </span>
                ))}
                {document.focusAreas.length > 4 && (
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    +{document.focusAreas.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* AI Applications */}
          {document.aiApplications.length > 0 && (
            <div className="mt-3">
              <div className="flex items-center space-x-1 mb-2">
                <Tag className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">AI Applications:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {document.aiApplications.slice(0, 3).map((app, index) => (
                  <span key={index} className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                    {app}
                  </span>
                ))}
                {document.aiApplications.length > 3 && (
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                    +{document.aiApplications.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;