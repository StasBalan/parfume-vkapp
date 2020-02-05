import React from 'react';
import { connect as connectRedux } from 'react-redux';
import PropTypes from 'prop-types';

import Slider from './Slider';

import { userAnswer } from '../actions/answer';

import person1 from '../img/person-1.jpg';
import person2 from '../img/person-2.jpg';
import person3 from '../img/person-3.jpg';

import './main.css';

const SecondScreen = props => {
	const images = [
		{id: 'person1', title: 'подумать дважды', number: '01', src: person1},
		{id: 'person2', title: 'следовать интуиции', number: '02', src: person2},
		{id: 'person3', title: 'кому какое дело?', number: '03', src: person3},
	];

	return (
		<section className="section-persons" id={props.id}>
			<div className="section-content-top">
				<div className="counter-page">
					<span className="start">01</span><span className="dash"></span><span className="end">05</span>
				</div>

				<div className="text">
					твой девиз<br />
					на каждый день?
				</div>
			</div>

			<Slider go={props.go} dataTo='colors' images={images}></Slider>
		</section>
	)
}

SecondScreen.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default connectRedux(null, { userAnswer })(SecondScreen);
