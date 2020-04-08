import React from 'react';
import { connect } from 'react-redux';
import { formStep, formNext, formDonation } from '../../../actions/form';

function ContentStepOne(props) {
	const radioChange = (e) => {
		props.formDonation(e.target.value);
	}
	const nextStep = () => {
		if(props.donation === '') {
			props.formNext(false)
		} else {
			props.formNext(true)
			props.formStep(2);
		}
		console.log(props)
	}
	return <div>
		<div className="important">
			<h3>Ważne!</h3>
			<p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
		</div>
		<div className="content">
			<p>Krok 1/4</p>
			{props.next === false && <p className="valid-text">Proszę o uzupełnienie formularza</p>}
			<form>
				<h3>Zaznacz co chcesz oddać:</h3>
				<ul>
					<li>
						<label className={props.donation === 'clothesToUse' ? 'checked' : null}>
							<input
								type='radio'
								value='clothesToUse'
								onClick={(e) => radioChange(e)} />
							<span>ubrania, które nadają się do ponownego użycia</span>
						</label>
					</li>
					<li>
						<label className={props.donation === 'clothesToTrash' ? 'checked' : ''}>
							<input
								type='radio'
								value='clothesToTrash'
								onClick={(e) => radioChange(e)} />
							<span>ubrania, do wyrzucenia</span>
						</label>
					</li>
					<li>
						<label className={props.donation === 'toys' ? 'checked' : ''}>
							<input
								type='radio'
								value='toys'
								onClick={(e) => radioChange(e)} />
							<span>zabawki</span>
						</label>
					</li>
					<li>
						<label className={props.donation === 'books' ? 'checked' : ''}>
							<input
								type='radio'
								value='books'
								onClick={(e) => radioChange(e)} />
							<span>książki</span>
						</label>
					</li>
					<li>
						<label className={props.donation === 'other' ? 'checked' : ''}>
							<input
								type='radio'
								value='other'
								onClick={(e) => radioChange(e)} />
							<span>inne</span>
						</label>
					</li>
				</ul>
			</form>
			<button className="prev" onClick={nextStep}>Dalej</button>
		</div>
	</div>
};
const mapStateToProps = state => {
	return {
		step: state.formStep,
		next: state.formNext,
		donation: state.formDonation
	}
}

export default connect(mapStateToProps, { formStep, formNext, formDonation })(ContentStepOne);