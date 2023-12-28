import React from 'react';
import SelectComponent from './SelectComponent';
import { latestCar } from '../data/data';

function CarLeftSidebar({ onMakeFilterChange, onModelFilterChange, onFuelTypeFilterChange, onGearboxFilterChange }) {
  // Helper function to get unique values
  const getUniqueValues = (key) => {
    const allValues = latestCar.map((car) => car[key]);
    return [...new Set(allValues)].sort();
  };

  const makes = getUniqueValues('make');
  const carModels = getUniqueValues('carModel');
  const fuelTypes = getUniqueValues('fuelTypes');  // Adjust based on your data structure
  const gearboxes = getUniqueValues('gearbox');

  return (
    <div className="col-xl-4 order-xl-1 order-2">
      {/* ... other filter area content ... */}

      {/* Make Filter */}
      <div className="product-widget mb-20">
        <SelectComponent placeholder="Select Make" options={makes} onChange={(e) => onMakeFilterChange(e.target.value)} />
      </div>

      {/* Model Filter */}
      <div className="product-widget mb-20">
        <SelectComponent placeholder="Select Model" options={carModels} onChange={(e) => onModelFilterChange(e.target.value)} />
      </div>

      {/* Fuel Type Filter */}
      <div className="product-widget mb-20">
        {fuelTypes.map((fuelType, index) => (
          <label key={index}>
            <input type="checkbox" value={fuelType} onChange={(e) => onFuelTypeFilterChange(e.target.value)} />
            {fuelType}
          </label>
        ))}
      </div>

      {/* Gearbox Filter */}
      <div className="product-widget mb-20">
        <SelectComponent placeholder="Select Gearbox" options={gearboxes} onChange={(e) => onGearboxFilterChange(e.target.value)} />
      </div>

      {/* ... other static or dynamic filters ... */}
    </div>
  );
}

export default CarLeftSidebar;
