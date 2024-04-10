import React from 'react'
import { View, Text } from 'react-native'

function ClockDown({ timerDays, timerHours, timerMinutes, timerSeconds }) {
    return (
        <View>
            <View className="flex justify-center items-center gap-10 pt-5">
                <View className="text-center">
                    <Text className='text-3xl font-semibold'>27. Maraton lađa </Text>
                    <Text className='text-xl font-semibold' >Metković - Opuzen - Ploče</Text>
                </View>
                <View>
                    <View>
                        <View className="relative m-auto flex justify-end items-center flex-row gap-10">
                            <View className='block'>
                                <View className='flex justify-center items-center pb-5'>
                                    <Text className='flex bg-yellow-300 m-1 h-[50px] w-[135px] text-xl border-black border-[1px] text-center pt-[10px]'>{timerDays}</Text>
                                    <Text className="text-lg pt-2">Dana</Text>
                                </View>
                                <View className='flex justify-center items-center'>
                                    <Text className='flex bg-yellow-300 m-1 h-[50px] w-[135px] text-xl border-black border-[1px] text-center pt-[10px]'>{timerHours}</Text>
                                    <Text className="text-lg pt-2">Sati</Text>
                                </View>
                            </View>
                            <View className='block'>
                                <View className='flex justify-center items-center pb-5'>
                                    <Text className='flex bg-yellow-300 m-1 h-[50px] w-[135px] text-xl border-black border-[1px] text-center pt-[10px]'>{timerMinutes}</Text>
                                    <Text className="text-lg pt-2">Minuta</Text>
                                </View>
                                <View className='flex justify-center items-center'>
                                    <Text className='flex bg-yellow-300 m-1 h-[50px] w-[135px] text-xl border-black border-[1px] text-center pt-[10px]'>{timerSeconds}</Text>
                                    <Text className="text-lg pt-2">Sekundi</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ClockDown
