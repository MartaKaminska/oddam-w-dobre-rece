import React from 'react';
// elements
import HomeHeader from './homepage/header/HomeHeader';
import HomeDonations from './homepage/donations/HomeDonations';
import HomeAboutUs from './homepage/HomeAboutUs';
import HomeWhoWeHelp from './homepage/HomeWhoWeHelp';
import HomeContact from './homepage/HomeContact';

export default function Home() {
	return <>
		<HomeHeader id="homeHeader" />
		<HomeDonations id="homeHelp"/>
		<HomeAboutUs id="homeAboutUs"/>
		<HomeWhoWeHelp id="homeWhoWeHelp"/>
		<HomeContact id="homeContact"/>
	</>
}