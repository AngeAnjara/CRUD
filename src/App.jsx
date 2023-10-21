
import React, { useState } from 'react';
import List from './components/List';
import Create from './components/Create';
import Update from './Components/Update';
import Delete from './components/Delete';
import Read from './components/Read';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCreate = newItem => {
    setData([...data, newItem]);
  };

  const handleUpdate = updatedItem => {
    const updatedData = data.map(item => (item.id === updatedItem.id ? updatedItem : item));
    setData(updatedData);
    setSelectedItem(null);
  };

  const handleDelete = itemId => {
    const updatedData = data.filter(item => item.id !== itemId);
    setData(updatedData);
    setSelectedItem(null);
  };

  return (
    <div>
      <h1>Application CRUD en React</h1>

      <List data={data} onDelete={handleDelete} onUpdate={itemId => setSelectedItem(itemId)} />

      {selectedItem !== null && (
        <div>
          <Read item={data.find(item => item.id === selectedItem)} />
          <Update item={data.find(item => item.id === selectedItem)} onUpdate={handleUpdate} />
          <Delete item={data.find(item => item.id === selectedItem)} onDelete={handleDelete} />
        </div>
      )}

      <Create onCreate={handleCreate} />
    </div>
  );
};

export default App;
