import React from 'react';
import { NavLink } from 'react-router-dom'
// elements
import HomeBottomMenu from './HomeBottomMenu';
import picture from '../../../assets/Home-Hero-Image.jpg';
import decoration from '../../../assets/Decoration.svg';

export default function HomeHeader({ id }) {
	return <div className="header" id={id}>
		<div className="header-left-column">
			<img src={picture} alt="things to donate" />
		</div>
		<div className="header-right-column">
			<HomeBottomMenu />
			<h1>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
			<img src={decoration} alt="decoration" />
			<div className="header-buttons">
				<div><NavLink to='/login'>oddaj<br /> rzeczy</NavLink></div>
				<div><NavLink to='/login'>zorganizuj zbiórkę</NavLink></div>
			</div>
		</div>
	</div>
}