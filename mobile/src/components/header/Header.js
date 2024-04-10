import React from 'react'
import { View, Text, Image } from 'react-native'

function Header() {
    return (
        <View className="flex justify-between items-center flex-row w-[100%] h-[60px] p-2 shadow-lg bg-yellow-300 sticky">
            <Image source={require('../../../assets/header/grb2.png')} className="w-[45px] h-[45px]" />
            <Text className='font-semibold text-lg p-2'>ULŠS</Text>
        </View>
    )
}

export default Header
