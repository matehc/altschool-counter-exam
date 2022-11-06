import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';

function sharedNavLayout() {
  return (
    <div>
       <nav>
       <NavLink to={'/'}>
          Home
        </NavLink>
        <NavLink to={'hook/counter'}>
          Hook Counter
        </NavLink>
        <NavLink to={'usereducer/counter'}>
          useReducer Counter
        </NavLink>
        <NavLink to={'error/errorboundary'}>
          Error Boundary
        </NavLink>
       </nav>
       <main>
       <Outlet />
       </main>
    </div>
    
  )
}

export default sharedNavLayout