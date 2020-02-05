import React, {Component} from 'react';
import { connect as connectRedux } from 'react-redux';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vk-connect';

import { clearAnswer, selecteItem } from '../actions/answer';

import backArrow from '../img/back-arrow.png';
import dangerous from '../img/dangerous.png';
import erotic from '../img/erotic.png';
import crazy from '../img/crazy.png';
import fabulous from '../img/fabulous.png';
import genius from '../img/genius.png';
import strong from '../img/strong.png';
import postStrong from '../img/strongme.jpg';
import postGenius from '../img/geniusme.jpg';
import postErotic from '../img/eroticme.jpg';
import postFabulous from '../img/fabulousme.jpg';
import postDangerous from '../img/dangerousme.jpg';
import postCrazy from '../img/crazyme.jpg';

import { data, videoResult, postMessage } from '../data';

import './Result.css';
import './main.css';

class Result extends Component {

  state = {
    bigImage: [
      {srcForBigImg: '', percent: '', text: '', description: '', bg: '', video: ``},
    ],
    smallImages: [
      {srcForSmallImgLeft: '', percent: '', text: ''},
      {srcForSmallImgRight: '', percent: '', text: ''},
    ]
  }

  componentDidMount() {
    const { answers, selectedItems } = this.props;
    const result = [0, 0, 0, 0, 0, 0];
    const weight = [20, 20, 20, 20, 20];
    let indexMax = null;
    let max = 0;
    let selectedRes = 0;
    let selectedInd = null;

    for (let d = 0; d < data.length; d++) {
      for (let a = 0; a < answers.length; a++) {
        if (data[d].array[a] == answers[a].answer) {
          result[d] += weight[a];
        }
      }
    }

    for (let d = 0; d < data.length; d++) {
      for (let i = 0; i < selectedItems.length; i++) {
        if (data[d].array[4].indexOf(selectedItems[i].id) >= 0) {
          selectedRes += 0.5;
          selectedInd = d;
        }
      }
    }

    if (selectedRes === 1) {
      result[selectedInd] += weight[4];
    }

    for (let m = 0; m < result.length; m++) {
      if (max < result[m]) {
        max = result[m];
        indexMax = m;
      }
    }

    if (data[indexMax].res === 'strong') {
      this.setState({
        bigImage: [{src: strong, percent: '60%', text: 'Strong', description: 'Твой аромат Strong me – парфюмерный гипноз. Аккорд рома пьянит, а амбра и индийская полынь вводят в состояние транса и умиротворения.', bg: '-webkit-linear-gradient(top, #000 28%, rgba(255, 255, 255) 70%)', video: videoResult[4]}],
        smallImages: [
          {src: dangerous, percent: '26%', text: 'dangerous'},
          {src: fabulous, percent: '14%', text: 'fabulous'}
        ]
      })
    } else if (data[indexMax].res === 'genius') {
      this.setState({
        bigImage: [{src: genius, percent: '79%', text: 'Genius', description: 'Твой аромат Genius me. Ледяные молекулы CristalFizz отрезвляют разум и придают мыслям стройность и лаконичность. Цитрусовый аккорд отвечает за бодрый настрой на весь день.', bg: '-webkit-linear-gradient(top, #037FC3 28%, rgba(255, 255, 255) 70%)', video: videoResult[0]}],
        smallImages: [
          {src: crazy, percent: '14%', text: 'crazy'},
          {src: erotic, percent: '7%', text: 'erotic'}
        ]
      })
    } else if (data[indexMax].res === 'erotic') {
      this.setState({
        bigImage: [{src: erotic, percent: '65%', text: 'Erotic', description: 'Твой аромат Erotic me, построенный на контрастах. Кожаный аккорд – скрытая и агрессивная сексуальность, молоко – нежная любовь.', bg: '-webkit-linear-gradient(top, #EA5664 28%, rgba(255, 255, 255) 70%)', video: videoResult[1]}],
        smallImages: [
          {src: fabulous, percent: '23%', text: 'fabulous'},
          {src: crazy, percent: '12%', text: 'crazy'}
        ]
      })
    } else if (data[indexMax].res === 'crazy') {
      this.setState({
        bigImage: [{src: crazy, percent: '64%', text: 'Crazy', description: 'Твой аромат Crazy Me. Ноты мимозы добавляют образу озорство и детскую легкость, а шокирующий аккорд васаби обеспечивает модный эффект «too much».', bg: '-webkit-linear-gradient(top, #F5C756 28%, rgba(255, 255, 255) 70%)', video: videoResult[2]}],
        smallImages: [
          {src: dangerous, percent: '24%', text: 'dangerous'},
          {src: strong, percent: '12%', text: 'strong'}
        ]
      })
    } else if (data[indexMax].res === 'fabulous') {
      this.setState({
        bigImage: [{src: fabulous, percent: '79%', text: 'Fabulous', description: 'Твой аромат Fabulous me. Теплое звучание нот тыквы и пряного сандала создают полыхающий шлейф и наполняют образ огненной энергией.', bg: '-webkit-linear-gradient(top, #EE7844 28%, rgba(255, 255, 255) 70%)', video: videoResult[3]}],
        smallImages: [
          {src: crazy, percent: '14%', text: 'crazy'},
          {src: dangerous, percent: '7%', text: 'dangerous'}
        ]
      })
    } else if (data[indexMax].res === 'dangerous') {
      this.setState({
        bigImage: [{src: dangerous, percent: '61%', text: 'Dangerous', description: 'Твой аромат Dangerous me – сухой, ванильный и дерзкий. Смелая композиция с восточными благовониями звучит так громко, что парфюм становится стейтментом и ключевой деталью образа.', bg: 'linear-gradient(to bottom, #24AC6C 28%, rgba(255, 255, 255) 70%)', video: videoResult[5]}],
        smallImages: [
          {src: crazy, percent: '26%', text: 'crazy'},
          {src: strong, percent: '13%', text: 'strong'}
        ]
      })
    }
  }

