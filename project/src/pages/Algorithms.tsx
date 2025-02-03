import React from 'react';
import { Code2, Cpu, Network, BarChart } from 'lucide-react';

const algorithms = [
  {
    title: 'Neural Image Analysis',
    icon: Network,
    description: 'Advanced convolutional neural networks analyze image patterns to detect manipulations at the pixel level.',
    accuracy: 99.8,
    features: [
      'Deep learning architecture',
      'Multi-layer pattern recognition',
      'Real-time processing capability'
    ]
  },
  {
    title: 'Font Consistency Detection',
    icon: Code2,
    description: 'Proprietary algorithms detect subtle inconsistencies in font rendering and character spacing.',
    accuracy: 99.5,
    features: [
      'Typography analysis',
      'Character spacing verification',
      'Font metadata validation'
    ]
  },
  {
    title: 'Metadata Verification',
    icon: Cpu,
    description: 'Comprehensive analysis of document metadata to identify unauthorized modifications.',
    accuracy: 99.9,
    features: [
      'EXIF data analysis',
      'Modification timestamp verification',
      'Software signature detection'
    ]
  },
  {
    title: 'Statistical Analysis',
    icon: BarChart,
    description: 'Advanced statistical models to identify anomalies in document structure and content.',
    accuracy: 99.7,
    features: [
      'Pattern recognition',
      'Anomaly detection',
      'Historical data comparison'
    ]
  }
];

function Algorithms() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Algorithms</h1>
        <p className="text-blue-300 max-w-2xl mx-auto">
          Powered by cutting-edge AI technology, our algorithms provide industry-leading accuracy in forgery detection.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {algorithms.map((algo, index) => (
          <div
            key={index}
            className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4 mb-6">
              <algo.icon className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold">{algo.title}</h3>
                <div className="flex items-center mt-1">
                  <div className="h-2 w-24 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-blue-400 rounded-full transition-all duration-1000"
                      style={{ width: `${algo.accuracy}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-blue-300">{algo.accuracy}% accuracy</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6">{algo.description}</p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-400">Key Features</h4>
              <ul className="space-y-2">
                {algo.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Algorithms;