import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Card,
  SocialIcon,
  Divider,
  ButtonGroup
} from 'react-native-elements'

import * as RNElements from 'react-native-elements'

let styles = {}

const title       = " 关于Fitahol "
const description = "    让健身教练爱不释手的课程&学员管理工具方便快捷的全平台支持，高度可视化的健身数据"
const steps = [
  {
    title: '一、管理更多学员',
    content: '    不仅能够帮助私教整理学员资料，并且能够跟踪每次上课纪录：总课程数、已完成课程、未完成课程、剩余的课程、充值次数……',
    img:'https://api.fitahol.com/static/assets/images/membership.jpg'
  },
  {
    title: '二、降低管理成本',
    content: '    1. 每天提交课表给管理层，很花时间？备课想动作耗时？\n    2. 快速单节排课、记课、备课；批量操作课程。\n    3. 附带庞大的健身动作库和相关视频说明，更方便您定制自己的私有动作库。\n    4. 一键截屏，分享学员、抄送领导，每日课程一目了然。',
    img:'https://api.fitahol.com/static/assets/images/costing.jpg'
  },
  {
    title: '三、学员在线课时预约',
    content: '    学员约课总会询问空闲期时间段？学员也可登录平台绑定私教，随时查看私教每日课程、剩余时间，快捷预约。',
    img:'https://api.fitahol.com/static/assets/images/booking.jpg'
  },
  {
    title: '四、降低课时损失',
    content: '    学员约定时间未到，无故翘课。造成课时费损失？教练好提前3小时推送提醒学员上课，避免学员更改计划而未通知私教。',
    img:'https://api.fitahol.com/static/assets/images/membership.jpg'
  },
  {
    title: '五、学员状态跟踪',
    content: '    不知道学员剩余多少课时？什么时候该续课了？不知道学员健身目标？不知道学员当前与目前的偏差？学员信息中直观显示学员上次上课时间、下次上课时间。学员目标和当前状态可视化的形成对比曲线，辅助教练和学员推进目标。',
    img:'https://api.fitahol.com/static/assets/images/losing.jpg'
  }
]

class About extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

   _renderTitle()
   {
       return(
           <View style={styles.headerContainer}>
             <Text style={styles.heading}>{title}</Text>
           </View>
       );
   }

  _renderDesp()
  {
      return(
          <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
          </View>
      );
  }

  _renderSteps()
  {
      return(
          <View style={styles.descriptionContainer}>
            {
              steps.map((step, i) =>{
                return(
                    <View key={i} style={styles.stepContainer}>
                      <Text style={styles.description}>{step.title}</Text>
                      <Text style={styles.description}>{step.content}</Text>
                      <Image
                          style={styles.image}
                          source={{uri: step.img}} />
                    </View>
                )
              })
            }
          </View>
      );
  }
  render () {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        {this._renderTitle()}
        {this._renderDesp()}
        {this._renderSteps()}
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginTop: 64,
  },
  heading: {
    color: 'black',
    fontSize: 22
  },
  descriptionContainer: {
    marginTop: 20,
    marginLeft:5,
    marginRight:5
  },
  description: {
    paddingTop:5,
    paddingBottom:5,
    color: 'black',
    fontSize: 15,
    lineHeight:25
  },

  stepContainer: {
    marginTop: 20,
    marginLeft:5,
    marginRight:5
  },

  image: {
    flex:1,
    marginTop: 20,
    width: 320,
    height: 213,
    alignSelf: 'center',
  }
})

export default About
