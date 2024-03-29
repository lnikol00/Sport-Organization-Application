import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated'

function Login() {

    const navigation = useNavigation()

    return (
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            <Image className="h-full w-full absolute" source={require('../../../assets/background.png')} />

            <View className="flex-row justify-around w-full absolute">
                <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" source={require("../../../assets/light.png")} />
                <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[160] w-[65]" source={require("../../../assets/light.png")} />
            </View>

            <View className="h-full w-full justify-around pt-40 pb-10'">
                <View className="flex items-center">
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-black font-bold tracking-wider text-5xl">
                        Prijavi se
                    </Animated.Text>
                </View>

                <View className="flex items-center mx-4 space-y-4">
                    <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                        <TextInput placeholder='Email' placeholderTextColor={'gray'} />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                        <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
                        <TouchableOpacity onPress={() => navigation.push("Bottom")} className="w-full bg-yellow-200 rounded-2xl mb-3 py-3">
                            <Text className="text-xl font-bold text-black text-center">
                                Prijavi se
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
                        <Text>Nemate račun? </Text>
                        <TouchableOpacity onPress={() => navigation.push("Signup")}>
                            <Text className="text-black underline">
                                Registriraj se!
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </View >
    )
}

export default Login
