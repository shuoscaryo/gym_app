import { Pressable, StyleSheet, Text } from "react-native";

function DefaultButton()
{
    return (
        <Text>Click</Text>
    );
}

export function MyButton({children, style, pressedStyle, ...props})
{
    return (
        <Pressable
            onPress={()=>alert("Button!")}
            style={({ pressed }) => [
                styles.main,
                style,
                pressed && (pressedStyle ?? styles.pressed),
            ]}
            {...props}
        >
            {children ?? <DefaultButton/>}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    main: {
        padding:10,
        backgroundColor:"#eee",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        elevation: 6,
    },
    pressed: {
        opacity:0.6,
        elevation: 2,
    },
});