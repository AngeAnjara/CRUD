// Update.js
import React, { useState } from 'react';

const Update = ({ onUpdate, item }) => {
  const [name, setName] = useState(item.name);

  const handleUpdate = () => {
    onUpdate({ ...item, name });
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleUpdate}>Mettre à jour</button>
    </div>
  );
};

export default Update;
