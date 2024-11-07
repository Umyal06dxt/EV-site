import React from 'react';
import { Battery, Cpu, Zap, Gauge } from 'lucide-react';

const TechnologySection = () => {
  const components = [
    {
      icon: <Battery className="h-8 w-8" />,
      title: 'Advanced Battery',
      description: 'Latest lithium-ion technology offering extended range and faster charging capabilities.',
      specs: ['400+ mile range', '10-year warranty', 'Fast charging support']
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Electric Motor',
      description: 'High-efficiency motors delivering instant torque and smooth acceleration.',
      specs: ['95% efficiency', 'Regenerative braking', 'Dual motor option']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Charging System',
      description: 'Versatile charging options compatible with global charging networks.',
      specs: ['350kW DC charging', 'Home charging ready', 'Smart charging']
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: 'Smart Controls',
      description: 'Intelligent system management for optimal performance and efficiency.',
      specs: ['AI-powered', 'OTA updates', 'Energy optimization']
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="technology">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">EV Technology</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the cutting-edge technology powering the next generation of electric vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map((component, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">{component.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{component.title}</h3>
              <p className="text-gray-600 mb-4">{component.description}</p>
              <ul className="space-y-2">
                {component.specs.map((spec, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Evolution Timeline</h3>
              <p className="mb-6">
                From the first electric vehicles to today's advanced models, explore how EV technology
                has evolved over the years.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                View Timeline
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 text-sm">1890s</div>
                <div className="flex-1 bg-blue-500 rounded p-3">First Electric Vehicles</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 text-sm">1990s</div>
                <div className="flex-1 bg-blue-500 rounded p-3">Modern EV Renaissance</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 text-sm">2010s</div>
                <div className="flex-1 bg-blue-500 rounded p-3">Mass Market Adoption</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 text-sm">2020s</div>
                <div className="flex-1 bg-blue-500 rounded p-3">Advanced Technology Era</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;