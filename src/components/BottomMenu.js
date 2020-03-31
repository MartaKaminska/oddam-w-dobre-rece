import React from 'react';
import { Link } from 'react-scroll';

export default function BottomMenu() {
	return <nav className='bottom-menu'>
		<ul>
			<li><Link >Start</Link></li>
			<li>
				<Link 
					activeClass="active-bottom-menu"
					to="homeFourSteps" 
					smooth={true} 
					duration={500}>
						O co chodzi
				</Link>
			</li>
			<li>
				<Link 
					activeClass="active-bottom-menu"
					to="homeAboutUs" 
					smooth={true} 
					duration={500}>
						O nas
				</Link>
			</li>
			<li>
				<Link 
					activeClass="active-bottom-menu"
					to="homeWhoWeHelp" 
					smooth={true} 
					duration={500}>
						Fundacje i organizacje
				</Link>
			</li>
			<li>
				<Link 
					activeClass="active-bottom-menu"
					to="homeContact" 
					smooth={true} 
					duration={500}>
						Kontakt
				</Link>
			</li>
		</ul>
	</nav>
}