import React from 'react';
import { NavLink } from 'react-router-dom'
// elements
import PanelMenu from './navigation/PanelMenu';
import decoration from '../assets/Decoration.svg';

export default function Logout() {
	return <div className="login">
		<PanelMenu />
		<h2>Wylogowanie nastąpiło pomyślnie!</h2>
		<img src={decoration} alt="decoration" />
		<form>
			<div className="buttons logout">
				<NavLink to='/'>
						Strona główna
				</NavLink>
			</div>
		</form>
	</div>
}

