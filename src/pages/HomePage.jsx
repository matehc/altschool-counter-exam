import React from 'react';
import {Link} from 'react-router-dom';

function HomePage() {
  return (
    <section>
    <h2>Select Implementation of you choice</h2>
        <Link to={'hook/counter'}>
        <button>useCounter</button>
        </Link>
        <Link to={'usereducer/counter'}>
        <button>Reducer</button>
        </Link>
    </section>
  )
}

export default HomePage