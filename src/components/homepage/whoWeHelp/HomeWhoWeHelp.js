import React from 'react';
import { connect } from 'react-redux';
import { whoWeHelp } from '../../../actions/whoWeHelp';
// elements
import HomeFoundations from './HomeFoundations';
import HomeAssociations from './HomeAssociations';
import HomeLocal from './HomeLocal';
import decoration from '../../../assets/Decoration.svg';

function HomeWhoWeHelp(props) {
	const handleClick = (e, type) => {
		props.whoWeHelp(type)
	}
	const listToRender = () => {
		if(props.type === 'found') {
			return <HomeFoundations type='found'/>
		} else if (props.type === 'assoc') {
			return <HomeAssociations type='assoc'/>
		} else {
			return <HomeLocal type='local'/>
		}
	}
	return <div className="home-who-we-help" id={props.id}>
		<h2>Komu pomagamy?</h2>
		<img src={decoration} alt="decoration" />
		<div className="who-we-help-buttons">
			<button 
				onClick={e => handleClick(e, 'found')}
				className={props.type === 'found' ? 'active' : null}>
					Fundacjom
			</button>
			<button 
				onClick={e => handleClick(e, 'assoc')}
				className={props.type === 'assoc' ? 'active' : null}>
					Organizacjom pozarządowym
			</button>
			<button 
				onClick={e => handleClick(e, 'local')}
				className={props.type === 'local' ? 'active' : null}>
					Lokalne zbiórki
			</button>
		</div>
		<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
		</p>
		{listToRender()}
	</div>
}
const mapStateToProps = state => {
	return {
		type: state.whoWeHelp,
	}
}

export default connect(mapStateToProps, { whoWeHelp })(HomeWhoWeHelp);