import { useState } from 'react';

import { useCalcTool } from '../hooks/useCalcTool';

export const CalcTool = () => {

  const {
    result, history, errorMessage, counts,
    onAdd: add, onSubtract: subtract,
    onMultiply: multiply, onDivide: divide,
    onClear: clear, onDeleteHistoryEntry: deleteHistoryEntry
  }= useCalcTool();

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
      <table>
        <thead>
          <tr>
            <th>Add</th>
            <th>Subtract</th>
            <th>Multiply</th>
            <th>Divide</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{counts.ADD}</td>
            <td>{counts.SUBTRACT}</td>
            <td>{counts.MULTIPLY}</td>
            <td>{counts.DIVIDE}</td>
          </tr>
        </tbody>
      </table>
    </>
  );

};