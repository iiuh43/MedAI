import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Map, Search, Upload, Shield, Users, FileText, Target } from 'lucide-react';

const LandingPage = () => {
  const milestones = [
    {
      icon: FileText,
      title: 'Document Collection',
      description: 'Gathering AI governance standards from healthcare institutions nationwide',
      status: 'completed'
    },
    {
      icon: Search,
      title: 'NLP Analysis',
      description: 'Advanced natural language processing to categorize and analyze standards',
      status: 'completed'
    },
    {
      icon: Shield,
      title: 'Repository Development',
      description: 'Building comprehensive database and search infrastructure',
      status: 'current'
    },
    {
      icon: Target,
      title: 'Prototype Delivery',
      description: 'Interactive platform launch with full functionality',
      status: 'upcoming'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              America's First Comprehensive Repository for
              <span className="text-blue-200 block mt-2">Healthcare AI Governance Standards</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Standardizing and improving AI governance to ensure ethical, equitable, and safe clinical AI use across the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/map"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <Map className="h-5 w-5" />
                <span>Explore Map</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/search"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <Search className="h-5 w-5" />
                <span>Search Standards</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contribute"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <Upload className="h-5 w-5" />
                <span>Contribute a Policy</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Milestones</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial document collection to comprehensive prototype delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className="relative">
                  <div className={`p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                    milestone.status === 'completed' 
                      ? 'bg-green-50 border-green-200 hover:border-green-300'
                      : milestone.status === 'current'
                      ? 'bg-blue-50 border-blue-200 hover:border-blue-300'
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      milestone.status === 'completed'
                        ? 'bg-green-100 text-green-600'
                        : milestone.status === 'current'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-3 ${
                      milestone.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : milestone.status === 'current'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {milestone.status === 'completed' ? 'Completed' : 
                       milestone.status === 'current' ? 'In Progress' : 'Upcoming'}
                    </div>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2 z-10"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools for policymakers, researchers, and clinical administrators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Map className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive U.S. Map</h3>
              <p className="text-gray-600 mb-4">
                Explore AI governance standards by state and region with advanced filtering by health system type and governance focus areas.
              </p>
              <Link to="/map" className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                <span>Explore Map</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Search</h3>
              <p className="text-gray-600 mb-4">
                NLP-enhanced search with intelligent keyword suggestions and comprehensive filtering by category, date, and maturity level.
              </p>
              <Link to="/search" className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                <span>Search Standards</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Platform</h3>
              <p className="text-gray-600 mb-4">
                Contribute to the repository by uploading governance documents and collaborating with healthcare institutions nationwide.
              </p>
              <Link to="/contribute" className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                <span>Get Involved</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Future of Healthcare AI Governance
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Help us build the most comprehensive repository of AI governance standards to ensure safe, ethical, and equitable AI deployment in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/team"
              className="border-2 border-blue-400 text-blue-100 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-blue-900 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Meet the Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;