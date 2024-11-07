import React, { useState } from 'react';
import { Calculator, DollarSign, Leaf, Gauge } from 'lucide-react';

const CalculatorSection = () => {
  const [mileage, setMileage] = useState(12000);
  const [gasPrice, setGasPrice] = useState(3.5);
  const [mpg, setMpg] = useState(25);
  const [electricityRate, setElectricityRate] = useState(0.14);
  const [evEfficiency, setEvEfficiency] = useState(3.5); // miles per kWh

  const calculateSavings = () => {
    const annualGasCost = (mileage / mpg) * gasPrice;
    const annualElectricityCost = (mileage / evEfficiency) * electricityRate;
    const savings = annualGasCost - annualElectricityCost;
    const co2Reduction = (mileage / mpg) * 19.6; // 19.6 lbs CO2 per gallon

    return {
      annualSavings: savings.toFixed(2),
      monthlySavings: (savings / 12).toFixed(2),
      co2Reduction: co2Reduction.toFixed(0)
    };
  };

  const results = calculateSavings();

  return (
    <section className="py-16 bg-gray-50" id="calculator">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Savings Calculator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your potential savings by switching to an electric vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Input Your Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Mileage
                </label>
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  step="1000"
                  value={mileage}
                  onChange={(e) => setMileage(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right text-sm text-gray-600">{mileage.toLocaleString()} miles</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Gas Price ($/gallon)
                </label>
                <input
                  type="number"
                  value={gasPrice}
                  onChange={(e) => setGasPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Vehicle MPG
                </label>
                <input
                  type="number"
                  value={mpg}
                  onChange={(e) => setMpg(Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Electricity Rate ($/kWh)
                </label>
                <input
                  type="number"
                  value={electricityRate}
                  onChange={(e) => setElectricityRate(Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Your Potential Savings</h3>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Annual Savings</span>
                  <div className="flex items-center text-blue-600 text-2xl font-bold">
                    <DollarSign className="h-6 w-6 mr-1" />
                    {results.annualSavings}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Monthly Savings</span>
                  <div className="flex items-center text-blue-600 text-xl">
                    <DollarSign className="h-5 w-5 mr-1" />
                    {results.monthlySavings}
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">CO₂ Reduction</span>
                  <div className="flex items-center text-green-600 text-xl font-bold">
                    <Leaf className="h-5 w-5 mr-1" />
                    {results.co2Reduction} lbs/year
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Additional Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Gauge className="h-5 w-5 mr-2 text-blue-600" />
                    Lower maintenance costs
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Leaf className="h-5 w-5 mr-2 text-green-600" />
                    Reduced environmental impact
                  </li>
                  <li className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                    Potential tax incentives
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;