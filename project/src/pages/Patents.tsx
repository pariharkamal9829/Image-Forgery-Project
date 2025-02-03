import React from 'react';
import { ScrollText, Award, CheckCircle } from 'lucide-react';

const patents = [
  {
    id: 'US10234567',
    title: 'Advanced Image Manipulation Detection Using Neural Networks',
    date: '2023',
    status: 'Granted',
    description: 'Revolutionary neural network architecture for detecting sophisticated image manipulations through multi-layer analysis.',
    inventors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez']
  },
  {
    id: 'US10234568',
    title: 'Real-time Document Forgery Detection System',
    date: '2023',
    status: 'Pending',
    description: 'High-performance system for real-time detection of document forgeries using advanced AI algorithms.',
    inventors: ['Dr. James Wilson', 'Dr. Emily Thompson']
  },
  {
    id: 'EP12345678',
    title: 'AI-Powered Font Consistency Analysis',
    date: '2022',
    status: 'Granted',
    description: 'Innovative method for detecting font inconsistencies in digital documents using machine learning.',
    inventors: ['Dr. Lisa Brown', 'Dr. David Kim']
  }
];

function Patents() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Patents</h1>
        <p className="text-blue-300 max-w-2xl mx-auto">
          Leading innovation in AI-powered forgery detection with our groundbreaking patents and technological advancements.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {patents.map((patent) => (
          <div
            key={patent.id}
            className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <ScrollText className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="flex items-center">
                {patent.status === 'Granted' ? (
                  <Award className="w-5 h-5 text-green-400 mr-2" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-2" />
                )}
                <span className={patent.status === 'Granted' ? 'text-green-400' : 'text-yellow-400'}>
                  {patent.status}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{patent.title}</h3>
              <p className="text-sm text-gray-400">Patent ID: {patent.id}</p>
              <p className="text-gray-300">{patent.description}</p>
              
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Inventors</h4>
                <div className="flex flex-wrap gap-2">
                  {patent.inventors.map((inventor, index) => (
                    <span
                      key={index}
                      className="text-sm bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
                    >
                      {inventor}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">Filed: {patent.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patents;