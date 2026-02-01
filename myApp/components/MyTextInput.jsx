import {TextInput, StyleSheet} from "react-native";

export function MyTextInput({ style, ...props })
{
    // autoCorrect and autoCapitalize are for the keyboard not the output text
    return (
        <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            {...props}
            style={[defaultStyle, style]}
        />
    );
}

const defaultStyle = StyleSheet.create({
    borderWidth: 1,
    padding: 8,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
});
