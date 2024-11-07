import React, { useState } from 'react';
import { Battery, Gauge, DollarSign } from 'lucide-react';

interface EVModel {
  name: string;
  type: string;
  range: number;
  acceleration: number;
  price: number;
  charging: string;
  image: string;
}

const ComparisonSection = () => {
  const models: EVModel[] = [
    {
      name: 'Model X',
      type: 'SUV',
      range: 348,
      acceleration: 3.8,
      price: 89990,
      charging: '250kW',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80'
    },
    {
      name: 'Model Y',
      type: 'Crossover',
      range: 330,
      acceleration: 4.8,
      price: 65990,
      charging: '250kW',
      image: 'https://images.unsplash.com/photo-1571987502227-9231b837d92a?auto=format&fit=crop&q=80'
    }
  ];

  const [selectedModels, setSelectedModels] = useState<EVModel[]>([models[0]]);

  const addModel = (model: EVModel) => {
    if (selectedModels.length < 3 && !selectedModels.includes(model)) {
      setSelectedModels([...selectedModels, model]);
    }
  };

  const removeModel = (model: EVModel) => {
    setSelectedModels(selectedModels.filter(m => m !== model));
  };

  return (
    <section className="py-16 bg-white" id="compare">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare EVs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare different electric vehicle models to find the perfect match for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold mb-4">Available Models</h3>
              <div className="space-y-4">
                {models.map((model) => (
                  <button
                    key={model.name}
                    onClick={() => addModel(model)}
                    disabled={selectedModels.includes(model)}
                    className={`w-full p-3 rounded-lg text-left transition-colors duration-200 ${
                      selectedModels.includes(model)
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    {model.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left">Features</th>
                    {selectedModels.map((model) => (
                      <th key={model.name} className="p-4 text-left min-w-[200px]">
                        <div className="flex justify-between items-center">
                          <span>{model.name}</span>
                          <button
                            onClick={() => removeModel(model)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            ×
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-t">
                      <div className="flex items-center">
                        <Battery className="w-5 h-5 mr-2 text-blue-600" />
                        Range
                      </div>
                    </td>
                    {selectedModels.map((model) => (
                      <td key={model.name} className="p-4 border-t">
                        {model.range} miles
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-t">
                      <div className="flex items-center">
                        <Gauge className="w-5 h-5 mr-2 text-blue-600" />
                        0-60 mph
                      </div>
                    </td>
                    {selectedModels.map((model) => (
                      <td key={model.name} className="p-4 border-t">
                        {model.acceleration}s
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-t">
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                        Starting Price
                      </div>
                    </td>
                    {selectedModels.map((model) => (
                      <td key={model.name} className="p-4 border-t">
                        ${model.price.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;