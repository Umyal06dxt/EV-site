import React, { useState } from 'react';
import { Zap, Clock, Battery, MapPin, CreditCard, Settings } from 'lucide-react';

const ChargingSection = () => {
  const [activeTab, setActiveTab] = useState('locations');

  const chargingTypes = [
    {
      level: 'Level 1 (120V)',
      icon: <Battery className="h-6 w-6" />,
      rate: '2-5 miles per hour',
      bestFor: 'Home charging, overnight',
      time: '20-40 hours',
      cost: '$0-3 per charge'
    },
    {
      level: 'Level 2 (240V)',
      icon: <Battery className="h-6 w-6" />,
      rate: '25-30 miles per hour',
      bestFor: 'Home/Work charging',
      time: '4-10 hours',
      cost: '$10-20 per charge'
    },
    {
      level: 'DC Fast Charging',
      icon: <Zap className="h-6 w-6" />,
      rate: '3-20 miles per minute',
      bestFor: 'Road trips, quick charging',
      time: '15-45 minutes',
      cost: '$20-30 per charge'
    }
  ];

  const locations = [
    {
      name: 'Downtown Charging Hub',
      address: '123 Main St, City Center',
      available: 4,
      total: 6,
      type: 'DC Fast Charging',
      status: 'Available'
    },
    {
      name: 'Shopping Mall Station',
      address: '456 Market Ave',
      available: 2,
      total: 8,
      type: 'Level 2',
      status: 'Busy'
    },
    {
      name: 'Public Parking Garage',
      address: '789 Park Road',
      available: 6,
      total: 6,
      type: 'Level 2',
      status: 'Available'
    }
  ];

  return (
    <section className="py-16 bg-white" id="charging">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Charging Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about charging your electric vehicle.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveTab('locations')}
            className={`flex items-center px-6 py-3 rounded-lg ${
              activeTab === 'locations'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <MapPin className="h-5 w-5 mr-2" />
            Charging Locations
          </button>
          <button
            onClick={() => setActiveTab('types')}
            className={`flex items-center px-6 py-3 rounded-lg ${
              activeTab === 'types'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Settings className="h-5 w-5 mr-2" />
            Charging Types
          </button>
        </div>

        {activeTab === 'types' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chargingTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{type.level}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Zap className="h-5 w-5 mr-2" />
                    <span>{type.rate}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{type.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CreditCard className="h-5 w-5 mr-2" />
                    <span>{type.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {locations.map((location, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{location.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{location.address}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">{location.type}</span>
                    <span className={`px-2 py-1 rounded text-sm ${
                      location.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {location.status}
                    </span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-2 mb-2">
                    <div
                      className="bg-blue-600 rounded-full h-2"
                      style={{ width: `${(location.available / location.total) * 100}%` }}
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    {location.available} of {location.total} stations available
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChargingSection;