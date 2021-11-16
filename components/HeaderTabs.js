import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    return (
        <View style={{flexDirection:"row",alignSelf:"center"}}>
        {/* Header Button 1 */}
        <HeaderButton name='Delivery' />
        {/* Header Button 2 */}
        <HeaderButton name='Pick Up' />
        </View>
    )
}

const HeaderButton = (props)=> {
    return (
    <View>
        <TouchableOpacity>
        <Text>{props.name}</Text>
        </TouchableOpacity>
    </View>)
    };