import React, { Component } from 'react'
import { Navigator } from 'react-native'
import Member from './Member'
import navigationBar from 'HSNavBar'

class MemberNav extends Component {
	constructor () {
		super()
		this.renderScene = this.renderScene.bind(this)
	}

	componentWillMount() {
		function dataFilter(data=[]) {
			console.log("componentWillMount", data)
			const letterData = []
			for (const each of data) {
				if (letterData.indexOf(each.first_letter) !== -1) {
					each.first_letter = ''
				} else {
					letterData.push(each.first_letter)
				}
			}
			return data
		}

		this.props.fetchRequest(
			'/account/member/',
			{ querys: {
				time: Date.now()
			} },
			'memberList',
			dataFilter
		)
	}

	renderScene (route, navigator) {
		console.log("renderScene route", route)
		return (
			<route.component navigator={navigator} {...route.passProps} />
		)
	}
	render () {
		let memberList = this.props.memberList && JSON.parse(this.props.memberList).results
		console.log("nav.props.memberList", memberList)
		let initialRoute = {component: Member, title: "学员"}
		if(memberList){
			initialRoute.passProps = {"memberList": memberList}
			return (
				<Navigator
					navigationBar={navigationBar()}
					initialRoute={initialRoute}
					renderScene={this.renderScene.bind(this)} />
			)
		}
		return null

	}
}

export default MemberNav
