import { useState } from 'react';

const Form = () => {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <section className="container">
      <h4>Generador de Color</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#91CB3E"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Solicitar
        </button>
      </form>
    </section>
  );
};
export default Form;
