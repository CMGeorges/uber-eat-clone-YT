import React from 'react'
import { View, Text } from 'react-native'

export default function HeaderTabs() {
    return (
        <View>
        {/* Header Button 1 */}
        <HeaderButton />
        {/* Header Button 2 */}
            
        </View>
    )
}

const HeaderButton = ()=> {return (<Text>Delivery</Text>)}