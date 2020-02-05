import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Slogan from './panels/Slogan';
import Colors from './panels/Colors';
import Hobby from './panels/Hobby';
import Mood from './panels/Mood';
import Ingredient from './panels/Ingredient';
import Result from './panels/Result';
import More from './panels/More';
import Card from './panels/Card';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Slogan id='slogan' go={go} />
			<Colors id='colors' go={go} />
			<Hobby id='hobby' go={go} />
			<Mood id='mood' go={go} />
			<Ingredient id='ingredient' go={go} />
			<Result id='result' go={go} />
			<More id='more' go={go} />
			<Card id='card' go={go} />
		</View>
	);
}

export default App;

