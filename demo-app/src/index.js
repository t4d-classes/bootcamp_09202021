import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'blue', hexcode: '0000ff' },
  { id: 2, name: 'red', hexcode: 'ff0000' },
  { id: 3, name: 'black', hexcode: '000000' },
  { id: 4, name: 'purple', hexcode: 'ff00ff' },
  { id: 5, name: 'white', hexcode: 'ffffff' },
  { id: 6, name: 'green', hexcode: '00ff00' }
];

const carList = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hybrid",
    year: 2021,
    color: "blue",
    price: 45000,
  },
  {
    id: 2,
    make: "Tesla",
    model: "S",
    year: 2019,
    color: "white",
    price: 120000,
  },
];


render(<>
  <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/color-tool">Color Tool</Link></li>
        <li><Link to="/car-tool">Car Tool</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact><h2>Home</h2></Route>
      <Route path="/color-tool"><ColorTool colors={colorList} /></Route>
      <Route path="/car-tool"><CarTool cars={carList} /></Route>
    </Switch>
  </Router>
</>, document.querySelector('#root'));




