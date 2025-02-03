import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    bio: 'Ph.D. in Computer Vision from MIT, leading our AI research team with over 15 years of experience in image processing.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah.chen@forgeguard.ai'
    }
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Lead AI Researcher',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300',
    bio: 'Former Google AI researcher with expertise in deep learning and neural networks. Published over 30 papers in top AI conferences.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'michael.rodriguez@forgeguard.ai'
    }
  },
  {
    name: 'Dr. Emily Thompson',
    role: 'Head of Product Development',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
    bio: 'Computer Science Ph.D. from Stanford, specializing in machine learning and document analysis systems.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emily.thompson@forgeguard.ai'
    }
  },
  {
    name: 'Dr. James Wilson',
    role: 'Senior AI Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300',
    bio: 'Expert in computer vision and machine learning, with previous experience at Apple and Microsoft Research.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'james.wilson@forgeguard.ai'
    }
  }
];

function Team() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-blue-300 max-w-2xl mx-auto">
          Meet our world-class team of researchers and engineers pushing the boundaries of AI-powered forgery detection.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
          >
            <div className="relative mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-lg"></div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-400">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.bio}</p>

              <div className="pt-4 flex space-x-4">
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;