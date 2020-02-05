import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect as connectRedux } from 'react-redux';

import { selecteItem, clearSelecetItem, clearOneAnswer } from '../actions/answer';

import arrow from '../img/arrow.png';
import ginger from '../img/item-1.svg';
import sandalwood from '../img/item-2.svg';
import mimosa from '../img/item-3.svg';
import orange from '../img/item-4.svg';
import cedar from '../img/item-5.svg';
import rhubarb from '../img/item-6.svg';
import leather from '../img/item-7.svg';
import milk from '../img/item-8.svg';
import vanilla from '../img/item-9.svg';
import incense from '../img/item-10.svg';

import './Ingredient.css';
import './main.css';

class Ingredient extends Component {
	state = {
		images: [
			{id: 'ginger', title: 'имбирь', number: '01', src: ginger},
			{id: 'sandalwood', title: 'сандаловое дерево', number: '02', src: sandalwood},
			{id: 'mimosa', title: 'мимоза', number: '03', src: mimosa},
			{id: 'orange', title: 'апельсиновая цедра', number: '04', src: orange},
			{id: 'cedar', title: 'кедр', number: '05', src: cedar},
			{id: 'rhubarb', title: 'ревень', number: '06', src: rhubarb},
			{id: 'leather', title: 'кожа', number: '07', src: leather},
			{id: 'milk', title: 'молоко', number: '08', src: milk},
			{id: 'vanilla', title: 'ваниль', number: '09', src: vanilla},
			{id: 'incense', title: 'благовония', number: '10', src: incense},
		],
		count: 1,
	};

	addBorder = e => {
		let target = e.target;

		while (target != this) {
			if (target.tagName == 'DIV') {
				this.highlight(target);
				return;
			}
			target = target.parentNode;
		}
	}

	highlight(node) {
		let selectedTd;
		selectedTd = node;

		if (node.classList.value === 'content active') {
			const selectedItems = this.props.selectedItems;
			const filterSelectedItems = selectedItems.filter(el => el.id !== node.id);

			this.setState({
				...this.state,
				count: this.state.count - 1
			});

			this.props.clearSelecetItem(filterSelectedItems);

			selectedTd.classList.remove('active');
		} else if (node.classList.value === 'content' && this.state.count <=2) {
			const selectedItem = this.state.images.filter(el => el.id === node.id);

			this.setState({
				...this.state,
				count: this.state.count + 1
			});

			this.props.selecteItem(selectedItem);

			selectedTd.classList.add('active');
		}	
	}

	goBack = () => {
		this.props.clearOneAnswer()
	}

	render () {
		const elements = this.state.images.map(el => {
			return (
				<div id={el.id} key={el.id} className='content'>
					<img id={el.id} src={el.src} />
					<span className="image-text">
						<p>{el.title}</p>
						<span>{el.number}</span>
					</span>
				</div>
			);
		})

		return (
			<section className="section-ingredient" id={this.props.id}>
				<div className="wrapper">
					<div className="counter-page">
						<span className="start">04</span><span className="dash"></span><span className="end">05</span>
					</div>
	
					<div className="text">
						выберите два<br />
						ингредиента:
					</div>
	
					<div className="images-wrapper" onClick={this.addBorder}>
						{elements}
					</div>
	
					<div className="actions">
						<div onClick={this.goBack}>
							<a className="button back-button" onClick={this.props.go} data-to="mood">
								<img className="arrow" src={arrow} />
								<span className="button-text">назад</span>
							</a>
						</div>
	
						<a className="button button-next" onClick={this.props.go} data-to="result" style={{display: this.state.count <= 2 ? 'none' : 'flex'}}>
							<span className="button-text">вперед</span>
							<img className="arrow" src={arrow} />
						</a>
					</div>
				</div>
			</section>
		)
	}
}

Ingredient.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
	selectedItems: store.answers.selectedItems
});

export default connectRedux(mapStateToProps, { selecteItem, clearSelecetItem, clearOneAnswer })(Ingredient);
