import React from 'react';
import { Linkedin, Github, Award, Users, Code, Database, Brain } from 'lucide-react';

const TeamPage = () => {
  const mentors = [
     {
      name: 'Dr. Ravi Bharat Parikh',
      role:[ 'Project Director/Sponsor'],
      avatar: '/images/team/ravi_headshot.jpg',
      linkedin: 'https://www.linkedin.com/in/ravibparikh/'
    },
    {
      name: 'Dr. Ashley Lynn Eadie',
      role: 'Project Director',
      avatar: '/images/team/ashley_headshot.jpg',
      linkedin: 'https://www.linkedin.com/in/ashley-eadie-phd-1360618b/'
    }
  ];

  const students = [
    {
      name: 'Mufidah Abdulkadir',
      role: 'Data Collection/ Web Design',
      avatar: '/images/team/mufidah_headshot.jpeg',
      skills: ['Graphic Design', 'Neuroscience', 'Data Analysis', 'Data Visualization', 'Microsoft Excel', 'Research'],
      github: 'https://github.com/mufidaha',
      linkedin: 'https://www.linkedin.com/in/mufidahabdulkadir'
    },
    {
      name: 'Sara Baji',
      role: 'NLP Analyst',
      avatar: '/images/team/sara_headshot.png',
      skills: ['SAS', 'R', 'Python', 'Data Visualization', 'Statistical Analysis', 'Epidemiological Methods'],
      github: 'https://github.com/sarambaji',
      linkedin: 'https://www.linkedin.com/in/sarabaji'
    },
    {
      name: 'Rebekah Gerrick',
      role: 'Data Collection/ Web Design',
      avatar: '/images/team/rebekah_headshot.jpeg',
      skills: ['Graphic Design', 'Data preprosing and cleaning', 'Research Design', 'Visualization', 'Data Analysis'],
      github: 'https://github.com/rgerrick',
      linkedin: 'https://www.linkedin.com/in/rgerrick1/'
    },
    {
      name: 'Steven Hu',
      role: 'Web Design',
      avatar: '/images/team/steven_headshot.jpg',
      skills: ['Web Building','Graphic Design','Data Analysis','Python','Data Visualization','Data Analysis'],
      github: 'https://github.com/stevenhu913',
      linkedin: 'https://www.linkedin.com/in/stevenhu2027/'
    },
    {
      name: 'Minjoo Kim',
      role: 'NLP Analyst',
      avatar: '/images/team/minjoo_headshot.jpeg',
      skills: ['Machine Leaning & Predictive Modeling', 'Statistical Analysis', 'Deep Learning & Video-Based Motion Analysis', 'Data Wrangling & Cleaning', 'Data Visualization and Dashboarding', 'Natural Language Processing'],
      github: 'https://github.com/Minjoo22',
      linkedin: 'https://www.linkedin.com/in/minjoo-kimm'
    },
    {
      name: 'Winnie Lau',
      role: 'NLP Analyst',
      avatar: '/images/team/winnie_headshot.jpg',
      skills: ['Prompt Engineering', 'Predidictive Modeling', 'Sentiment Analysis', 'Data Visualization', 'Neuroscience', 'Linguistics'],
      github: 'https://github.com/winn-lau',
      linkedin: 'https://www.linkedin.com/in/winnie-s-lau'
    },
    {
      name: 'Christopher McCoy',
      role: 'Project Leader',
      avatar: '/images/team/chris_headshot.jpg',
      skills: ['Python', 'Front-end Building', 'Leadership', 'Prompt Engineering', 'Data Wrangling & Cleaning', 'Microsoft Office Suit'],
      github: 'https://github.com/chris10935',
      linkedin: 'https://www.linkedin.com/in/christopher-mccoy-0527a0198/'
    },
    {
      name: 'Abha Namjoshi',
      role: 'NLP Analyst',
      avatar: '/images/team/abha_headshot.JPG',
      skills: ['Python', 'R', 'SAS', 'Machine Learning', 'Clinical and Public Health Proficiency', 'Statistical Analysis'],
      github: 'https://github.com/mariagarcia',
      linkedin: 'https://www.linkedin.com/in/abha-namjoshi/'
    },
    {
      name: 'Claire Park',
      role: 'Data Collection',
      avatar: '/images/team/uknown_headshot.png',
      skills: ['Data Collection', 'Data Analysis', 'Research Design', 'Data Visualization'],
      github: 'https://github.com/mariagarcia',
      linkedin: 'https://www.linkedin.com/in/claire-park/'
    },
    {
      name: 'Joseph Van Duyn',
      role: 'NLP Analyst',
      avatar: '/images/team/joesph_headshot.jpeg',
      skills: ['Data Analysis', 'Python', 'Machine Learning', 'Neural Networks', 'Artificial Intelligence', 'Problem Solving'],
      github: 'https://github.com/jvanduyn1',
      linkedin: 'https://www.linkedin.com/in/joseph-van-duyn-8562862b1'
    },
    {
      name: 'Lynne Zheng',
      role: 'Web Design',
      avatar: '/images/team/lynne_headshot.JPEG',
      skills: ['Front-end Building', 'Web Project Collaboration & Git', 'Prototying to Deployment Workflow', 'AI Data Integration', 'Prompt Engineering', 'Graphic Design'],
      github: 'https://github.com/iiuh43',
      linkedin: 'https://www.linkedin.com/in/lynne-zheng-9b0296301/'
    }
  ];

  const getRoleIcon = (role) => {
    if (role.includes('Data')) return Database;
    if (role.includes('NLP') || role.includes('Analyst')) return Brain;
    if (role.includes('Web') || role.includes('Development')) return Code;
    if (role.includes('UX') || role.includes('UI')) return Award;
    return Users;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated researchers, developers, and advisors working to revolutionize AI governance in healthcare
          </p>
        </div>

        {/* Mentors Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty Mentors & Advisors</h2>
            <p className="text-lg text-gray-600">
              Expert guidance from leading researchers in healthcare AI and policy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-200">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={mentor.avatar} 
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/150x150/6366f1/ffffff?text=' + mentor.name.split(' ').map(n => n[0]).join('');
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{mentor.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{mentor.role}</p>
                <p className="text-sm text-gray-600 mb-4">{mentor.department}</p>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">{mentor.bio}</p>
                <div className="flex justify-center space-x-2 pt-2">
                  {mentor.linkedin && (
                    <a
                      href={mentor.linkedin}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Contributors</h2>
            <p className="text-lg text-gray-600">
              Talented students from leading universities driving innovation and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student, index) => {
              const RoleIcon = getRoleIcon(student.role);
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 mr-4 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img 
                        src={student.avatar} 
                        alt={student.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/150x150/6366f1/ffffff?text=' + student.name.split(' ').map(n => n[0]).join('');
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                      <div className="flex items-center space-x-2">
                        <RoleIcon className="h-4 w-4 text-blue-600" />
                        <p className="text-blue-600 font-medium text-sm">{student.role}</p>
                      </div>
                      <p className="text-xs text-gray-600">{student.department}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {student.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4 border-t border-gray-100">
                    <a
                      href={student.linkedin || "https://linkedin.com"}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    {student.github && (
                      <a
                        href={student.github}
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 bg-blue-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Joining Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students and researchers to contribute to this important work
          </p>
          <a
            href="https://www.linkedin.com/company/haclab-emory/"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Linkedin className="h-5 w-5" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;