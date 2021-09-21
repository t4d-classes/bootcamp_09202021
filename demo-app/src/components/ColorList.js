export const ColorList = (props) => {

  return (
    <ul>
      {props.colors.map(color => <li key={color.id}>
        {color.name}</li>)}
    </ul>
  );

};