import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

export default function PanelMenu() {
	return <nav className='panel-menu'>
		<ul>
			<li><Link to='/'>
				Start</Link></li>
			<li>
				<Link 
					to='/#homeHelp'
					scroll={el => el.scrollIntoView({behavior:'smooth', block:'start'})}>
						O co chodzi
				</Link>
			</li>
			<li>
				<Link 
					to='/#homeAboutUs'
					scroll={el => el.scrollIntoView({behavior:'smooth', block:'start'})}>
						O nas
				</Link>
			</li>
			<li>
				<Link 
					to="/#homeWhoWeHelp" 
					scroll={el => el.scrollIntoView({behavior:'smooth', block:'start'})}>
						Fundacje i organizacje
				</Link>
			</li>
			<li>
				<Link 
					to="/#homeContact" 
					scroll={el => el.scrollIntoView({behavior:'smooth', block:'start'})}>
						Kontakt
				</Link>
			</li>
		</ul>
	</nav>
}