import React from 'react';
// elements
import HomeHeader from './homepage/header/HomeHeader';
import HomeHelp from './homepage/help/HomeHelp';
import HomeAboutUs from './homepage/HomeAboutUs';
import HomeWhoWeHelp from './homepage/HomeWhoWeHelp';
import HomeContact from './homepage/HomeContact';

export default function Home() {
	return <>
		<HomeHeader id="homeHeader" />
		<HomeHelp id="homeHelp"/>
		<HomeAboutUs id="homeAboutUs"/>
		<HomeWhoWeHelp id="homeWhoWeHelp"/>
		<HomeContact id="homeContact"/>
	</>
}