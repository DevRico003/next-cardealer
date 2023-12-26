

import React, { useReducer } from 'react';

// Reducer function to manage quantity state
function quantityReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { quantity: state.quantity + 1 };
    case 'DECREMENT':
      return { quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity };
    case 'SET':
      return { quantity: action.payload >= 1 ? action.payload : 1 };
    default:
      return state;
  }
}

function HandleQuantity() {
  // Create separate state and dispatch for each item
  const [state1, dispatch1] = useReducer(quantityReducer, { quantity: 1 });
  const [state2, dispatch2] = useReducer(quantityReducer, { quantity: 1 });

  const increment1 = () => {
    dispatch1({ type: 'INCREMENT' });
  };

  const decrement1 = () => {
    dispatch1({ type: 'DECREMENT' });
  };

  const handleInputChange1 = (e) => {
    const newValue = parseInt(e.target.value, 10);
    dispatch1({ type: 'SET', payload: newValue });
  };

  const increment2 = () => {
    dispatch2({ type: 'INCREMENT' });
  };

  const decrement2 = () => {
    dispatch2({ type: 'DECREMENT' });
  };

  const handleInputChange2 = (e) => {
    const newValue = parseInt(e.target.value, 10);
    dispatch2({ type: 'SET', payload: newValue });
  };

  return (
    <>
      <div className="quantity">
        <a className="quantity__minus" onClick={decrement1}>
          <span><i className="bi bi-dash" /></span>
        </a>
        <input
          name="quantity1"
          type="text"
          className="quantity__input"
          value={state1.quantity}
          onChange={handleInputChange1}
        />
        <a className="quantity__plus" onClick={increment1}>
          <span><i className="bi bi-plus" /></span>
        </a>
      </div>

    </>
  );
}

export default HandleQuantity;
