import React from 'react'
import Header from '../../components/header/Header'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Basic from './Basic';
import Buildings from './Buildings';
import Organization from './Organization';

const Tab = createMaterialTopTabNavigator();

function Info() {
    return (
        <>
            <Header />
            <Tab.Navigator
                initialRouteName='Basic'
                screenOptions={{
                    tabBarActiveTintColor: "black",
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarStyle: { backgroundColor: 'white' }
                }}
            >
                <Tab.Screen
                    name='Basic'
                    component={Basic}
                    options={{ tabBarLabel: "Općenito" }}
                />
                <Tab.Screen
                    name='Buildings'
                    component={Buildings}
                    options={{ tabBarLabel: "Objekti" }}
                />
                <Tab.Screen
                    name='Organization'
                    component={Organization}
                    options={{ tabBarLabel: "Udruga" }}
                />

            </Tab.Navigator>
        </>
    )
}

export default Info
