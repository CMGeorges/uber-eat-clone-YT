import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    return (
        <View style={{flexDirection:"row",alignSelf:"center"}}>
        {/* Header Button 1 */}
        <HeaderButton name='Delivery' btnColor="black" textColor="white"/>
        {/* Header Button 2 */}
        <HeaderButton name='PickUp' btnColor="white" textColor="black"/>
        </View>
    )
}

const HeaderButton = (props)=> {
    return (
        <TouchableOpacity style={{
            backgroundColor: props.btnColor,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}>
        <Text style={{ color: props.textColor }}>{props.name}</Text>
        </TouchableOpacity>
    )};