import React, { useEffect, useState } from 'react';
import '../style/Counter.css'; // Import the CSS file for styling

const Counter = ({ endValue, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = () => {
      if (count < endValue) {
        setCount(prevCount => Math.min(prevCount + Math.ceil(endValue / 100), endValue)); // Increment towards the end value
      }
    };

    const interval = setInterval(increment, 50); // Adjust speed of counting
    return () => clearInterval(interval);
  }, [count, endValue]);

  return (
    <div className="counter">
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
};

export default Counter;
