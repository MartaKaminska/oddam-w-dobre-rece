import React from 'react';
import { NavLink } from 'react-router-dom'
// elements
import HomeThreeColumns from './HomeThreeColumns'
import HomeFourSteps from './HomeFourSteps';
import decoration from '../../../assets/Decoration.svg';

export default function HomeHepl({ id }) {
	return <div className='home-help' id={id}>
		<HomeThreeColumns />
		<h2>Wystarczą 4 proste kroki</h2>
		<img src={decoration} alt="decoration" />
		<HomeFourSteps />
		<button><NavLink to='/login'>oddaj rzeczy</NavLink></button>
	</div>
}