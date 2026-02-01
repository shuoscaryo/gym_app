import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { MyTextInput } from '@components/MyTextInput';

function CoolButton()
{
    return (null);
}

function InputBox({name})
{
    const [text, setText] = useState("");
    useEffect(() => {
        console.log(`(${text})  cool text !`)
    }, [text]);
    
    return (
        <View style = {styles.InputBox}>
            <Text>{name}</Text>
            <CoolButton onPress={()=>{}} text="add"/>
            <MyTextInput
                value={text}
                onChangeText={setText}
                placeholder="Write something..."
                keyboardType="numeric"
                autoCorrect={false}
                autoCapitalize="none"
            />
        </View>
    );
}

export default function App()
{
    return (
    <View style={styles.container}>
        <StatusBar style="auto"/>
        <InputBox name="miku"/>
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
    InputBox: {
        dispaly: "flex",
        padding:"10",
        borderRadius: 5,
        backgroundColor: "#0aa",
        width:"100%",
    },
});
