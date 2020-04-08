import React from 'react';
import { connect } from 'react-redux';

// elements
import ContentStepOne from './ContentStepOne';
import ContentStepTwo from './ContentStepTwo';
import ContentStepThree from './ContentStepThree';
import ContentStepFour from './ContentStepFour';
import ContentSummary from './ContentSummary';

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
		} else {
			return <ContentSummary />
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