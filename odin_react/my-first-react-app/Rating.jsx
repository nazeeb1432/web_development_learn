// Rating.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS

const Rating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => (
        <i
          key={index}
          className={`fa-star ${index < rating ? 'fas' : 'far'}`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;
