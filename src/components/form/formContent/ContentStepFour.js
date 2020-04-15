import React from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { formStep, formNext, formAddressStreet, formAddressCity, formAddressCode, formAddressTelephone, formPickUpDate, formPickUpHour, formPickUpNotes } from '../../../actions/form';

function ContentStepFour(props) {
	const inputChangeStreet = (e) => props.formAddressStreet(e.target.value);
	const inputChangeCity = (e) => props.formAddressCity(e.target.value);
	const inputChangeCode = (e) => props.formAddressCode(e.target.value);
	const inputChangePhone = (e) => props.formAddressTelephone(e.target.value);
	const inputChangeDate = (date) => props.formPickUpDate(date);
	const inputChangeHour = (date) => props.formPickUpHour(date);
	const inputChangeNotes = (e) => props.formPickUpNotes(e.target.value);
	const prevStep = () => {
		props.formStep(3);
		console.log(props)
	}
	const nextStep = () => {
		if(props.street === '' || props.city === '' || props.code === '' || props.phone === '' || props.date === '' || props.hour === '') {
			props.formNext(false)
		} else {
			props.formNext(true)
			props.formStep(5);
		}
	}
	return <div>
		<div className="important">
			<h3>Ważne!</h3>
			<p>Podaj adres oraz termin odbioru rzeczy.</p>
		</div>
		<div className="content">
			<p>Krok 4/4</p>
			{props.next === false && <p className="valid-text">Proszę o uzupełnienie formularza</p>}
			<form>
			<h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
				<div className="content-step-four">
					<div className="step-four-column">
						<h4>Adres odbioru:</h4>
						<label>Ulica
							<input
								type='text'
								value={props.street}
								onChange={inputChangeStreet} />
						</label>
						<label>Miasto
							<input
								type='text'
								value={props.city}
								onChange={inputChangeCity} />
						</label>
						<label>Kod pocztowy
							<input
								type='text'
								value={props.code}
								onChange={inputChangeCode} />
						</label>
						<label>Numer telefonu
							<input
								type='text'
								value={props.phone}
								onChange={inputChangePhone} />
						</label>
					</div>
					<div className="step-four-column">
						<h4>Termin odbioru:</h4>
						<label>Data
							<DatePicker
								className="date"
								dateFormat='dd/MM/yyyy'
								minDate={new Date()}
								selected={props.date}
								onChange={inputChangeDate} />
						</label>
						<label>Godzina
							<DatePicker
								className="date"
								selected={props.hour}
								onChange={inputChangeHour}
								showTimeSelect
								showTimeSelectOnly
								timeIntervals={15}
								timeCaption="Time"
								dateFormat="h:mm aa" />
						</label>
						<label>Uwagi dla kuriera
							<textarea
								value={props.notes}
								onChange={inputChangeNotes} />
						</label>
					</div>
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
		street: state.formAddressStreet,
		city: state.formAddressCity,
		code: state.formAddressCode,
		phone: state.formAddressTelephone,
		date: state.formPickUpDate,
		hour: state.formPickUpHour,
		notes: state.formPickUpNotes
	}
}

export default connect(mapStateToProps, { formStep, formNext, formAddressStreet, formAddressCity, formAddressCode, formAddressTelephone, formPickUpDate, formPickUpHour, formPickUpNotes })(ContentStepFour);