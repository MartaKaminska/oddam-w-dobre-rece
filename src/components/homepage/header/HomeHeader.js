import React from 'react';
import { NavLink } from 'react-router-dom'
// elements
import BottomMenu from './BottomMenu';
import picture from '../../../assets/Home-Hero-Image.jpg';
import decoration from '../../../assets/Decoration.svg';

export default function HomeHeader({ id }) {
	return <div className="header" id={id}>
		<div className="header-left-column">
			<img src={picture} alt="things to donate" />
		</div>
		<div className="heder-right-column">
			<BottomMenu />
			<h1>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
			<img src={decoration} alt="decoration" />
			<div className="header-buttons">
				<button><NavLink to='/login'>oddaj<br /> rzeczy</NavLink></button>
				<button><NavLink to='/login'>zorganizuj zbiórkę</NavLink></button>
			</div>
		</div>
	</div>
}