  clear = () => {
    this.props.clearAnswer();
  }

  post = () => {
    const id = Number(process.env.REACT_APP_PROD_ID);

    Promise.all([
			connect.sendPromise("VKWebAppGetUserInfo", {}),
			connect.sendPromise("VKWebAppGetAuthToken", {"app_id": id, "scope": "friends, status, photos"}),
		])
			.then(([user, token]) => {
				return connect.sendPromise("VKWebAppCallAPIMethod", {"method": "photos.getWallUploadServer", "request_id": "32test", "params": {"v":"5.103", "access_token": token.access_token}})
					.then(data => {
            const APP_URL = process.env.REACT_APP_URL;
            let obj = {};

            if (this.state.bigImage[0].text === 'Strong') {
              obj = {
                upload_url: data.response.upload_url,
                image_path: postStrong
              }
            } else if (this.state.bigImage[0].text === 'Genius') {
              obj = {
                upload_url: data.response.upload_url,
                image_path: postGenius
              }
            }	else if (this.state.bigImage[0].text === 'Erotic') {
              obj = {
                upload_url: data.response.upload_url,
                image_path: postErotic
              }
            }	else if (this.state.bigImage[0].text === 'Crazy') {
              obj = {
                upload_url: data.response.upload_url,
                image_path: postCrazy
              }
            }	else if (this.state.bigImage[0].text === 'Fabulous') {
              obj = {
                upload_url: data.response.upload_url,
                image_path: postFabulous
              }
            }	else if (this.state.bigImage[0].text === 'Dangerous') {
              obj = {
                upload_url: data.response.upload_url,
                image_path: postDangerous
              }
            }

						fetch(`${APP_URL}/backend/upload.php`, {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(obj)
						})
							.then(resp => resp.json())
							.then(data => {

								return connect.sendPromise("VKWebAppCallAPIMethod", {"method": "photos.saveWallPhoto", "request_id": "32test", "params": {"user_id": user.id, "photo": data.photo, "server": data.server, "hash": data.hash, "v":"5.103", "access_token": token.access_token}})
								.then(res => {
									const PROD_APP_URL = process.env.REACT_APP_PROD_URL;
                  const attachment = `photo${res.response[0].owner_id}_${res.response[0].id},${PROD_APP_URL}`;

                  if (this.state.bigImage[0].text === 'Strong') {
                    return connect.send("VKWebAppShowWallPostBox", {"message": postMessage[0], "attachments": attachment});
                  } else if (this.state.bigImage[0].text === 'Genius') {
                    return connect.send("VKWebAppShowWallPostBox", {"message": postMessage[1], "attachments": attachment});
                  }	else if (this.state.bigImage[0].text === 'Erotic') {
                    return connect.send("VKWebAppShowWallPostBox", {"message": postMessage[2], "attachments": attachment});
                  }	else if (this.state.bigImage[0].text === 'Crazy') {
                    return connect.send("VKWebAppShowWallPostBox", {"message": postMessage[3], "attachments": attachment});
                  }	else if (this.state.bigImage[0].text === 'Fabulous') {
                    return connect.send("VKWebAppShowWallPostBox", {"message": postMessage[4], "attachments": attachment});
                  }	else if (this.state.bigImage[0].text === 'Dangerous') {
                    return connect.send("VKWebAppShowWallPostBox", {"message": postMessage[5], "attachments": attachment});
                  }
								});
							})
					});
			});
  }

  render () {
    return (
      <section className="section-persons" id={this.props.id}>
        <div onClick={this.clear}>
          <div className="header" onClick={this.props.go} data-to="home">
            <img src={backArrow}/>
            <span>пройти заново</span>
          </div>
        </div>
  
        <div className="items">
          {
            this.state.smallImages.map((el, i) => {
              return (
                <div key={i} className="item">
                  <img src={el.src}/>
                  <div className="item-text">
                    {el.percent}<br />
                    {el.text}<br />
                    me<br />
                  </div>
                </div>
              );
            })
          }
        </div>
  
        <div className="result" style={{background: `${this.state.bigImage[0].bg}`}}>
          <span className="percent">{this.state.bigImage[0].percent}</span>
          <div className="image">
            <img src={this.state.bigImage[0].src}/>
          </div>  
  
          <div className="name">
            <div>
              {this.state.bigImage[0].text}
            </div>
          </div>

          <div className="actions">
              <button className="more" onClick={this.props.go} data-to="more">
                УЗНАТЬ БОЛЬШЕ
              </button>
              <button className="post" onClick={this.post}>
                ПОДЕЛИТЬСЯ
              </button>
            </div> 
        </div>
        
        <div className='video' dangerouslySetInnerHTML={{ __html: this.state.bigImage[0].video }}></div>

        <div className="description">
          {this.state.bigImage[0].description}
        </div>
      </section>
    )
  }
}

Result.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  answers: store.answers.answers,
  selectedItems: store.answers.selectedItems
});

export default connectRedux(mapStateToProps, { clearAnswer })(Result);
