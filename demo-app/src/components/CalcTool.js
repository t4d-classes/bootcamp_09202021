import { useState } from 'react';

export const CalcTool = ({ result, onAdd: add, onSubtract: subtract }) => {

  const [ numInput, setNumInput ] = useState(0);

  return (
    <>
      <div>Result: {result}</div>
      <form>
        <label>Num Input: <input type="number" value={numInput}
          onChange={e => setNumInput(parseInt(e.target.value, 10))} /></label>
        <fieldset>
          <button type="button" onClick={() => add(numInput)}>+</button>
          <button type="button" onClick={() => subtract(numInput)}>-</button>
        </fieldset>
      </form>
    </>
  );

};