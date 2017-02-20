import React, { Component } from 'react'
import Member from './memberCompontent'

class MemberSence extends Component {
	constructor () {
		super()
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

	render () {
		return (
			<Member memberList={this.props.memberList} />
		)
	}
}

MemberSence.defaultProps = {
	memberList: {}
}
