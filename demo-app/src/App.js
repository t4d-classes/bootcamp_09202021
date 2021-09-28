import { Provider } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import { calcToolStore } from './stores/calcToolStore';
import { carToolStore } from './stores/carToolStore';
import { colorToolStore } from './stores/colorToolStore';

import { CalcTool } from './components/CalcTool';
import { ColorToolContainer } from './containers/ColorToolContainer';
import { CarTool } from './components/CarTool';

export function App() {
  return (
    <div className="container">
      <header id="page-header">
        <h1>The Tools</h1>
      </header>
      <nav id="menubar">
        <ul>
          <li className="menuitem"><Link to="/">Home</Link></li>
          <li className="menuitem"><Link to="/color-tool">Color Tool</Link></li>
          <li className="menuitem"><Link to="/car-tool">Car Tool</Link></li>
          <li className="menuitem"><Link to="/calc-tool">Calc Tool</Link></li>
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/" exact><h2>Home</h2></Route>
          <Route path="/color-tool">
            <Provider store={colorToolStore}>
              <ColorToolContainer />
            </Provider>
          </Route>
          <Route path="/car-tool">
            <Provider store={carToolStore}>
              <CarTool />
            </Provider>
          </Route>
          <Route path="/calc-tool">
            <Provider store={calcToolStore}>
              <CalcTool />
            </Provider>
          </Route>
        </Switch>
      </main>
      <aside id="sidebar">
        Sidebar
      </aside>
      <footer id="page-footer">
        <small>Footer</small>
      </footer>
    </div>
  );
}
