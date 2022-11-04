import {React, useReducer, useState, useEffect} from 'react';
import Button from '../components/button/Button.component';
import countReducer from '../reducers/count.reducer';
import { ACTIONS } from '../constants/constants';



function ReducePage() {
    const [state, dispatch] = useReducer(countReducer, 0);
    const [parsedNumber, setParsedNumber] = useState(0);


    useEffect(() => {
        // counterData.setValue(val);
        console.log('useEffect', state);
      }, [parsedNumber]);


    const handleIncrement = (e) => {
        e.preventDefault();
        dispatch({type:ACTIONS.INCREMENT});
    }

    const handleDecrement = (e) => {
        e.preventDefault();
        dispatch({type:ACTIONS.DECREMENT});
    }

    const handleReset = (e) => {
        e.preventDefault();
        dispatch({type:ACTIONS.reset});
    }

    const handleKeyUp = e => {
        try {
          const input = e.target.value;

          // create dispatch to store input value 
          // setInputValue(input);
          if (e.key === 'Enter') {
            // use input value from new reducer
            const num = parseInt(inputValue);
            if (!isNaN(num)) {
              setParsedNumber(num);
            } else {
              console.log('NOT A NUMBER');
            }
          }
        } catch (e) {
          console.log(e);
        }
      };
    
  return (
    <div>
      <div className="counterDisplay">{state}</div>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input onKeyUp={handleKeyUp} type="text" />
        <div>
          <Button handleClick={handleIncrement} child="Increment" />
          <Button handleClick={handleReset} child="Reset" />
          <Button handleClick={handleDecrement} child="Decrement" />
        </div>
      </form>
    </div>
  );
}

export default ReducePage;
