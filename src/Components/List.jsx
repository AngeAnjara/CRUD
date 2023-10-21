// List.js
import React from 'react';

const List = ({ data, onDelete, onUpdate }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => onUpdate(item.id)}>Modifier</button>
          <button onClick={() => onDelete(item.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
