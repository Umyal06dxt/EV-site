import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Section: React.FC<SectionProps> = ({ icon, title, subtitle, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{subtitle}</p>
        
        <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

export default Section;