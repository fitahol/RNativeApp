/**
 * Created by lihui on 2017/1/20.
 */
import React, { Component } from 'react'
import { Text} from 'react-native'
import {
		Scene,
} from 'react-native-router-flux'

import NavColors from '../../config/navColors'

import Home from '../../pages/home'
import Account from '../../pages/account'
import Member from '../../pages/member'

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
		return (
				<Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
		);
}

const tabbarItems = [
		{
				tabItem: {
						key: "tab_home",
						tabtitle: '课程',
						title: '课程',
						icon: {TabIcon},
						component: {Home}
				},
				child: {
						key:"home",
						component: {Home},
						title:"课程",
						titleStyle:{color: 'white'}
				}
		 },
		{
				key:"tab_member",
				tabtitle: '学员',
				title: '课程',
				icon: {TabIcon},
				component:{Member},
				child:{}
		},
		{
				key:"tab_account",
				tabtitle: '我的',
				title: '我的',
				icon: {TabIcon},
				component:{Account},
				child:{}
		}
]

export function tabbar ()
{
		return (
				// TODO: LIHUI 此处使用 上边的 tabbarItems 循环初始化, 稍后修改
				<Scene key="tabbar" tabs={true}  tabBarStyle={{ backgroundColor: '#FFFFFF' }} >
						{/* Tab and it's scenes */}
						<Scene key="tab_home" title="课程" icon={TabIcon} initial={true} navigationBarStyle={{ backgroundColor: NavColors.backgroundColor }}>
								<Scene key="home"
											 component={Home}
											 title="课程"
											 titleStyle={{ color: 'white' }}
								/>
						</Scene>
						{/* Tab and it's scenes */}
						<Scene key="tab_member" title="学员" icon={TabIcon} navigationBarStyle={{ backgroundColor: NavColors.backgroundColor }}>
								<Scene
										key="member"
										component={Member}
										title="学员"
										titleStyle={{ color: 'white' }}
								/>
						</Scene>
						{/* Tab and it's scenes */}
						<Scene key="tab_account" title="我的" icon={TabIcon} navigationBarStyle={{ backgroundColor: NavColors.backgroundColor }}>
								<Scene
										titleStyle={{ color: 'white' }}
										key="account"
										component={Account}
										title="我的"
								/>
						</Scene>
				</Scene>
		);
}
