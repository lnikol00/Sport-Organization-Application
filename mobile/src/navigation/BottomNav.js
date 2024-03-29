import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native';

import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

import Home from '../pages/home/Home';
import User from '../pages/login/user/User';
import FanShop from "../pages/fan-shop/FanShop"
import Info from "../pages/info/Info"
import Gallery from "../pages/gallery/Gallery"

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
    <Pressable
        onPress={onPress}
        className="h-[70] w-[70] rounded-full bg-yellow-300 top-[-30] shadow-sm"
    >
        {children}
    </Pressable>
);
function BottomNav() {
    return (
        <Tab.Navigator
            backBehavior='main'
            initialRouteName='Main'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.tab },
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen name='Info' component={Info} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Ionicons name='information-circle' size={26} className="text-yellow-200" />
                        ) : (
                            <Ionicons name='information-circle-outline' size={26} className="text-black" />
                        )}
                    </View>
                )
            }} />
            <Tab.Screen name='FanShop' component={FanShop} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <FontAwesome5 name='shopping-bag' size={26} className="text-yellow-200" />
                        ) : (
                            <MaterialCommunityIcons name='shopping-outline' size={26} className="text-black" />
                        )}
                    </View>
                )
            }} />
            <Tab.Screen name='Home' component={Home} options={{
                tabBarButton: (props) => <CustomTab{...props} />,
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Entypo name='home' size={26} className="text-yellow-200" />
                        ) : (
                            <AntDesign name='home' size={26} className="text-black" />
                        )}
                    </View>
                )
            }} />
            <Tab.Screen name='User' component={User} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <FontAwesome name='user' size={26} className="text-yellow-200" />
                        ) : (
                            <AntDesign name='user' size={26} className="text-black" />
                        )}
                    </View>
                )
            }} />
            <Tab.Screen name='Gallery' component={Gallery} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Ionicons name='albums' size={26} className="text-yellow-200" />
                        ) : (
                            <Ionicons name='albums-outline' size={26} className="text-black" />
                        )}
                    </View>
                )
            }} />
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: "#FFFFFF",
        height: 80,
    }
})

export default BottomNav
