import React from 'react';
// elements
import icon1 from '../../../assets/Icon-1.svg';
import icon2 from '../../../assets/Icon-2.svg';
import icon3 from '../../../assets/Icon-3.svg';
import icon4 from '../../../assets/Icon-4.svg';

export default function HomeFourSteps() {
	return <div className='home-four-steps'>
		<div>
			<img src={icon1} alt="clothes icon" />
			<p className="step">Wybierz rzeczy</p>
			<p>ubrania, zabawki, sprzęt i inne</p>
		</div>
		<div>
			<img src={icon2} alt="bag icon" />
			<p className="step">Spakuj je</p>
			<p>skorzystaj z worków na śmieci</p>
		</div>
		<div>
			<img src={icon3} alt="loupe icon" />
			<p className="step">Zdecyduj komu chcesz pomóc</p>
			<p>wybierz zaufane miejsce</p>
		</div>
		<div>
			<img src={icon4} alt="arrow icon" />
			<p className="step">Zamów kuriera</p>
			<p>kurier przyjedzie w dogodnym terminie</p>
		</div>
	</div>
}