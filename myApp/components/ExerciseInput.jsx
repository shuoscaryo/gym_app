import { View, Text, StyleSheet,Image } from "react-native";
import { useState } from "react";
import { MyTextInput } from "@components/MyTextInput";
import { MyButton } from "@components/MyButton";

export function ExerciseInput({name="name", style})
{
    const [text, setText] = useState("");
    const [reps, setReps] = useState(0);
    
    return (
        <View style = {[styles.main, style]}>
            <Image
                source={require("@/assets/icon.png")}
                style={styles.sidePhoto}
            />
            <View style={styles.sideView}>
                <Text>{name}</Text>
                <View style={styles.formDiv}>
                    <MyTextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="Weight"
                        keyboardType="numeric"
                    />
                    <MyTextInput
                        value={reps}
                        onChangeText={setReps}
                        placeholder="reps"
                        keyboardType="numeric"
                    />
                </View>
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
        gap:10,
    },
    formDiv: {
        flexDirection:"row",
        gap:10,
    }
});
