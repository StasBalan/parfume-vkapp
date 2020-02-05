import React, {Component} from 'react';
import { connect as connectRedux } from 'react-redux';
import PropTypes from 'prop-types';

import backArrow from '../img/back-arrow.png';
import dangerous from '../img/dangerous.png';
import erotic from '../img/erotic.png';
import crazy from '../img/crazy.png';
import fabulous from '../img/fabulous.png';
import genius from '../img/genius.png';
import strong from '../img/strong.png';

import { clearResult } from '../actions/result';

import { data, videoResult, postMessage } from '../data';

import './Card.css';
import './main.css';

class Card extends Component {

  state = {
    src: '',
    text: '',
    description: '',
    bg: '',
    video: ``,
  }

  componentDidMount() {
    const { result } = this.props;

    if (result === 'erotic') {
      this.setState({
        src: erotic,
        text: 'Erotic',
        description: 'Твой аромат Erotic me, построенный на контрастах. Кожаный аккорд – скрытая и агрессивная сексуальность, молоко – нежная любовь.',
        bg: 'linear-gradient(to bottom, #EA5664 28%, rgba(255, 255, 255) 70%)',
        video: videoResult[1]
      })
    } else if (result === 'strong') {
      this.setState({
        src: strong,
        text: 'Strong',
        description: 'Твой аромат Strong me – парфюмерный гипноз. Аккорд рома пьянит, а амбра и индийская полынь вводят в состояние транса и умиротворения.',
        bg: '-webkit-linear-gradient(top, #000 28%, rgba(255, 255, 255) 70%)',
        video: videoResult[4]
      })
    } else if (result === 'genius') {
      this.setState({
        src: genius,
        text: 'Genius',
        description: 'Твой аромат Genius me. Ледяные молекулы CristalFizz отрезвляют разум и придают мыслям стройность и лаконичность. Цитрусовый аккорд отвечает за бодрый настрой на весь день.',
        bg: '-webkit-linear-gradient(top, #037FC3 28%, rgba(255, 255, 255) 70%)',
        video: videoResult[0]
      })
    } else if (result === 'crazy') {
      this.setState({
        src: crazy,
        text: 'Crazy',
        description: 'Твой аромат Crazy Me. Ноты мимозы добавляют образу озорство и детскую легкость, а шокирующий аккорд васаби обеспечивает модный эффект «too much».',
        bg: '-webkit-linear-gradient(top, #F5C756 28%, rgba(255, 255, 255) 70%)',
        video: videoResult[2]
      })
    } else if (result === 'dangerous') {
      this.setState({
        src: dangerous,
        text: 'Dangerous',
        description: 'Твой аромат Dangerous me – сухой, ванильный и дерзкий. Смелая композиция с восточными благовониями звучит так громко, что парфюм становится стейтментом и ключевой деталью образа.',
        bg: '-webkit-linear-gradient(top, #24AC6C 28%, rgba(255, 255, 255) 70%)',
        video: videoResult[5]
      })
    } else if (result === 'fabulous') {
      this.setState({
        src: fabulous,
        text: 'Fabulous',
        description: 'Твой аромат Fabulous me. Теплое звучание нот тыквы и пряного сандала создают полыхающий шлейф и наполняют образ огненной энергией.',
        bg: '-webkit-linear-gradient(top, #EE7844 28%, rgba(255, 255, 255) 70%)',
        video: videoResult[3]
      })
    }
  }

  goBack = () => {
    this.props.clearResult();
  }

  render () {
    return (
      <section className="section-card" id={this.props.id}>
        <div onClick={this.goBack}>
          <div className="header" onClick={this.props.go} data-to="more">
            <img src={backArrow}/>
            <span>Назад</span>
          </div>
        </div>
  
        <div className="card" style={{background: `${this.state.bg}`}}>
          <div id="imageId" className="image">
            <img src={this.state.src}/>
          </div>  
  
          <div className="name">
            <div>
              {this.state.text}
            </div>
          </div>

          <div className="actions" onClick={this.goBack}>
              <button className="more" onClick={this.props.go} data-to="more">
                УЗНАТЬ БОЛЬШЕ
              </button>
            </div> 
        </div>
        
        <div className='video' dangerouslySetInnerHTML={{ __html: this.state.video }}></div>

        <div className="description">
          {this.state.description}
        </div>
      </section>
    )
  }
}

Card.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  result: store.result.result
});

export default connectRedux(mapStateToProps, { clearResult })(Card);
