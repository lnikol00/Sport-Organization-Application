import React from 'react'
import { View, Text } from 'react-native'
import CountDown from "react-native-countdown-component"

function ClockDown() {
    return (
        <View>
            <View className="flex justify-center items-center gap-10 pt-5">
                <View className="text-center">
                    <Text className='text-3xl font-semibold'>27. Maraton lađa </Text>
                    <Text className='text-xl font-semibold' >Metković - Opuzen - Ploče</Text>
                </View>
                <View>
                    <CountDown
                        until={10390719}
                        digitStyle={{
                            backgroundColor: "#FFEA00",
                            borderWidth: 1,
                        }}
                        onFinish={() => alert("Finished!")}
                        timeLabels={{ d: "Dana", h: "Sati", m: 'Minuta', s: 'Sekundi' }}
                        size={30}
                    />
                </View>
            </View>
        </View>
    )
}

export default ClockDown
