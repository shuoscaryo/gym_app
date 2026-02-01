import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { MyTextInput } from '@components/MyTextInput';
import { Picker } from "@react-native-picker/picker";

function CoolButton()
{
    return (null);
}


function MySelect() {
    const [value, setValue] = useState("java");
    useEffect(()=>{
        console.log(`Selected value ${value}`)
    }, [value]);
    return (
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="py" />
      </Picker>
    );
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
                autoCapitalize="characters"
                keyboardType="default"
            />
            <MySelect/>
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
