import React from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
import { connect as connectRedux } from 'react-redux';

import { userAnswer } from '../actions/answer';

import './Slider.css';

const config = {
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  lazy: true,
  speed: 500,
};
class Slider extends React.Component {

  handleClick = e => {
		this.props.userAnswer({answer: e.target.id});
	}

  render() {
    return (
      <AwesomeSwiper config={config} className="swiper-container">
        <div className="swiper-wrapper">
          {
            this.props.images.map((el, i) => {
              return (
                <div className="swiper-slide" key={i} onClick={this.handleClick}>
                  <div className="content">
                    <div
                      id={el.id}
                      onClick={this.props.go}
                      data-to={this.props.dataTo}
                      className="image"
                      style={{backgroundImage: `url(${el.src})`}}
                    ></div>
                    {
                      (!!el.title && !!el.number)
                      ? <div className="image-text">
                          <p>
                            {el.title}
                          </p>
                          <span>{el.number}</span>
                        </div>
                      : null
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </AwesomeSwiper>
    )
  }
}

export default connectRedux(null, { userAnswer })(Slider);
