import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
    // {/* <StarRating
    //   max={5}
    //   color='#fcc419'
    //   size={24}
    // />
    // <StarRating
    //   max={10}
    //   color='blue'
    //   size={60}
    // />
    // <StarRating
    //   color='red'
    //   max={1}
    // /> */}
  // </React.StrictMode>
);
