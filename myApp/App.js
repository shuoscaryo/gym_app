import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MyBoxInput } from '@components/MyBoxInput';
import { ExerciseInput } from "@components/ExerciseInput";
import { MyTextInput } from './components/MyTextInput';
import { useState } from 'react';
import { MyButton } from '@components/MyButton';
import { Text } from 'react-native';

function BoxCreatorRow({value, onChangeText, onDelete}) {
    return (
        <View style={boxStyles.row}>
            <MyTextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="name"

                keyboardType="default"
            />
            <MyButton
                onPress={onDelete}
            >
                <Text>X</Text>
            </MyButton>
        </View>
    );
}

function BoxCreator() {
    const [name, setName] = useState("");
    const [rowList, setRows] = useState([]);

    const updateRow = (index, newValue) => {
        setRows(prev => prev.map((val, i) => (i === index ? newValue : val)));
    };
    
    const deleteRow = (index) => {
        setRows(prev => prev.filter((_, i) => (i !== index)));
    };

    const newRow = () => setRows(prev => [...prev, ""]);

    return (
        <View style={boxStyles.main}>
            {/* First Name form */}
            <MyTextInput
                value={name}
                onChangeText={setName}
                placeholder="name"
                style={boxStyles.nameForm}
                keyboardType="default"
            />
            {/* List of all forms that have been added*/}
            <View>
                {rowList.map((value, idx) => (
                    <BoxCreatorRow
                        key={idx}
                        value={value}
                        onChangeText={newVal => updateRow(idx, newVal)}
                        onDelete={() => deleteRow(idx)}
                    />
                ))}
            </View>
            {/* Button to add a new param to box */}
            <View>
                <MyButton
                    onPress={() => newRow()}
                >
                    <Text>+</Text>
                </MyButton>
                <MyButton>

                </MyButton>
            </View>
        </View>
    );
}

const boxStyles = StyleSheet.create({
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
    row: {
        width: "100%",
        flexDirection: "row",
    },
});

export default function App() {
    return (
    <View style={styles.container}>
        <StatusBar style="auto"/>
        <MyBoxInput name="miku" style={{minWidth:"50%"}}/>
        <ExerciseInput/>
        <BoxCreator/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5bb',
        alignItems: 'center',
        justifyContent: 'center',
        gap:10,
    },
});
