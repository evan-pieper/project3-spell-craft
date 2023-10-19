import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

<input type="file" name="image" accept="image/*" onChange={this.handleImageChange} />

{newCard.image && (
  <img
      src={URL.createObjectURL(newCard.image)}
      alt="Card Image"
      style={{ maxWidth: '100px' }}
  />
)}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
