import React, { useState } from 'react';
import { latestCar } from '../data/data';

function CarLeftSidebarExp({ onMakeFilterChange, onModelFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  
  const getUniqueValues = (key) => {
    const allValues = latestCar.map((car) => car[key]);
    return [...new Set(allValues)].sort();
  };
  const makes = getUniqueValues('make');
  // const carModels = getUniqueValues('carModel');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (make) => {
    const newSelectedMakes = selectedMakes.includes(make)
      ? selectedMakes.filter((m) => m !== make)  // Remove if already selected
      : [...selectedMakes, make];  // Add if not selected

    setSelectedMakes(newSelectedMakes);
    onMakeFilterChange(newSelectedMakes);  // Propagate changes up to the parent component
  };

  const handleModelCheckboxChange = (model) => {
    const newSelectedModels = selectedModels.includes(model)
      ? selectedModels.filter((m) => m !== model)
      : [...selectedModels, model];

    setSelectedModels(newSelectedModels);
    onModelFilterChange(newSelectedModels); // This should now work as expected
  };

  const getRelevantModels = () => {
    // Get all cars that match the selected makes
    const relevantCars = latestCar.filter(car => selectedMakes.includes(car.make));
  
    // Extract unique models from these cars
    const models = relevantCars.map(car => car.carModel);
    return [...new Set(models)].sort();
  };
  
  const relevantModels = getRelevantModels();
  

  return (
    <div className="col-xl-4 order-xl-1 order-2">
      <div className="product-sidebar">
        {/* Make Section */}
        <div className="product-widget mb-20">
          <div className="check-box-item">
            <h6 className="product-widget-title mb-20">Marke</h6>
            <div className="checkbox-container">
              <div className="form-inner">
                <input
                  type="text"
                  placeholder="Nach Marke suchen"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <ul>
                {makes.filter(make => make.toLowerCase().includes(searchTerm.toLowerCase())).map(make => (
                  <li key={make}>
                    <label className="containerss">
                      <input
                        type="checkbox"
                        checked={selectedMakes.includes(make)}
                        onChange={() => handleCheckboxChange(make)}
                      />
                      <span className="checkmark" />
                      <span className="text">{make}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  
        {/* Model Section, displayed only if makes are selected */}
        {selectedMakes.length > 0 && (
          <div className="product-widget mb-20">
            <div className="check-box-item">
              <h6 className="product-widget-title mb-20">Modell</h6>
              <div className="checkbox-container">
                <ul>
                  {relevantModels.map(model => (
                    <li key={model}>
                      <label className="containerss">
                        <input
                          type="checkbox"
                          checked={selectedModels.includes(model)}
                          onChange={() => handleModelCheckboxChange(model)}
                        />
                        <span className="checkmark" />
                        <span className="text">{model}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default CarLeftSidebarExp;