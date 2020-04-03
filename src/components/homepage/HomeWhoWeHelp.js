import React from 'react';
// elements
import decoration from '../../assets/Decoration.svg';

export default function HomeWhoWeHelp({ id }) {
	return <div className="home-who-we-hepl" id={id}>
		<h2>Komu pomagamy</h2>
		<img src={decoration} alt="decoration" />
		<div className="who-we-hepl-buttons">
			<button>Fundacjom</button>
			<button>Organizacjom pozarządowym</button>
			<button>Lokalne zbiórki</button>
		</div>
		<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
		</p>
	</div>
}