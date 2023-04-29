import { useState } from 'react';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Actividades</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          <h3>+</h3>
        </button>
      </div>
    </form>
  );
};
export default Form;
