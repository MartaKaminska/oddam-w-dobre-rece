import React from 'react';
import { connect } from 'react-redux';
import { formStep, formNext } from '../../../actions/form';

function ContentSummary(props) {
	const day = props.date.getDate();
	const month = props.date.getMonth()+1;
	const year = props.date.getFullYear();
	const hours = props.hour.getHours();
	const minutes = props.hour.getMinutes();
	const prevStep = () => {
		props.formStep(4);
		console.log(props)
	}
	const nextStep = () => {
		props.formStep(6);
		console.log(props)
	}
	return <div className="full">
		<div className="content">
			<form className="summary">
				<h3>Podsumowanie Twojej darowizny</h3>
				<div>
					<h4>Oddajesz:</h4>
					<div>
						<p>{props.bags} worki, {props.donation}, {props.who}</p>
					</div>
					<div>
						<p>dla lokalizacji: {props.location}</p>
					</div>
				</div>
				<div className='summary-column'>
					<div>
						<h4>Adres odbioru:</h4>
						<p><span>Ulica</span> {props.street}</p>
						<p><span>Miasto</span> {props.city}</p>
						<p><span>Kod pocztowy</span> {props.code}</p>
						<p><span>Numer telefonu</span> {props.phone}</p>
					</div>
					<div>
						<h4>Termin odbioru:</h4>
						<p><span>Data</span> {day}.{month}.{year}</p>
						<p><span>Godzina</span> {hours}:{minutes}</p>
						<p><span>Uwagi dla kuriera</span> {props.notes}</p>
					</div>
				</div>
			</form>
			<button className="prev" onClick={prevStep}>Wstecz</button>
			<button className="next" onClick={nextStep}>Potwierdzam</button>
		</div>
	</div>
};
const mapStateToProps = state => {
	return {
		step: state.formStep,
		next: state.formNext,
		donation: state.formDonation,
		bags: state.formBags,
		location: state.formLocation,
		who: state.formWho,
		organization: state.formOrganization,
		street: state.formAddressStreet,
		city: state.formAddressCity,
		code: state.formAddressCode,
		phone: state.formAddressTelephone,
		date: state.formPickUpDate,
		hour: state.formPickUpHour,
		notes: state.formPickUpNotes
	}
}

export default connect(mapStateToProps, { formStep, formNext })(ContentSummary);