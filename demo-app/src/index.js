import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'blue', hexcode: '0000ff' }, // object literal
  { id: 2, name: 'red', hexcode: 'ff0000' },
  { id: 3, name: 'black', hexcode: '000000' },
  { id: 4, name: 'purple', hexcode: 'ff00ff' },
  { id: 5, name: 'white', hexcode: 'ffffff' },
  { id: 6, name: 'green', hexcode: '00ff00' }
] // array literal;

// render(createElement(HelloWorld), document.querySelector('#root'));
render(<>
  {/* createElement(ColorTool, { colors: colorList }) */}
  <ColorTool colors={colorList} />
  <CarTool />
</>, document.querySelector('#root'));




