import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { ToggleMenuContext } from '../contexts/toggle-menu.context';

function SharedNavLayout() {
  const {isMenuOpen, setIsMenuOpen} = useContext(ToggleMenuContext);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="shared-nav">
      <nav className="nav-bar">
        <div className={isMenuOpen ?"link-container" : "link-container active-nav"}>
          <NavLink onClick={handleLinkClick} className="links home-link" to={'/'}>
            Home
          </NavLink>
          <NavLink onClick={handleLinkClick} className="links" to={'hook/counter'}>
            Hook
          </NavLink>
          <NavLink onClick={handleLinkClick} className="links" to={'usereducer/counter'}>
            useReducer
          </NavLink>
          <NavLink onClick={handleLinkClick} className="links" to={'error/errorboundary'}>
            ErrorBoundary
          </NavLink>
        </div>

        <div className='menu-icon-container' onClick={handleMenuToggle}>
          <i
            className={
              isMenuOpen ? 'fa-solid fa-bars' : 'fa-solid fa-xmark close'
            }
          ></i>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default SharedNavLayout;
