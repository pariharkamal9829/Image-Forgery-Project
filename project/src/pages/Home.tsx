import React, { useState, useCallback } from 'react';
import { Upload, FileWarning, CheckCircle, AlertCircle, ArrowRight, Shield, Zap, Lock } from 'lucide-react';
import ImageComparison from '../components/ImageComparison';

interface AnalysisResult {
  status: 'authentic' | 'suspicious' | null;
  confidence: number;
  details: {
    pixelManipulation: number;
    fontInconsistencies: number;
    metadata: {
      modified: boolean;
      lastModified: string;
    };
  };
}

function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files?.[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleFile = async (file: File) => {
    setFile(file);
    setAnalyzing(true);
    
    setTimeout(() => {
      setResult({
        status: Math.random() > 0.5 ? 'authentic' : 'suspicious',
        confidence: Math.random() * 100,
        details: {
          pixelManipulation: Math.random() * 100,
          fontInconsistencies: Math.random() * 100,
          metadata: {
            modified: Math.random() > 0.5,
            lastModified: new Date().toISOString()
          }
        }
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      {/* Hero Section */}
      <header className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          AI Forgery Detection
        </h1>
        <p className="text-blue-300 text-xl max-w-2xl mx-auto">
          Advanced document authenticity verification powered by cutting-edge AI technology.
          Detect manipulated images and documents with military-grade precision.
        </p>
      </header>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: Shield,
            title: "Military-Grade Security",
            description: "Using advanced encryption and secure processing pipelines to protect your sensitive documents."
          },
          {
            icon: Zap,
            title: "Real-Time Analysis",
            description: "Get instant results with our high-performance AI models optimized for speed and accuracy."
          },
          {
            icon: Lock,
            title: "Privacy First",
            description: "Your documents are processed locally and never stored on our servers, ensuring complete privacy."
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
          >
            <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Image Comparison Demo */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">See It In Action</h2>
        <ImageComparison />
      </div>

      {/* Upload Section */}
      <div className="max-w-3xl mx-auto">
        <div
          className={`border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
            isDragging
              ? 'border-blue-400 bg-blue-900/20'
              : 'border-gray-600 bg-gray-800/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="text-center space-y-4">
            <Upload className="w-16 h-16 mx-auto text-blue-400 animate-bounce" />
            <p className="text-xl">
              Drag & drop your file here or{' '}
              <label className="text-blue-400 cursor-pointer hover:text-blue-300">
                browse
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                  accept="image/*,.pdf,.doc,.docx"
                />
              </label>
            </p>
            <p className="text-gray-400">
              Supports images, PDFs, and documents up to 10MB
            </p>
          </div>
        </div>

        {analyzing && (
          <div className="mt-8 text-center">
            <div className="animate-pulse">
              <div className="h-2 bg-blue-400 rounded-full max-w-md mx-auto"></div>
              <p className="mt-4 text-blue-300">Analyzing document...</p>
            </div>
          </div>
        )}

        {result && (
          <div className="mt-8 bg-gray-800/50 rounded-xl p-6 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Analysis Results</h2>
              {result.status === 'authentic' ? (
                <CheckCircle className="w-8 h-8 text-green-400" />
              ) : (
                <FileWarning className="w-8 h-8 text-red-400" />
              )}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Status</span>
                <span className={result.status === 'authentic' ? 'text-green-400' : 'text-red-400'}>
                  {result.status === 'authentic' ? 'Authentic' : 'Suspicious'}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Confidence Score</span>
                  <span>{result.confidence.toFixed(1)}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-blue-400 rounded-full transition-all duration-1000"
                    style={{ width: `${result.confidence}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-colors">
                  <h3 className="text-sm text-gray-400 mb-2">Pixel Manipulation</h3>
                  <p className="text-xl">{result.details.pixelManipulation.toFixed(1)}%</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-colors">
                  <h3 className="text-sm text-gray-400 mb-2">Font Inconsistencies</h3>
                  <p className="text-xl">{result.details.fontInconsistencies.toFixed(1)}%</p>
                </div>
              </div>

              {result.details.metadata.modified && (
                <div className="flex items-center text-yellow-400">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>Metadata suggests modifications</span>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setFile(null);
                setResult(null);
              }}
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group"
            >
              Analyze Another Document
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;