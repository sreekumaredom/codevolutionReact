import React, { useState, useMemo } from 'react';

const Counter: React.FC = () => {
  const [counterOne, setCounterOne] = useState<number>(0);
  const [counterTwo, setCounterTwo] = useState<number>(0);

  const incrementOne = () => {
    setCounterOne((prevCount) => prevCount + 1);
  };

  const incrementTwo = () => {
    setCounterTwo((prevCount) => prevCount + 1);
  };

  //Caches the result
  const isEven = useMemo<boolean>(() => {
    let i = 0;

    //EXPENSIVE OPERATION HAPPENING HERE
    while (i < 2000000000) {
      i++;
    }

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One : {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two : {counterTwo}</button>
      </div>
    </div>
  );
};

export default Counter;
