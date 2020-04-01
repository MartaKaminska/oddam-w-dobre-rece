import React from 'react';
import { Link } from 'react-scroll';

export default function BottomMenu() {
	return <nav className='bottom-menu'>
		<ul>
			<li>Start</li>
			<li>
				<Link 
					activeClass="active-bottom-menu"
					to="homeHelp"
					spy={true}
					smooth={true}
					duration={500}>
						O co chodzi
				</Link>
			</li>
			<li>
				<Link 
					activeClass="active-bottom-menu"
					to="homeAboutUs" 
					spy={true}
					smooth={true}
					duration={500}>
						O nas
				</Link>
			</li>
			<li>
				<Link 
					activeClass="active-bottom-menu"
					to="homeWhoWeHelp" 
					spy={true}
					smooth={true}
					duration={500}>
						Fundacje i organizacje
				</Link>
			</li>
			<li>
				<Link 
					activeClass="active-bottom-menu"
					to="homeContact" 
					spy={true}
					smooth={true}
					duration={500}>
						Kontakt
				</Link>
			</li>
		</ul>
	</nav>
}