import React from 'react';
import { Target, Users, BookOpen, Award, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Document Collection & Analysis',
      description: 'Comprehensive gathering of AI governance documents from healthcare institutions across the United States.',
      status: 'completed',
      details: [
        'Collected 500+ governance documents from 50+ institutions',
        'Categorized standards by governance domain and maturity level',
        'Established partnerships with major healthcare systems'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'NLP Processing & Categorization',
      description: 'Advanced natural language processing to analyze, categorize, and extract key insights from governance documents.',
      status: 'completed',
      details: [
        'Implemented state-of-the-art NLP models for document analysis',
        'Created standardized taxonomy for governance categories',
        'Developed semantic search capabilities'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Platform Development',
      description: 'Building the comprehensive web platform with interactive features and user-friendly interfaces.',
      status: 'current',
      details: [
        'Interactive U.S. map with state-level data visualization',
        'Advanced search with intelligent filtering',
        'Mobile-responsive design for all stakeholders'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Launch & Community Engagement',
      description: 'Platform launch with ongoing community engagement and continuous improvement.',
      status: 'upcoming',
      details: [
        'Public launch with stakeholder training',
        'Community contribution portal activation',
        'Feedback integration and platform optimization'
      ]
    }
  ];

  const collaborators = [
    {
      name: 'HACLab',
      role: 'Healthcare AI Collaborative Laboratory',
      description: 'Leading research in healthcare AI governance and policy development',
      logo: '🏥'
    },
    {
      name: 'Emory University',
      role: 'Academic Research Partner',
      description: 'Providing research expertise and student development opportunities',
      logo: '🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the AI Governance Standards Repository
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Standardizing and improving AI governance to ensure ethical, equitable, and safe clinical AI use across American healthcare systems.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The AI Governance Standards Repository represents America's first comprehensive initiative to systematically collect, 
            analyze, and disseminate AI governance standards across healthcare institutions. Our mission is to create a 
            centralized resource that enables policymakers, researchers, and clinical administrators to access, understand, 
            and implement best practices in healthcare AI governance.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            By providing easy access to governance frameworks organized by region and topic, we aim to accelerate the 
            adoption of ethical, safe, and equitable AI practices in clinical settings nationwide.
          </p>
        </div>

        {/* Project Phases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Phases</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-6 ${
                    phase.status === 'completed' ? 'bg-green-500' :
                    phase.status === 'current' ? 'bg-blue-500' :
                    'bg-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mr-3">{phase.phase}: {phase.title}</h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                        phase.status === 'current' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {phase.status === 'completed' ? 'Completed' :
                         phase.status === 'current' ? 'In Progress' :
                         'Upcoming'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborators */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Stakeholder Collaborators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborators.map((collaborator, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{collaborator.logo}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{collaborator.name}</h3>
                    <p className="text-sm font-medium text-blue-600 mb-2">{collaborator.role}</p>
                    <p className="text-gray-600">{collaborator.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact and Goals */}
        <div className="bg-blue-900 text-white rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Expected Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Creating a foundation for standardized, ethical AI governance across American healthcare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6 mb-4">
                <Users className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-blue-200">Healthcare Institutions</div>
              </div>
              <p className="text-blue-100 text-sm">
                Providing governance standards and best practices to institutions nationwide
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6 mb-4">
                <BookOpen className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-blue-200">Governance Documents</div>
              </div>
              <p className="text-blue-100 text-sm">
                Comprehensive repository of AI governance policies and frameworks
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6 mb-4">
                <Award className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50</div>
                <div className="text-blue-200">States Covered</div>
              </div>
              <p className="text-blue-100 text-sm">
                National coverage ensuring comprehensive regional representation
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Help us build the most comprehensive repository of AI governance standards for healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contribute"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Contribute Standards</span>
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="/team"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Meet the Team</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;