import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';

function sharedNavLayout() {
  return (
    <div>
       <nav>
       <NavLink to={'/'}>
          <button>Home</button>
        </NavLink>
        <NavLink to={'hook/counter'}>
          <button>Hook Counter</button>
        </NavLink>
        <NavLink to={'usereducer/counter'}>
          <button>useReducer Counter</button>
        </NavLink>
        <NavLink to={'error/errorboundary'}>
          <button>Error Boundary</button>
        </NavLink>
       </nav>
       <main>
       <Outlet />
       </main>
    </div>
    
  )
}

export default sharedNavLayout