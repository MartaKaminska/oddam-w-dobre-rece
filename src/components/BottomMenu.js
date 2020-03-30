import React, { Component } from 'react';
import { Scroll, Link, Element } from 'react-scroll';
// import { HashRouter, Switch, Route } from 'react-router-dom';

// elements
import HomeHeader from './homepage/HomeHeader';
import HomeThreeColumns from './homepage/HomeThreeColumns';
// import FourSteps from './homepage/FourSteps';
import AboutUs from './homepage/AboutUs';
import WhoWeHepl from './homepage/WhoWeHelp';
import Contact from './homepage/Contact';



export default class BottomMenu extends Component {

	render() {
		return <div>
			<nav className='bottom-menu'>
				<ul>
					<li><Link activeClass='active-bottom-menu' to='home' spy={true} smooth={true} duration={250}>Start</Link></li>
				</ul>
			</nav>

			<Element name='container'>

			</Element>
		</div>
	}
}



// function Menu() {
// 	return <ul className='bottom-menu'>
// 		<li><Link exact to='/'>Start</Link></li>
// 		<li><Link scrolTo='/foursteps'>O co chodzi</Link></li>
// 		<li><Link scrolTo='/aboutus'>O nas</Link></li>
// 		<li><Link scrolTo='/help'>Fundacje i organizacje</Link></li>
// 		<li><Link scrolTo='/contact'>Start</Link></li>
// 	</ul>
// }

// 	return <HashRouter>
// 		<Menu />
// 		<Switch>
// 			<Route exact path='/header' component=	{ HomeHeader } />
// 			<Route path='/foursteps' component={ HomeThreeColumns } />
// 			<Route path='/aboutus' component={ AboutUs } />
// 			<Route path='/help' component={ WhoWeHepl } />
// 			<Route path='/contact' component={ Contact } />
// 		</Switch>
// 	</HashRouter>
// }