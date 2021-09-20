

export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'blue', hexcode: '0000ff' }, // object literal
    { id: 2, name: 'red', hexcode: 'ff0000' },
    { id: 3, name: 'black', hexcode: '000000' },
    { id: 4, name: 'purple', hexcode: 'ff00ff' },
    { id: 5, name: 'white', hexcode: 'ffffff' },
    { id: 6, name: 'green', hexcode: '00ff00' }
  ] // array literal;

  // back in the 1980's...
  // const colorListItems = [];
  // for (let x=0; x<colors.length; x++) {
  //   colorListItems.push(<li key={colors[x].id}>{colors[x].name}</li>)
  // }

  // declarative approach
  // const colorListItems = [];
  // iterate over the items of an array and perform a side effect
  // colors.forEach(color => {
  //   colorListItems.push(<li key={color.id}>{color.name}</li>)
  // });

  // declarative, good semantic meaning, no side effect used
  // const colorListItems = colors.map(color => <li key={color.id}>{color.name}</li>);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color => <li key={color.id}>
          {color.name}</li>)}
      </ul>
    </>
  );


};