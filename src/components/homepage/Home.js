import React from 'react';
// elements
import HomeHeader from './header/HomeHeader';
import HomeDonations from './donations/HomeDonations';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './whoWeHelp/HomeWhoWeHelp';
import HomeContact from './contact/HomeContact';

export default function Home() {
	return <>
		<HomeHeader id="homeHeader" />
		<HomeDonations id="homeHelp"/>
		<HomeAboutUs id="homeAboutUs"/>
		<HomeWhoWeHelp id="homeWhoWeHelp"/>
		<HomeContact id="homeContact"/>
	</>
}