import React, { Component } from 'react'
import { ScrollView, View, ListView, StyleSheet } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Actions} from "react-native-router-flux";

import  About from '../about/index'
import {
	Button,
	Text,
	FormInput,
	List,
	ListItem
} from 'react-native-elements'

let styles = {}

const list1 = [
	{
		title: '我的消息',
		avatar_url: require('../../images/email.png'),
		icon: 'notifications'
	},
	{
		title: '课程统计',
		avatar_url: require('../../images/pie-chart.png'),
		icon: 'insert-chart'
	},
	{
		title: '手机绑定',
		avatar_url: require('../../images/smartphone.png'),
		icon: 'phonelink-setup'
	},
	{
		title: '用户反馈',
		avatar_url: require('../../images/feedback.png'),
		icon: 'feedback'
	},
	{
		title: '关于Fitahol',
		avatar_url: require('../../images/idea.png'),
		icon: 'whatshot'
	}
]

const log = () => console.log('this is an example method')

class Account extends Component {
	constructor () {
		super()
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		this.state = {
			dataSource: ds.cloneWithRows(list1)
		}
		this.renderRow = this.renderRow.bind(this)
	}

	renderRow (rowData, sectionID) {
		return (
			<ListItem
				avatar={rowData.avatar_url}
				key={sectionID}
				avatarStyle={styles.icon}
				onPress={Actions.about}
				title={rowData.title}
			/>
		)
	}

	render () {
		return (
			<ScrollView keyboardShouldPersistTaps style={styles.mainContainer}>
				<View style={styles.hero}>
					<Icon color='#333' name='sentiment-very-satisfied' size={62} />
					<Text style={styles.heading}>100023 | 用户名</Text>
				</View>
				<List>
					<ListView
						renderRow={this.renderRow}
						dataSource={this.state.dataSource}
						/>
				</List>
			</ScrollView>
		)
	}
}

styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#ebedf1'
	},
	container: {
		marginTop: 40
	},
	heading: {
		color: '#333',
		marginTop: 5,
		marginBottom: -10,
		fontSize: 18
	},
	icon: {
		marginLeft: 10,
		marginRight: 15
	},
	hero: {
		marginTop: 40,
		marginBottom: -10,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40,
		backgroundColor: '#fff'
	}
})

export default Account
