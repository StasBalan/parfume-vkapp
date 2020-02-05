import React from 'react';
import PropTypes from 'prop-types';

import arrow from '../img/arrow.png';

import './Home.css';
import './main.css';

const Home = ({ id, go }) => (
	<main className="home" id={id}>
		<div className="wrapper">
			<div className="home-text">
				кто ты<br />
				сегодня?
			</div>

			<div className="actions">
				<a className="button button-next" onClick={go} data-to="slogan">
					<span className="button-text">cтарт</span>
					<img className="arrow" src={arrow} />
				</a>
			</div>
		</div>
	</main>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
