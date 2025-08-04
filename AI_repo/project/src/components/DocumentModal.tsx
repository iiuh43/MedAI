import React from 'react';
import { X, ExternalLink, Download, Calendar, MapPin, Tag, Building2 } from 'lucide-react';
import { Document } from '../utils/filterUtils';

interface DocumentModalProps {
  document: Document | null;
  isOpen: boolean;
  onClose: () => void;
}

const DocumentModal: React.FC<DocumentModalProps> = ({ document, isOpen, onClose }) => {
  if (!isOpen || !document) return null;

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

  const handleDownload = () => {
    window.open(document.url, '_blank');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{document.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(document.category)}`}>
                  <Building2 className="h-4 w-4 mr-1" />
                  {document.category}
                </span>
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
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{document.description}</p>
          </div>

          {/* Focus Areas */}
          {document.focusAreas.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                Focus Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {document.focusAreas.map((area, index) => (
                  <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-blue-900 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Applications */}
          {document.aiApplications.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {document.aiApplications.map((app, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-green-900 font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clinical Categories */}
          {document.clinicalCategories.length > 0 && document.clinicalCategories[0] !== 'unclassified' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Clinical Categories</h3>
              <div className="flex flex-wrap gap-2">
                {document.clinicalCategories.map((category, index) => (
                  <span key={index} className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Download className="h-5 w-5" />
              <span>Download Document</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Open in New Tab</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;