import React from 'react';
import { connect } from 'react-redux';
import { localList, localCurrentPage } from '../../../actions/whoWeHelp';

function HomeLocal(props) {
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
			{pageNumbers.length > 1 ? pageNumbers : null}
		</ul>
	</section>
}
const mapStateToProps = state => {
	return {
		list: state.localList,
		currentPage: state.localCurrentPage
	}
}

export default connect(mapStateToProps, { localList, localCurrentPage })(HomeLocal);