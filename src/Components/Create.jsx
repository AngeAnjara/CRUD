// Create.js
import React, { useState } from 'react';

const Create = ({ onCreate }) => {
  const [name, setName] = useState('');

  const handleCreate = () => {
    onCreate({ id: new Date().getTime(), name });
    setName('');
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleCreate}>Ajouter</button>
    </div>
  );
};

export default Create;
