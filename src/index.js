import React from 'react';
import ReactDOM from 'react-dom';

const hello = "Hello yeeeeeeeeeeeeee."

function App() {
  return (
    <div>
      <p>{hello}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

