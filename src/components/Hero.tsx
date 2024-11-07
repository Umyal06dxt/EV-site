import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16" id="hero">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
          alt="Electric Vehicle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 sm:py-48">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-8">
            <Zap className="h-6 w-6 text-blue-400" />
            <span className="text-blue-400 font-semibold">The Future of Transportation</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Drive the Future with Electric Vehicles
          </h1>
          
          <p className="text-xl text-gray-200 mb-8">
            Discover how electric vehicles are revolutionizing transportation while protecting our planet.
            Join the sustainable mobility movement today.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Explore EVs
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm">
              Calculate Savings
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;