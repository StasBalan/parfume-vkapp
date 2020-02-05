import React from 'react';
import PropTypes from 'prop-types';
import { connect as connectRedux } from 'react-redux';

import Slider from './Slider';

import { clearOneAnswer } from '../actions/answer';

import arrow from '../img/arrow.png';
import mood1 from '../img/mood1.jpg';
import mood2 from '../img/mood2.jpg';
import mood3 from '../img/mood3.jpg';

import './main.css';

const Mood = props => {
	const images = [
		{id: 'mood1', title: 'фантастическое', number: '01', src: mood1},
		{id: 'mood2', title: 'чувственное', number: '02', src: mood2},
		{id: 'mood3', title: 'безумное', number: '03', src: mood3},
	];

	const goBack = () => {
		props.clearOneAnswer();
	}

	return (
		<section className="section-persons" id={props.id}>
			<div className="section-content-top">
				<div className="counter-page">
					<span className="start">04</span><span className="dash"></span><span className="end">05</span>
				</div>

				<div className="text">
					какое у тебя<br />
					настроение?
				</div>
			</div>

			<Slider go={props.go} dataTo='ingredient' images={images}></Slider>

			<div className="actions" onClick={goBack}>
				<a className="button back-button" onClick={props.go} data-to="hobby">
					<img className="arrow" src={arrow} />
					<span className="button-text">назад</span>
				</a>
			</div>
		</section>
	)
}

Mood.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default connectRedux(null, { clearOneAnswer })(Mood);
