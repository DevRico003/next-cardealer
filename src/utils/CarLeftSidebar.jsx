import React, { useState, useEffect, useMemo } from 'react';

function CarLeftSidebar({ onMakeFilterChange, onModelFilterChange, onFuelTypeFilterChange, onGearboxFilterChange, displayedMakes }) {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [fuelTypeFilter, setFuelTypeFilter] = useState([]);
  const [selectedGearboxes, setSelectedGearboxes] = useState([]);
  
  useEffect(() => {
    console.log('Fetching cars...');
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Cars fetched:', data);
        setCars(data);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      }
    };
  
    fetchCars();
  }, []);
  
  // useMemo to calculate unique values only when 'cars' changes
  const getUniqueValues = useMemo(() => {
    return (key) => {
      const allValues = cars.map((car) => car[key]);
      return [...new Set(allValues)].sort();
    };
  }, [cars]); 

  // Verwenden Sie `displayedMakes` für die Anzeige der Marken
  const makesToShow = useMemo(() => {
    return displayedMakes || getUniqueValues('make');
  }, [displayedMakes, getUniqueValues]);

  // Handler functions for changes in filters
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (make) => {
    let newSelectedMakes;
    if (selectedMakes.includes(make)) {
      // If the make is already selected, remove it from the array
      newSelectedMakes = selectedMakes.filter(selectedMake => selectedMake !== make);
    } else {
      // If the make isn't selected, add it to the array
      newSelectedMakes = [...selectedMakes, make];
    }
  
    setSelectedMakes(newSelectedMakes); // Update the state
  
    // Reset models if no makes are selected
    if (newSelectedMakes.length === 0) {
      setSelectedModels([]);
      onModelFilterChange([]);
    } else {
      // Filter the selected models based on the new selected makes
      const newSelectedModels = selectedModels.filter(model =>
        newSelectedMakes.some(selectedMake =>
          cars.some(car => car.make === selectedMake && car.model === model)
        )
      );
  
      setSelectedModels(newSelectedModels);
      onModelFilterChange(newSelectedModels);
    }
  
    onMakeFilterChange(newSelectedMakes); // Notify parent component of the change
  };
  

  const handleModelCheckboxChange = (model) => {
    const newSelectedModels = selectedModels.includes(model)
      ? selectedModels.filter((m) => m !== model)
      : [...selectedModels, model];

    setSelectedModels(newSelectedModels);
    onModelFilterChange(newSelectedModels);
  };

  const handleFuelTypeCheckboxChange = (fuelType) => {
    const newSelectedFuelTypes = fuelTypeFilter.includes(fuelType)
      ? fuelTypeFilter.filter(ft => ft !== fuelType)
      : [...fuelTypeFilter, fuelType];
  
    setFuelTypeFilter(newSelectedFuelTypes);
    onFuelTypeFilterChange(newSelectedFuelTypes);
  };

  // useMemo to calculate unique fuel types only when 'cars' changes
  const uniqueFuelTypes = useMemo(() => {
    const allFuelTypes = cars.flatMap(car => 
      Array.isArray(car.fuelTypes) ? car.fuelTypes.map(ft => ft.trim()) : []
    );
    return [...new Set(allFuelTypes)].map(fuelType => fuelType.charAt(0).toUpperCase() + fuelType.slice(1)).sort();
  }, [cars]);

  // useMemo to calculate unique gearboxes only when 'cars' changes
  const uniqueGearboxes = useMemo(() => {
    const allGearboxes = cars.map(car => car.gearbox);
    return [...new Set(allGearboxes)].sort();
  }, [cars]);

  // useMemo to get relevant models based on selected makes
  const relevantModels = useMemo(() => {
    const relevantCars = cars.filter(car => selectedMakes.includes(car.make));
    const models = relevantCars.map(car => car.carModel);
    return [...new Set(models)].sort();
  }, [cars, selectedMakes]);

  const handleGearboxCheckboxChange = (gearbox) => {
    const newSelectedGearboxes = selectedGearboxes.includes(gearbox)
      ? selectedGearboxes.filter(gb => gb !== gearbox)
      : [...selectedGearboxes, gearbox];

    setSelectedGearboxes(newSelectedGearboxes);
    onGearboxFilterChange(newSelectedGearboxes);
  };

 // Calculate `makes` using `getUniqueValues`
 const makes = getUniqueValues('make');

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
            {makesToShow.filter(make => make.toLowerCase().includes(searchTerm.toLowerCase())).map(make => (
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
          <h6 className="product-widget-title mb-20">Kraftstoff</h6>
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
      {/* Gearbox Section */}
<div className="product-widget mb-20">
  <div className="check-box-item">
    <h6 className="product-widget-title mb-20">Getriebe</h6>
    <div className="checkbox-container">
      <ul>
        {uniqueGearboxes.map(gearbox => (
          <li key={gearbox}>
            <label className="containerss">
              <input
                type="checkbox"
                checked={selectedGearboxes.includes(gearbox)}
                onChange={() => handleGearboxCheckboxChange(gearbox)}
              />
              <span className="checkmark" />
              <span className="text">{gearbox}</span>
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

export default CarLeftSidebar;