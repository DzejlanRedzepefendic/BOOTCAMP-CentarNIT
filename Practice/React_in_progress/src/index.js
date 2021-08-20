import React from 'react';
import ReactDom from 'react-dom';

// const Greeting = () => {
//   return React.createElement('h1',{},'hello world');
// }

function Greeting() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}
ReactDom.render(<Greeting/>,document.getElementById('root'));