import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <section className="section-center">
      <h4>Lorem Ipsum</h4>
      <form className="lorem-form">
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
      </form>
    </section>
  );
};
export default App;
