import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../components/header/Header'
import ClockDown from './clock-down/ClockDown'
import { useDispatch, useSelector } from "react-redux"
import { listNews } from "../../Redux/Actions/NewsActions"

function Home() {

    const dispatch = useDispatch()
    const newsList = useSelector(state => state.newsList)

    const { error, loading, news } = newsList;

    useEffect(() => {
        dispatch(listNews());
    }, [dispatch])

    return (
        <>

            <Header />
            <ScrollView>
                <View className="p-3">
                    <ClockDown />
                    <Text className="text-center text-4xl pt-10">Novosti</Text>
                    <View>
                        <View className="flex-wrap flex-row justify-between">
                            {news && news.map((item) => {
                                return (
                                    <Text key={item.id}>{item.title}</Text>
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
