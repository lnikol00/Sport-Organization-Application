import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../components/header/Header'
import ClockDown from './clock-down/ClockDown'
import { useDispatch, useSelector } from "react-redux"
import { listNews } from "../../Redux/Actions/NewsActions"

function Home() {

    const [timerDays, setTimerDays] = useState(0)
    const [timerHours, setTimerHours] = useState(0)
    const [timerMinutes, setTimerMinutes] = useState(0)
    const [timerSeconds, setTimerSeconds] = useState(0)

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("August 10, 2024 17:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / (1000));

            if (distance < 0) {
                clearInterval(interval.current);
                setTimerDays(0);
                setTimerHours(0);
                setTimerMinutes(0);
                setTimerSeconds(0);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    }

    useEffect(() => {
        // startTimer();
        console.log("Prvi useEffect")
    }, [])

    const dispatch = useDispatch()
    const newsList = useSelector(state => state.newsList)

    const { error, loading, news } = newsList;

    useEffect(() => {
        // dispatch(listNews());
        console.log("Drugi useEffect")
    }, [dispatch])

    return (
        <>
            <Header />
            <View className="p-3">
                <ClockDown
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                />
                <Text className="text-center text-4xl pt-10">Novosti</Text>
                <ScrollView>
                    <View className="flex-wrap flex-row justify-between">
                        {news && news.map((item) => {
                            return (
                                <Text key={item.id}>{item.title}</Text>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Home
