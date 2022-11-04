import React from 'react';
import {Link} from 'react-router-dom';

function HomePage() {
  return (
    <div>
        <Link to={'hook/counter'}>
        <button>useCounter</button>
        </Link>
        <Link to={'usereducer/counter'}>
        <button>Reducer</button>
        </Link>

    </div>
  )
}

export default HomePage