import React from 'react'
import { View, Text } from 'react-native'

export default function HeaderTabs() {
    return (
        <View>
        {/* Header Button 1 */}
        <HeaderButton name='Delivery' />
        {/* Header Button 2 */}
        <HeaderButton name='Pick Up' />
        </View>
    )
}

const HeaderButton = (props)=> {return (<Text>{props.name}</Text>)}