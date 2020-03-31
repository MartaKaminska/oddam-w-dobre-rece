import React from 'react';
// elements
import HomeHeader from './homepage/HomeHeader';
import HomeThreeColumns from './homepage/HomeThreeColumns';
import HomeFourSteps from './homepage/HomeFourSteps';
import HomeAboutUs from './homepage/HomeAboutUs';
import HomeWhoWeHelp from './homepage/HomeWhoWeHelp';
import HomeContact from './homepage/HomeContact';
import BottomMenu from './BottomMenu';

export default function Home() {
	return <div>
		<BottomMenu />
		<HomeHeader id="homeHeader" />
		<HomeThreeColumns id="homeThreeColumns"/>
		<HomeFourSteps id="homeFourSteps"/>
		<HomeAboutUs id="homeAboutUs"/>
		<HomeWhoWeHelp id="homeWhoWeHelp"/>
		<HomeContact id="homeContact"/>
	</div>
}