import React from 'react';
//elements
import iconFacebook from '../assets/Facebook.svg';
import iconInstagram from '../assets/Instagram.svg';

export default function Footer() {
	return <div className="footer">
		<p>Copyright by Coders Lab</p>
		<div>
			<img src={iconFacebook} alt="facebook" />
			<img src={iconInstagram} alt="instagram" />
		</div>
	</div>
}