import React from 'react'
import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import Header from '../../components/header/Header'
import ClockDown from './clock-down/ClockDown'
import { news } from '../../Test/TestDatabase'

function Home() {

    return (
        <>
            <Header />
            <ScrollView>
                <View className="p-3">
                    <ClockDown />
                    <Text className="text-center text-4xl pt-10">Novosti</Text>
                    <View>
                        <View className="flex-wrap flex-row justify-between">
                            {news.map((news) => {
                                return (
                                    <Pressable
                                        key={news._id}
                                        className="w-[48%] rounded-xl shadow-custom my-3 overflow-hidden"
                                    >
                                        <Image
                                            source={news.image}
                                            alt={news.title}
                                            className="w-full h-[150px]"
                                        />
                                        <View className="px-2 py-3">
                                            <Text className="text-[14px] font-bold">
                                                {news.title}
                                            </Text>
                                        </View>
                                    </Pressable>
                                )
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Home
