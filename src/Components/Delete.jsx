// Delete.js
import React from 'react';

const Delete = ({ onDelete, item }) => {
  return (
    <div>
      <p>Voulez-vous vraiment supprimer {item.name} ?</p>
      <button onClick={() => onDelete(item.id)}>Oui</button>
    </div>
  );
};

export default Delete;
