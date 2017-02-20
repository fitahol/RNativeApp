import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
	List,
	ListItem,
	Text,
	SearchBar
} from 'react-native-elements'

class Member extends Component {
	constructor () {
		super()
	}

	render () {
		return (
			<ScrollView keyboardShouldPersistTaps style={styles.mainContainer}>
				<View style={{marginTop: 10, marginBottom: 0}}>
					<SearchBar
						noIcon
						lightTheme
						placeholder='Type Here...' />
				</View>
				<View style={{marginTop: 10, marginBottom: -10}}>
					<ListItem
						roundAvatar
						title='新的朋友'
						avatar={require('../../images/add-user.png')}
					 />
				</View>
				<List containerStyle={{marginBottom: 20}}>
				{
					this.props.memberList.results.map((l, i) => (
						<ListItem
							roundAvatar
							avatar={{ uri: l.portrait }}
							key={i}
							onPress={log}
							title={l.nickname}
							rightTitle="A"
						/>
					))
				}
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
		marginTop: 60
	},
	heading: {
		color: 'white',
		marginTop: 10,
		fontSize: 22
	},
	hero: {
		marginTop: 60,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40,
		backgroundColor: '#69DDFF'
	}
})

export default Member
