import React from 'react';
import { NavLink } from 'react-router-dom';


export default function TopMenu () {
	return <ul className='top-menu'>
	<li><NavLink to='/login' activeClassName='active-top-menu'>Zaloguj się</NavLink></li>
	<li><NavLink to='/register' activeClassName='active-top-menu'>Załóż konto</NavLink></li>
	</ul>
}