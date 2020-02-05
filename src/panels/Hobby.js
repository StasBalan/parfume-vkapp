import React from 'react';
import PropTypes from 'prop-types';
import { connect as connectRedux } from 'react-redux';

import { clearOneAnswer } from '../actions/answer';

import Slider from './Slider';

import hobby1 from '../img/hobby1.jpg';
import hobby2 from '../img/hobby2.jpg';
import hobby3 from '../img/hobby3.jpg';
import hobby4 from '../img/hobby4.jpg';
import arrow from '../img/arrow.png';

import './main.css';

const Hobby = props => {
	const images = [
		{id: 'hobby1', src: hobby1},
		{id: 'hobby2', src: hobby2},
		{id: 'hobby3', src: hobby3},
		{id: 'hobby4', src: hobby4},
	];

	const goBack = () => {
		props.clearOneAnswer();
	}

	return (
		<section className="section-hobby" id={props.id}>
			<div className="section-content-top">
				<div className="counter-page">
					<span className="start">03</span><span className="dash"></span><span className="end">05</span>
				</div>

				<div className="text">
					какое у тебя<br />
					любимое занятие?
				</div>
			</div>
			<Slider go={props.go} dataTo='mood' images={images}></Slider>

			<div className="actions" onClick={goBack}>
				<a className="button back-button" onClick={props.go} data-to="colors">
					<img className="arrow" src={arrow} />
					<span className="button-text">назад</span>
				</a>
			</div>
		</section>
	)
}

Hobby.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default connectRedux(null, { clearOneAnswer })(Hobby);
