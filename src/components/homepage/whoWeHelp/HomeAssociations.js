import React from 'react';
import { connect } from 'react-redux';
import { assocList, assocCurrentPage } from '../../../actions/whoWeHelp';

function HomeAssociations(props) {
	const indexOfLast = props.currentPage * 3;
	const indexOfFirst = indexOfLast - 3;
	const currentElements = props.list.slice(indexOfFirst, indexOfLast)
	const elements = currentElements.map((name, i) => {
		return <li key={i} className="list-element">
			<h3>{name.name}</h3>
			<div className="description">{name.description}</div>
			<div className="goal">{name.goal}</div>
		</li>
	});
	const handleClick = (event, i) => {
		props.assocCurrentPage(i);
	}
	const pageNumbers = [];
	for(let i = 1; i <= Math.ceil(props.list.length/3); i++) {
		const page = <li key={i}
						onClick={e => handleClick(e, i)}
						className={props.currentPage === i ? 'active' : null}>
							{i}
						</li>
		pageNumbers.push(page)
	}
	return <section>
		<ul className="list">
			{elements}
		</ul>
		<ul className="numbers">
			{pageNumbers}
		</ul>
	</section>
}
const mapStateToProps = state => {
	return {
		list: state.assocList,
		currentPage: state.assocCurrentPage
	}
}

export default connect(mapStateToProps, { assocList, assocCurrentPage })(HomeAssociations);