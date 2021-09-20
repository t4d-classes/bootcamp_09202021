import { createElement } from 'react';
import { render } from 'react-dom';

const HelloWorld = () => {
  // return createElement('h1', null, 'Hello, World!');
  return <h1>Hello, World!</h1>;
};

// render(createElement(HelloWorld), document.querySelector('#root'));
render(<HelloWorld />, document.querySelector('#root'));




