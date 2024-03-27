import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
    return (
        <View className="bg-red-300 h-[100%] flex justify-center items-center">
            <Text>Open up App.js to start working on your appsa!</Text>
            <StatusBar style="auto" />
        </View>
    );
}