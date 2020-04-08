import React from 'react';
// elements
import PanelMenu from '../navigation/PanelMenu';
import FormTop from './FormTop';
import FormContent from './formContent/FormContent';
import HomeContactForm from '../homepage/contact/HomeContact';

export default function Form() {
	return <>
		<PanelMenu />
		<FormTop />
		<FormContent />
		<HomeContactForm />
	</>
}