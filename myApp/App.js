import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MyBoxInput } from '@components/MyBoxInput';

export default function App()
{
    return (
    <View style={styles.container}>
        <StatusBar style="auto"/>
        <MyBoxInput name="miku"/>
        <Text>Open up App.js to start working on your app!</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
