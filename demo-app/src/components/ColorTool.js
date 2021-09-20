import { useState } from 'react';

export const ColorTool = (props) => {

  const [
    colorForm, // state data
    setColorForm, // function to update the state data and re-render
  ] = useState({
    name: '', hexcode: '',
  } /* initial value of the state on the first render */);

  const change = e => {

    // set a new color form state object, and re-render
    setColorForm({
      // spread operator to copy the properties from the original color form to the new color form
      ...colorForm, 
      [ e.target.name ]: e.target.value,
      // name: e.target.value
    } /* new object literal, so we have a new object reference saying the state change */);

  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(color => <li key={color.id}>
          {color.name}</li>)}
      </ul>
      <form>
        <label>
          Color Name:
          <input type="text" name="name" value={colorForm.name} onChange={change} />
        </label>
        <label>
          Color Hexcode:
          <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </label>
        <button type="button">Add Color</button>
      </form>
    </>
  );


};