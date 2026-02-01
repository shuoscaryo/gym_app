import { View, Text, StyleSheet,Image } from "react-native";
import { useState, useEffect } from "react";
import { MyTextInput } from "@components/MyTextInput";
import { MyButton } from "@components/MyButton";

export function MyBoxInput({name, style})
{
    const [text, setText] = useState("");
    useEffect(() => {
        console.log(`(${text})  cool text !`)
    }, [text]);
    
    return (
        <View style = {[styles.main, style]}>
            <Image
                source={require("@/assets/icon.png")}
                style={styles.sidePhoto}
            />
            <View>
                <Text>{name}</Text>
                <MyTextInput
                    value={text}
                    onChangeText={setText}
                    placeholder="Write something..."
                    autoCapitalize="characters"
                    keyboardType="default"
                />
            </View>
            <MyButton>
                <Text>add</Text>
            </MyButton>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection:"row",
        padding:"10",
        borderRadius: 5,
        backgroundColor: "#0aa",
        gap:10,
        overflow:"hidden",
        justifyContent:"space-between",
        alignItems:"center",
        elevation: 6,
    },
    sidePhoto: {
        width: 50,
        height:50,
        resizeMode:"containS",
        borderRadius:5,
    },
    sideView: {
        flexDirection:"column",
    },
});
