import React, { useState, useEffect } from 'react';
import PetCard from './components/PetCard';
import PetForm from './components/PetForm';

function App() {
  const [pets, setPets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPet, setEditingPet] = useState(null);

  // Load pets from localStorage on component mount
  useEffect(() => {
    const savedPets = localStorage.getItem('pets');
    if (savedPets) {
      setPets(JSON.parse(savedPets));
    }
  }, []);

  // Save pets to localStorage whenever pets array changes
  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify(pets));
  }, [pets]);

  const handleAddPet = () => {
    setEditingPet(null);
    setShowForm(true);
  };

  const handleEditPet = (pet) => {
    setEditingPet(pet);
    setShowForm(true);
  };

  const handleDeletePet = (petId) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      setPets(pets.filter(pet => pet.id !== petId));
    }
  };

  const handleSavePet = (petData) => {
    if (editingPet) {
      // Update existing pet
      setPets(pets.map(pet => 
        pet.id === editingPet.id 
          ? { ...petData, id: editingPet.id }
          : pet
      ));
    } else {
      // Add new pet
      const newPet = {
        ...petData,
        id: Date.now() // Simple ID generation
      };
      setPets([...pets, newPet]);
    }
    setShowForm(false);
    setEditingPet(null);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingPet(null);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🐾 Pet Profiles</h1>
        <p>Manage your beloved pets' information</p>
      </header>

      <button className="add-pet-button" onClick={handleAddPet}>
        ➕ Add New Pet
      </button>

      {pets.length === 0 ? (
        <div className="empty-state">
          <h3>No pets yet!</h3>
          <p>Click "Add New Pet" to create your first pet profile.</p>
        </div>
      ) : (
        <div className="pets-grid">
          {pets.map(pet => (
            <PetCard
              key={pet.id}
              pet={pet}
              onEdit={handleEditPet}
              onDelete={handleDeletePet}
            />
          ))}
        </div>
      )}

      {showForm && (
        <PetForm
          pet={editingPet}
          onSave={handleSavePet}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  );
}

export default App;
