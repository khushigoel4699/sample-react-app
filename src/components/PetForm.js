import React, { useState, useEffect } from 'react';

const PetForm = ({ pet, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    color: '',
    weight: '',
    weightUnit: 'lbs',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  // Populate form with existing pet data when editing
  useEffect(() => {
    if (pet) {
      setFormData(pet);
    }
  }, [pet]);

  const petTypes = [
    'Dog', 'Cat', 'Bird', 'Fish', 'Rabbit', 
    'Hamster', 'Turtle', 'Snake', 'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Pet name is required';
    }

    if (!formData.type) {
      newErrors.type = 'Pet type is required';
    }

    if (!formData.breed.trim()) {
      newErrors.breed = 'Breed is required';
    }

    if (!formData.age || formData.age < 0 || formData.age > 50) {
      newErrors.age = 'Please enter a valid age (0-50)';
    }

    if (!formData.color.trim()) {
      newErrors.color = 'Color is required';
    }

    if (!formData.weight || formData.weight <= 0) {
      newErrors.weight = 'Please enter a valid weight';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave({
        ...formData,
        age: parseInt(formData.age),
        weight: parseFloat(formData.weight)
      });
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h2>{pet ? 'Edit Pet Profile' : 'Add New Pet'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Pet Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter pet's name"
            />
            {errors.name && <span style={{color: 'red', fontSize: '14px'}}>{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="type">Pet Type *</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Select pet type</option>
              {petTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.type && <span style={{color: 'red', fontSize: '14px'}}>{errors.type}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="breed">Breed *</label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Enter breed"
            />
            {errors.breed && <span style={{color: 'red', fontSize: '14px'}}>{errors.breed}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age (years) *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              min="0"
              max="50"
            />
            {errors.age && <span style={{color: 'red', fontSize: '14px'}}>{errors.age}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="color">Color *</label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Enter color/markings"
            />
            {errors.color && <span style={{color: 'red', fontSize: '14px'}}>{errors.color}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="weight">Weight *</label>
            <div style={{display: 'flex', gap: '10px'}}>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Enter weight"
                min="0.1"
                step="0.1"
                style={{flex: 1}}
              />
              <select
                name="weightUnit"
                value={formData.weightUnit}
                onChange={handleChange}
                style={{width: '80px'}}
              >
                <option value="lbs">lbs</option>
                <option value="kg">kg</option>
              </select>
            </div>
            {errors.weight && <span style={{color: 'red', fontSize: '14px'}}>{errors.weight}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes (Optional)</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any additional notes about your pet..."
              rows="3"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              {pet ? 'Update Pet' : 'Add Pet'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetForm;
