import React from 'react';
import {Link} from 'react-router-dom';

function HomePage() {
  return (
    <section>
    <h1 className='heading-1 mb-20'>Select Implementation of your choice</h1>
        <div className='button-container'>
        <Link to={'hook/counter'}>
        <button>useCounter</button>
        </Link>
        <Link to={'usereducer/counter'}>
        <button>Reducer</button>
        </Link>
        </div>
    </section>
  )
}

export default HomePage