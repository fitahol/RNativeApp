import React, { Component } from 'react'
import { StyleSheet, Platform , Text} from 'react-native'
import {
	Navigation,
	Scene,
	Router
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import navColors from './config/navColors'
import About from './pages/about'

import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'
import { Tabs, Tab } from 'react-native-elements'

import {tabbar} from './components/tabbar'
import {creatScene} from './utils/SceneFactory'

let styles = {}

const RouterWithRedux = connect()(Router);

class App extends Component {
	constructor () {
		super()
		this.state = {
			selectedTab: 'home'
		}
		this.changeTab = this.changeTab.bind(this)
	}
	changeTab (selectedTab) {
		this.setState({
			selectedTab
		})
	}
	render () {
		return (
			<RouterWithRedux>
				<Scene key="root" navigationBarStyle={{ backgroundColor: navColors.backgroundColor }}>
					{tabbar()}
					{creatScene({key:'about', title:'关于', titleStyle:{color:'white'}, component:About})}
				</Scene>
			</RouterWithRedux>
		)
	}
}

styles = StyleSheet.create({
	titleStyle: {
		...Platform.select({
			ios: {
				fontFamily: fonts.ios.black
			}
		})
	},
	titleSelected: {
		color: colors.primary1
	}
})

export default App
