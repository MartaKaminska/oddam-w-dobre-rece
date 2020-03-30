import React from 'react';

// elements
import HomeHeader from './homepage/HomeHeader';
import HomeThreeColumns from './homepage/HomeThreeColumns';
import FourSteps from './homepage/FourSteps';
import AboutUs from './homepage/AboutUs';
import WhoWeHepl from './homepage/WhoWeHelp';
import Contact from './homepage/Contact';

export default function Home() {

	return <div>
		< HomeHeader />
		< HomeThreeColumns />
		< FourSteps />
		< AboutUs />
		< WhoWeHepl />
		< Contact />
	</div>
}