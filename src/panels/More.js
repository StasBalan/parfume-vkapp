import React, {Component} from 'react';
import { connect as connectRedux } from 'react-redux';
import PropTypes from 'prop-types';

import { addResult } from '../actions/result';

import backArrow from '../img/back-arrow.png';
import dangerous from '../img/dangerous.png';
import erotic from '../img/erotic.png';
import crazy from '../img/crazy.png';
import fabulous from '../img/fabulous.png';
import genius from '../img/genius.png';
import strong from '../img/strong.png';
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

import './More.css';
import './main.css';

class More extends Component {

  state = {
    images: [
      {id: 'erotic', src: erotic, text: 'Erotic me', number: '01', firstIcon: {src: milk, text: 'milk'}, secondIcon: {src: leather, text: 'leather'}},
      {id: 'fabulous', src: fabulous, text: 'Fabulous me', number: '02', firstIcon: {src: sandalwood, text: 'sandalwood'}, secondIcon: {src: cedar, text: 'cedar'}},
      {id: 'genius', src: genius, text: 'Genius me', number: '03', firstIcon: {src: orange, text: 'orange'}, secondIcon: {src: incense, text: 'incense'}},
      {id: 'crazy', src: crazy, text: 'Crazy me', number: '04', firstIcon: {src: mimosa, text: 'mimosa'}, secondIcon: {src: ginger, text: 'ginger'}},
      {id: 'dangerous', src: dangerous, text: 'Dangerous me', number: '05', firstIcon: {src: vanilla, text: 'vanilla'}, secondIcon: {src: incense, text: 'incense'}},
      {id: 'strong', src: strong, text: 'Strong me', number: '06', firstIcon: {src: vanilla, text: 'vanilla'}, secondIcon: {src: sandalwood, text: 'sandalwood'}},
    ]
  }

  addInResult = (e) => {
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
    this.props.addResult(node.id);
	}

  render () {
    const elements = this.state.images.map((el, i) => (
      <div id={el.id} key={i} className="image-items" onClick={this.props.go} data-to="card">
        <div id={el.id} className="left">
          <div id={el.id} className="image">
            <img src={el.src}/>
          </div>

          <div id={el.id} className="text">
            <p>
              {el.text}
            </p>
            <span>{el.number}</span>
          </div>
        </div>

        <div id={el.id} className="right">
          <div id={el.id} className="icon">
            <img src={el.firstIcon.src}/>
            <p>{el.firstIcon.text}</p>
          </div>

          <div id={el.id} className="icon">
            <img src={el.secondIcon.src}/>
            <p>{el.secondIcon.text}</p>
          </div>
        </div>
      </div>
    ))

    return (
      <section className="section-more" id={this.props.id}>
        <div className="header without-border" onClick={this.props.go} data-to="result">
          <img src={backArrow}/>
          <span>Назад</span>
        </div>
        <div className="wrapper" onClick={this.addInResult}>
          {elements}
        </div>
      </section>
    )
  }
}

More.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  answers: store.answers.answers,
  selectedItems: store.answers.selectedItems
});

export default connectRedux(mapStateToProps, { addResult })(More);
