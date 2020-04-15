import React from 'react';
import { connect } from 'react-redux';
import { formStep, formNext, formLocation, formWho, formOrganization } from '../../../actions/form';
import { Dropdown } from 'semantic-ui-react';

function ContentStepThree(props) {
	const selectChange = (e, {value}) => {
		props.formLocation(value);
	}
	const checkboxChange = (e) => {
		if(props.who.includes(e.target.value)) {
			let index = props.who.indexOf(e.target.element);
			props.who.splice(index, 1)
		} else {
			props.formWho(e.target.value)
		}
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
			<form className='content-step-three'>
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
						<label className={props.who.includes('dzieciom') ? 'checked' : ''}>
							<input
								type='checkbox'
								value='dzieciom'
								onClick={(e) => checkboxChange(e)} />
							<span className="children"></span>
						</label>
					</li>
					<li>
						<label className={props.who.includes('samotnym matkom') ? 'checked' : null}>
							<input
								type='checkbox'
								value='samotnym matkom'
								onClick={(e) => checkboxChange(e)} />
							<span className="singleMother"></span>
						</label>
					</li>
					<li>
						<label className={props.who.includes('bezdomnym') ? 'checked' : null}>
							<input
								type='checkbox'
								value='bezdomnym'
								onClick={(e) => checkboxChange(e)} />
							<span className="homeless"></span>
						</label>
					</li>
					<li>
						<label className={props.who.includes('niepełnosprawnym') ? 'checked' : null}>
							<input
								type='checkbox'
								value='niepełnosprawnym'
								onClick={(e) => checkboxChange(e)} />
							<span className="disabled"></span>
						</label>
					</li>
					<li>
						<label className={props.who.includes('osobom starszym') ? 'checked' : null}>
							<input
								type='checkbox'
								value='osobom starszym'
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