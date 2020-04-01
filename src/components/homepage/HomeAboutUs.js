import React from 'react';
// elements
import decoration from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';
import image from '../../assets/People.jpg';

export default function AboutUs({ id }) {
	return <div className="home-abour-us" id={id} >
		<div className="about-left-column">
			<h2>O nas</h2>
			<img src={decoration} alt="decoration" />
			<p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
			<img className="about-sign" src={signature} alt="sign" />
		</div>
		<div className="about-right-column">
			<img src={image} alt="smiling people" />
		</div>

	</div>
}