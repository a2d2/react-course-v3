import { nanoid } from 'nanoid';
import Form from './Form';
import { useState } from 'react';
const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() };
    setItems([...items, newItem]);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
    </section>
  );
};

export default App;
