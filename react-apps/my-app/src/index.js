import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from './AppClass';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          <AppClass msg="Hello, again!" />
        </div>
      </div>
    </div>
  </React.StrictMode>

);