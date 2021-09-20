# Three Functions

```javascript
// function declaration
function HelloWorld() {

  return createElement('h1', null, 'Hello, World!');

}

// function expression
const HelloWorld2 = function() {

  return createElement('h1', null, 'Hello, World!');

};

// arrow function
const HelloWorld3 = () => {
  return createElement('h1', null, 'Hello, World!');
};
```