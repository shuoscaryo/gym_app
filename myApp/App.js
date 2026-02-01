import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MyBoxInput } from '@components/MyBoxInput';

export default function App()
{
    return (
    <View style={styles.container}>
        <StatusBar style="auto"/>
        <MyBoxInput name="miku" style={{minWidth:"50%"}}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5bb',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
