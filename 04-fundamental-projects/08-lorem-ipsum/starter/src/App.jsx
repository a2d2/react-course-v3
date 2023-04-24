import { useState } from 'react';
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof count);
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>Lorem Ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">parrafos:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          steps="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generar
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}{' '}
      </article>
    </section>
  );
};
export default App;
