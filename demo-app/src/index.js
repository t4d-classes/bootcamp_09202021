import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

// render(createElement(HelloWorld), document.querySelector('#root'));
render(<>
  <ColorTool />
  <CarTool />
</>, document.querySelector('#root'));




