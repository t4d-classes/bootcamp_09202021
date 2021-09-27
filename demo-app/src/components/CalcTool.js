import { useState } from 'react';

export const CalcTool = ({
  result, history, errorMessage,
  onAdd: add, onSubtract: subtract,
  onMultiply: multiply, onDivide: divide,
  onClear: clear, onDeleteHistoryEntry: deleteHistoryEntry }) => {

  const [ numInput, setNumInput ] = useState(0);

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <div>Result: {result}</div>
      <form>
        <label>Num Input: <input type="number" value={numInput}
          onChange={e => setNumInput(parseInt(e.target.value, 10))} /></label>
        <fieldset>
          <button type="button" onClick={() => add(numInput)}>+</button>
          <button type="button" onClick={() => subtract(numInput)}>-</button>
          <button type="button" onClick={() => multiply(numInput)}>*</button>
          <button type="button" onClick={() => divide(numInput)}>/</button>
          <button type="button" onClick={() => clear()}>Clear</button>
        </fieldset>
      </form>
      <ul>
        {history.map(entry => <li key={entry.id}>
          {entry.id} {entry.opName} {entry.opValue}
          <button type="button" onClick={() =>
            deleteHistoryEntry(entry.id)}>X</button>
        </li>)}
      </ul>
    </>
  );

};