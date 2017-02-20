/**
 * Created by lihui on 2017/1/20.
 */
import React from 'react'

import {Scene} from 'react-native-router-flux';

export function creatScene({key:aKey, title:aTitle, titleStyle:aTitleStyle, component:aComponent})
{
    return(
        <Scene key = {aKey}
               title = {aTitle}
               component = {aComponent}
               titleStyle = {aTitleStyle}>
        </Scene>
    );
}