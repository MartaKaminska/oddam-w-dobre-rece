import React from 'react';
import decoration from '../../../assets/Decoration.svg';

export default function ContentThanks() {
	return <div className="full">
		<div className="content">
			<div className="thanks">
				<div><h3>Dziękujemy za przesłanie formularza <br/>
				Na maila prześlemy wszelkie informacje o odbiorze.</h3></div>
				<div><img src={decoration} alt="decoration" /></div>
			</div>
		</div>
	</div>
}