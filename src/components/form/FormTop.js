import React from 'react';
// elements
import picture from '../../assets/Form-Hero-Image.jpg';
import decoration from '../../assets/Decoration.svg';

export default function FormTop() {
	return <div className="form-top">
		<div className="form-top-left-column">
			<img src={picture} alt="things to donate" />
		</div>
		<div className="form-top-right-column">
			<h2>Oddaj rzeczy, których już nie chcesz<br />POTRZEBUJĄCYM</h2>
			<img src={decoration} alt="decoration" />
			<h3>Wystarczą 4 proste kroki:</h3>
			<div className="form-top-four-stats">
				<div><span>1</span><p>Wybierz rzeczy</p></div>
				<div><span>2</span>Spakuj je do worków</div>
				<div><span>3</span>Wybierz zbiórkę</div>
				<div><span>4</span>Zamów kuriera</div>
			</div>
		</div>
	</div>
}