import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link'

export default class PanelMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
	}
	toggler = () => {
		this.setState({ active: !this.state.active})
	}
	render() {
		return <>
			<button onClick={this.toggler} className={this.state.active ? "hamburger hamburger-active" : "hamburger"}>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
			<nav className='panel-menu'>
				<ul className={this.state.active && "active"}>
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
		</>
	}
}