import React from 'react';
import { connect } from 'react-redux';
import { formStep, formNext, formLocation, formWho, formOrganization } from '../../../actions/form';
import { Dropdown } from 'semantic-ui-react';

function ContentStepThree(props) {
	const selectChange = (e, {value}) => {
		props.formLocation(value);
	}
	const checkboxChange = (e) => {
		props.formWho(e.target.value);
	}
	const inputChange = (e) => {
		props.formOrganization(e.target.value);
	}
	const prevStep = () => {
		props.formStep(2);
		console.log(props)
	}
	const nextStep = () => {
		if(props.location === '' || props.who === '') {
			props.formNext(false)
		} else {
			props.formNext(true)
			props.formStep(4);
		}
		console.log(props)
	}
	const options = [
		{ key: 1, text: 'Poznań', value: 'Poznań' },
		{ key: 2, text: 'Warszawa', value: 'Warszawa' },
		{ key: 3, text: 'Kraków', value: 'Kraków' },
		{ key: 4, text: 'Wrocław', value: 'Wrocław' },
		{ key: 5, text: 'Katowice', value: 'Katowice' },

	]
	return <div>
		<div className="important">
			<h3>Ważne!</h3>
			<p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
		</div>
		<div className="content">
			<p>Krok 3/4</p>
			{props.next === false && <p className="valid-text">Proszę o uzupełnienie wszystkich pól formularza</p>}
			<form className='content-step-3'>
				<h3>Lokalizacja:</h3>
				<Dropdown
					placeholder='- wybierz -'
					selection
					value={props.bags}
					options={options}
					onChange={selectChange} />
				<h4>Komu chcesz pomóc?</h4>
				<ul>
					<li>
						<label className={props.who.includes('children') ? 'checked' : null}>
							<input
								type='checkbox'
								value='children'
								onClick={(e) => checkboxChange(e)} />
							<span className="children"></span>
						</label>
					</li>
					<li>
						<label className={props.who.includes('singleMother') ? 'checked' : null}>
							<input
								type='checkbox'
								value='singleMother'
								onClick={(e) => checkboxChange(e)} />
							<span className="singleMother"></span>
						</label>
					</li>
					<li>
						<label className={props.who.includes('homeless') ? 'checked' : null}>
							<input
								type='checkbox'
								value='homeless'
								onClick={(e) => checkboxChange(e)} />
							<span className="homeless"></span>
						</label>
					</li>
					<li>
						<label className={props.who.includes('disabled') ? 'checked' : null}>
							<input
								type='checkbox'
								value='disabled'
								onClick={(e) => checkboxChange(e)} />
							<span className="disabled"></span>
						</label>
					</li>
					<li>
						<label className={props.who.includes('elderlyPerson') ? 'checked' : null}>
							<input
								type='checkbox'
								value='elderlyPerson'
								onClick={(e) => checkboxChange(e)} />
							<span className="elderlyPerson"></span>
						</label>
					</li>
				</ul>
				<h4>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
				<input 
					type='text'
					onChange={(e) => inputChange(e)}
					value={props.organization} />
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
		location: state.formLocation,
		who: state.formWho,
		organization: state.formOrganization
	}
}

export default connect(mapStateToProps, { formStep, formNext, formLocation, formWho, formOrganization })(ContentStepThree);