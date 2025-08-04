import React, { useState } from 'react';
import { Upload, FileText, Tag, Building2, CheckCircle, AlertCircle, Info } from 'lucide-react';

const ContributePage = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    documentTitle: '',
    documentType: '',
    governanceDomain: [],
    department: '',
    maturityLevel: '',
    description: '',
    file: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const documentTypes = [
    'Policy Document',
    'Technical Report',
    'Governance Framework',
    'Implementation Guidelines',
    'Audit Procedures',
    'Risk Assessment',
    'Compliance Checklist',
    'Best Practices Guide'
  ];

  const governanceDomains = [
    'Bias Mitigation',
    'Patient Consent',
    'FDA Engagement',
    'AI Model Interpretability',
    'AI Incident Reporting',
    'Data Privacy & Security',
    'Algorithm Validation',
    'Clinical Decision Support',
    'Risk Management',
    'Quality Assurance'
  ];

  const departments = [
    'Information Technology',
    'Clinical Informatics',
    'Quality & Safety',
    'Risk Management',
    'Compliance',
    'Legal Affairs',
    'Medical Affairs',
    'Research & Development'
  ];

  const maturityLevels = [
    'Draft',
    'Under Review',
    'Approved',
    'Implemented',
    'Under Revision'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDomainToggle = (domain) => {
    setFormData(prev => ({
      ...prev,
      governanceDomain: prev.governanceDomain.includes(domain)
        ? prev.governanceDomain.filter(d => d !== domain)
        : [...prev.governanceDomain, domain]
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          institutionName: '',
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          documentTitle: '',
          documentType: '',
          governanceDomain: [],
          department: '',
          maturityLevel: '',
          description: '',
          file: null
        });
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contribute to the Repository
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build the most comprehensive collection of AI governance standards by sharing your institution's policies and frameworks
          </p>
        </div>

        {/* Guidelines */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Submission Guidelines</h3>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• Documents should be related to AI governance in healthcare settings</li>
                <li>• Accepted formats: PDF, DOC, DOCX (maximum file size: 10MB)</li>
                <li>• All submissions undergo privacy review before publication</li>
                <li>• Sensitive information will be redacted to protect institutional privacy</li>
                <li>• You will receive confirmation within 48 hours of submission</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-green-900">Submission Successful!</h3>
                <p className="text-green-800">Thank you for your contribution. We'll review your submission and contact you within 48 hours.</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Institution Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-blue-600" />
                Institution Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Name *
                  </label>
                  <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Johns Hopkins Hospital"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@institution.org"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Document Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Document Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Document Title *
                  </label>
                  <input
                    type="text"
                    name="documentTitle"
                    value={formData.documentTitle}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., AI Bias Mitigation Framework for Clinical Decision Support"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Document Type *
                    </label>
                    <select
                      name="documentType"
                      value={formData.documentType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select type</option>
                      {documentTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Associated Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maturity Level *
                    </label>
                    <select
                      name="maturityLevel"
                      value={formData.maturityLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select maturity</option>
                      {maturityLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Provide a brief description of the document, its purpose, and key components..."
                  />
                </div>
              </div>
            </div>

            {/* Governance Domains */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Tag className="h-5 w-5 mr-2 text-blue-600" />
                Governance Domains
              </h2>
              <p className="text-sm text-gray-600 mb-4">Select all governance areas that apply to this document:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {governanceDomains.map(domain => (
                  <label key={domain} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.governanceDomain.includes(domain)}
                      onChange={() => handleDomainToggle(domain)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{domain}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* File Upload */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Upload className="h-5 w-5 mr-2 text-blue-600" />
                Document Upload
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors duration-200">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <div className="mb-4">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="text-blue-600 font-medium hover:text-blue-700">
                      Click to upload a file
                    </span>
                    <span className="text-gray-600"> or drag and drop</span>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                <p className="text-sm text-gray-500">PDF, DOC, or DOCX (max 10MB)</p>
                {formData.file && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      Selected: {formData.file.name}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 rounded-lg font-semibold text-center transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </span>
                ) : (
                  'Submit Document'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gray-100 rounded-xl p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens after submission?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Review Process</h4>
              <p className="text-sm text-gray-600">Our team reviews your submission for quality and relevance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Privacy Protection</h4>
              <p className="text-sm text-gray-600">Sensitive information is anonymized to protect institutional privacy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Upload className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Publication</h4>
              <p className="text-sm text-gray-600">Approved documents are added to the public repository</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributePage;