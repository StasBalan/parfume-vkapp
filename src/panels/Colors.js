import React, { Component } from 'react';
import { connect as connectRedux } from 'react-redux';
import PropTypes from 'prop-types';

import { userAnswer, clearOneAnswer } from '../actions/answer';

import arrow from '../img/arrow.png';
import picker from '../img/1.jpg';

import './Colors.css';
import './main.css';
import { setInterval } from 'core-js';

class Colors extends Component {

	state = {
		id: ''
	};

	componentDidMount() {
		let interval = setInterval(() => {
			let size = document.getElementById('img_ID').offsetWidth;

			if (size !== 0) {
				this.resizeFunc();
				clearInterval(interval);
			}
		}, 100)
	}

	resizeFunc() {
		var ImageMap = function (map, img) {
						var n,
								areas = map.getElementsByTagName('area'),
								len = areas.length,
								coords = [],
								previousWidth = 593;
						for (n = 0; n < len; n++) {
								coords[n] = areas[n].coords.split(',');
						}
						this.resize = function () {
								var n, m, clen,
										x = img.offsetWidth / previousWidth;
								for (n = 0; n < len; n++) {
										clen = coords[n].length;
										for (m = 0; m < clen; m++) {
												coords[n][m] *= x;
										}
										areas[n].coords = coords[n].join(',');
								}
								previousWidth = img.offsetWidth;
								return true;
						};
						window.onresize = this.resize;
				},
				imageMap = new ImageMap(document.getElementById('map_ID'), document.getElementById('img_ID'));
		imageMap.resize();
		return;
	}	

	pickColor = (e) => {
		this.setState({
			id: e.target.id
		})
	}

	goNext = () => {
		this.props.userAnswer({answer: this.state.id});
	}

	goBack = () => {
		this.props.clearOneAnswer();
	}

	render () {
		let element = null;
		
		if (this.state.id === 'dark') {
			element = <div className="color-block">Абсолютно черный
				<div className="color" style={{background: '#000'}}></div>
			</div>
		} else if (this.state.id === 'green') {
			element = <div className="color-block">Скандальный зеленый
				<div className="color" style={{background: '#24AC6C'}}></div>
			</div>
		} else if (this.state.id === 'yellow') {
			element = <div className="color-block">Сдержанный желтый
				<div className="color" style={{background: '#F5C756'}}></div>
			</div>
		} else if (this.state.id === 'orange') {
			element = <div className="color-block">Шикарный оранжевый
				<div className="color" style={{background: '#EE7844'}}></div>
			</div>
		} else if (this.state.id === 'red') {
			element = <div className="color-block">
				Чувственный красный
				<div className="color" style={{background: '#EA5664'}}></div>
			</div>
		} else if (this.state.id === 'blue') {
			element = <div className="color-block">
				Изумительный голубой
				<div className="color" style={{background: '#037FC3'}}></div>
			</div>
		}

		return (
			<section className="section-color" id={this.props.id}>
				<div className="wrapper">
					<div className="counter-page">
						<span className="start">02</span><span className="dash"></span><span className="end">05</span>
					</div>
	
					<div className="text">
						какой твой<br />
						любимый цвет?
					</div>
	
					<div className='colorpicker'>
							<div style={{width: '100%'}}>
								<img id="img_ID" src={picker} useMap="#image-map" border="0" width='100%'></img>
							</div>
					
							<map id="map_ID" name="image-map" onClick={(e) => this.pickColor(e)}>
									<area id='dark' coords="297,294,118,62,165,32,206,14,245,6,296,2,337,4,372,11,402,19,413,25" shape="poly" />
									<area id='green' coords="297,294,413,25,449,44,482,67,509,92,534,125,558,161,568,183,575,212,583,236" shape="poly" />
									<area id='yellow' coords="297,293,584,235,590,267,590,310,586,357,574,399,555,439,527,481,505,505,484,525,442,556" shape="poly" />
									<area id='orange' coords="297,294,442,555,380,579,332,589,266,592,233,585,212,580" shape="poly" />
									<area id='red' coords="296,293,212,578,155,555,121,534,88,506,65,481,43,453,24,413,15,388" shape="poly" />
									<area id='blue' coords="295,293,14,385,1,310,2,265,17,207,36,157,65,113,94,81,118,61" shape="poly" />
							</map>
					</div>
	
					{element}

					<div className="actions">
						<div onClick={this.goBack}>
							<a className="button back-button" onClick={this.props.go} data-to="slogan">
								<img className="arrow" src={arrow} />
								<span className="button-text">назад</span>
							</a>
						</div>

						<div onClick={this.goNext}>
							<a className="button button-next" onClick={this.props.go} data-to="hobby" style={{display: this.state.id === '' ? 'none' : 'flex'}}>
								<span className="button-text">вперед</span>
								<img className="arrow" src={arrow} />
							</a>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

Colors.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default connectRedux(null, { userAnswer, clearOneAnswer })(Colors);
