import React from 'react';
import { Link } from 'react-router-dom';



// eslint-disable-next-line
const abc = () => {
	return (
    <div>
      Im some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default abc;
