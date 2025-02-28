import React from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div className="border p-4 rounded shadow-md text-center">
        <h2 className="text-lg font-bold">Counter</h2>
        <p className="text-xl">{count}</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    );
  };

  export default Counter;
