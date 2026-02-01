import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { MyTextInput } from "@components/MyTextInput";
import { MyButton } from "@components/MyButton";
import { MySelect } from "@components/MySelect";

export function MyBoxInput({name})
{
    const [text, setText] = useState("");
    useEffect(() => {
        console.log(`(${text})  cool text !`)
    }, [text]);
    
    return (
        <View style = {defaultStyle}>
            <Text>{name}</Text>
            <MyButton onPress={()=>{}} text="add"/>
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

const defaultStyle = StyleSheet.create({
    dispaly: "flex",
    padding:"10",
    borderRadius: 5,
    backgroundColor: "#0aa",
    width:"100%",
});