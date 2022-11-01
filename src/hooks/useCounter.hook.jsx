
import { useState } from "react";
const useCounter = (initialState = 0) => {
    const [state, setState] = useState(initialState);
  
    const handleIncrement = () => setState( (prev) => prev + 1 );
    const handleDecrement = () => setState( (prev) => prev - 1 );
    const handleSetValue = (value) => setState(value);

    const bind = {
      setIncrement: handleIncrement,
      setDecrement: handleDecrement,
      setValue: handleSetValue,
    }
  
    return [
      state,
      bind,
    ];
  };

  export default useCounter;