import React from 'react';
import { connect } from 'react-redux';
// elements
import ContentStepOne from './ContentStepOne';
import ContentStepTwo from './ContentStepTwo';
import ContentStepThree from './ContentStepThree';
import ContentStepFour from './ContentStepFour';
import ContentSummary from './ContentSummary';
import ContentThanks from './ContentThanks';

function FormContent({ step }) {
	const show = () => {
		if(step === 1) {
			return <ContentStepOne />
		} else if(step === 2) {
			return <ContentStepTwo />
		} else if(step === 3) {
			return <ContentStepThree />
		} else if(step === 4) {
			return <ContentStepFour />
		} else if(step === 5) {
			return <ContentSummary />
		} else if(step === 6) {
			return <ContentThanks />
		}
	}
	return <div className="form-content">
			{show()}
		</div>
}
const mapStateToProps = state => {
	return {
		step: state.formStep,
	}
}

export default connect(mapStateToProps)(FormContent)