// Read.js
import React from 'react';

const Read = ({ item }) => {
  return (
    <div>
      <p>ID: {item.id}</p>
      <p>Nom: {item.name}</p>
    </div>
  );
};

export default Read;
