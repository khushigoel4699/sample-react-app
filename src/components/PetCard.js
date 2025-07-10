import React from 'react';

const PetCard = ({ pet, onEdit, onDelete }) => {
  const getAgeDisplay = (age) => {
    if (age === 1) return '1 year old';
    return `${age} years old`;
  };

  const getPetEmoji = (type) => {
    switch (type.toLowerCase()) {
      case 'dog': return '🐕';
      case 'cat': return '🐱';
      case 'bird': return '🐦';
      case 'fish': return '🐠';
      case 'rabbit': return '🐰';
      case 'hamster': return '🐹';
      case 'turtle': return '🐢';
      case 'snake': return '🐍';
      default: return '🐾';
    }
  };

  return (
    <div className="pet-card">
      <h3>
        {getPetEmoji(pet.type)} {pet.name}
      </h3>
      
      <div className="pet-info">
        <p><strong>Type:</strong> {pet.type}</p>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Age:</strong> {getAgeDisplay(pet.age)}</p>
        <p><strong>Color:</strong> {pet.color}</p>
        <p><strong>Weight:</strong> {pet.weight} {pet.weightUnit}</p>
        {pet.notes && (
          <p><strong>Notes:</strong> {pet.notes}</p>
        )}
      </div>

      <div className="pet-actions">
        <button 
          className="edit-button"
          onClick={() => onEdit(pet)}
        >
          ✏️ Edit
        </button>
        <button 
          className="delete-button"
          onClick={() => onDelete(pet.id)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default PetCard;
