import React from 'react'

export const Navbar: React.FC = () => {
  return (
  	<nav className="purple darken-2 px1">
  		<div className="nav-wrapper">
	      <a href="/" className="brand-logo">React + TS</a>
	      <ul className="right hide-on-med-and-down">
	        <li><a href="">Home</a></li>
	        <li><a href="">About</a></li>
	      </ul>
	    </div>
  	</nav>

  	)
}
