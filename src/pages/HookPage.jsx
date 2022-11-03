import React, { useReducer } from 'react';
import countReducer from '../reducers/count.reducer';
import { ACTIONS } from '../constants/constants';

function HookPage() {

    const [state, dispatch] = useReducer(countReducer, 0);

    handleIncrement= ()=>{
        dispatch({type: ACTIONS.INCREMENT});
    }

    handleDecrement= ()=>{
        dispatch({type: ACTIONS.DECREMENT});
    }

    handleReset= ()=>{
        dispatch({type: ACTIONS.RESET});
    }
  return (
    <>
        <div>{state}</div>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input onKeyUp={handleKeyUp} type="text" />
      </form>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default HookPage