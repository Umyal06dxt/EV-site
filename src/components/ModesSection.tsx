import React from 'react';
import { Battery, Leaf, Gauge, Shield } from 'lucide-react';

const ModesSection = () => {
  const evTypes = [
    {
      title: 'Battery Electric Vehicle (BEV)',
      icon: <Battery className="h-8 w-8" />,
      description: 'Pure electric vehicles powered solely by rechargeable batteries.',
      benefits: ['Zero emissions', 'Lower maintenance costs', 'Quiet operation'],
      range: '250-400+ miles',
      chargingTime: '15-45 minutes (DC fast charging)',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
    },
    {
      title: 'Plug-in Hybrid (PHEV)',
      icon: <Leaf className="h-8 w-8" />,
      description: 'Combines electric motor with gas engine for extended range.',
      benefits: ['Flexible fuel options', 'Extended range', 'Lower emissions'],
      range: '30-50 miles (electric) + 300-500 miles (hybrid)',
      chargingTime: '2-6 hours (Level 2)',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80'
    },
    {
      title: 'Fuel Cell (FCEV)',
      icon: <Gauge className="h-8 w-8" />,
      description: 'Electric vehicles powered by hydrogen fuel cells.',
      benefits: ['Quick refueling', 'Long range', 'Water emissions only'],
      range: '300-400 miles',
      chargingTime: '5 minutes (hydrogen refueling)',
      image: 'https://images.unsplash.com/photo-1620481679288-0c343e1eb3d1?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="modes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Electric Vehicles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore different types of electric vehicles and find the perfect match for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {evTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                  {type.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-blue-900 mb-2">Key Benefits</div>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-blue-700">
                          <Shield className="h-4 w-4 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Range</div>
                      <div className="font-semibold">{type.range}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Charging</div>
                      <div className="font-semibold">{type.chargingTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModesSection;