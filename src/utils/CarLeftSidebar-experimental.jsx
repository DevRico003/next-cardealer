import React, { useState } from 'react';
import { latestCar } from '../data/data';

function CarLeftSidebarExp({ onMakeFilterChange, onModelFilterChange, onFuelTypeFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [fuelTypeFilter, setFuelTypeFilter] = useState([]);
  
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
    let newSelectedMakes;
    if (selectedMakes.includes(make)) {
      newSelectedMakes = selectedMakes.filter(selectedMake => selectedMake !== make);
    } else {
      newSelectedMakes = [...selectedMakes, make];
    }
  
    setSelectedMakes(newSelectedMakes);
  
    // If no makes are selected, reset the models filter
    if (newSelectedMakes.length === 0) {
      setSelectedModels([]);
      onModelFilterChange([]); // Assuming you have a function to update the parent component's model filter
    } else {
      // Optionally, filter the selected models based on the new makes selection
      // This ensures that only models corresponding to the selected makes are kept
      const newSelectedModels = selectedModels.filter(model =>
        newSelectedMakes.some(selectedMake =>
          latestCar.some(car => car.make === selectedMake && car.model === model)
        )
      );
  
      setSelectedModels(newSelectedModels);
      onModelFilterChange(newSelectedModels);
    }
  
    onMakeFilterChange(newSelectedMakes); // Update the make filter in the parent component
  };

  const handleModelCheckboxChange = (model) => {
    const newSelectedModels = selectedModels.includes(model)
      ? selectedModels.filter((m) => m !== model)
      : [...selectedModels, model];

    setSelectedModels(newSelectedModels);
    onModelFilterChange(newSelectedModels); // This should now work as expected
  };

  // Function to handle changes in fuel type selection
  const handleFuelTypeCheckboxChange = (fuelType) => {
    const newSelectedFuelTypes = fuelTypeFilter.includes(fuelType)
      ? fuelTypeFilter.filter(ft => ft !== fuelType)
      : [...fuelTypeFilter, fuelType];
  
    setFuelTypeFilter(newSelectedFuelTypes); // Update the local state
    onFuelTypeFilterChange(newSelectedFuelTypes); // Propagate changes to the parent component
  };

  // Function to get unique fuel types from the cars data
  const getUniqueFuelTypes = () => {
    // Map through each car, then through each car's fuelTypes, and flatten the results
    const allFuelTypes = latestCar.flatMap(car => 
      Array.isArray(car.fuelTypes) 
        ? car.fuelTypes.map(ft => ft.trim()) 
        : []
    );
    const uniqueFuelTypes = [...new Set(allFuelTypes)];  // Use a Set to filter out duplicates
    // Capitalize the first letter of each fuel type for display purposes
    return uniqueFuelTypes.map(fuelType => fuelType.charAt(0) + fuelType.slice(1)).sort();
  };
  
  

  const uniqueFuelTypes = getUniqueFuelTypes();

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

      {/* Fuel Type Section */}
      <div className="product-widget mb-20">
        <div className="check-box-item">
          <h6 className="product-widget-title mb-20">Fuel Type</h6>
          <div className="checkbox-container">
            <ul>
              {uniqueFuelTypes.map(fuelType => (
                <li key={fuelType}>
                  <label className="containerss">
                    <input
                      type="checkbox"
                      checked={fuelTypeFilter.includes(fuelType)}
                      onChange={() => handleFuelTypeCheckboxChange(fuelType)}
                    />
                    <span className="checkmark" />
                    <span className="text">{fuelType}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  
}

export default CarLeftSidebarExp;