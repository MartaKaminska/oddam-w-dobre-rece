import React from 'react';
import { connect } from 'react-redux';
import { formStep, formNext, formBags } from '../../../actions/form';
import { Dropdown } from 'semantic-ui-react';

function ContentStepTwo(props) {
	const selectChange = (e, {value}) => {
		console.log(props)
		props.formBags(value);
	}
	const prevStep = () => {
		props.formStep(1);
		console.log(props)
	}
	const nextStep = () => {
		if(props.bags === null) {
			props.formNext(false)
		} else {
			props.formNext(true)
			props.formStep(3);
		}
		console.log(props)
	}
	const options = [
		{ key: 1, text: '1', value: 1 },
		{ key: 2, text: '2', value: 2 },
		{ key: 3, text: '3', value: 3 },
		{ key: 4, text: '4', value: 4 },
		{ key: 5, text: '5', value: 5 },
	]
	return <div>
		<div className="important">
			<h3>Ważne!</h3>
			<p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
		</div>
		<div className="content">
			<p>Krok 2/4</p>
			{props.next === false && <p className="valid-text">Proszę o uzupełnienie formularza</p>}
			<form>
				<h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
				<div className="dropdown-element">
					<label>Liczba 60l worków:</label>
					<Dropdown
						placeholder='- wybierz -'
						selection
						value={props.bags}
						options={options}
						onChange={selectChange} />
				</div>
			</form>
			<button className="prev" onClick={prevStep}>Wstecz</button>
			<button className="next" onClick={nextStep}>Dalej</button>
		</div>
	</div>
};
const mapStateToProps = state => {
	return {
		step: state.formStep,
		next: state.formNext,
		bags: state.formBags
	}
}

export default connect(mapStateToProps, { formStep, formNext, formBags })(ContentStepTwo);