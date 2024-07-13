import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          <HelloWorld msg="Hello, again!" />
        </div>
      </div>
    </div>
  </React.StrictMode>

);