import React from 'react';

function CounterInputBox() {
  return (
    <div>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input onKeyUp={handleKeyUp} type="text" />
        <div>
          <Button handleClick={counterData.setIncrement} child="Increment" />
          <Button handleClick={counterData.reset} child="Reset" />
          <Button handleClick={counterData.setDecrement} child="Decrement" />
        </div>
      </form>
    </div>
  );
}

export default CounterInputBox;
