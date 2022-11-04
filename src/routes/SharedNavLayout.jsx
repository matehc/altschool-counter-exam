import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';

function sharedNavLayout() {
  return (
    <div>
       <div>
       <NavLink to={'/'}>
          <button>Home</button>
        </NavLink>
        <NavLink to={'/'}>
          <button>Hook Counter</button>
        </NavLink>
        <NavLink to={'/'}>
          <button>useReducer Counter</button>
        </NavLink>
        <NavLink to={'/'}>
          <button>Error Boundary</button>
        </NavLink>
       </div>
    <Outlet />
    </div>
    
  )
}

export default sharedNavLayout