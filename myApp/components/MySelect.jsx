import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";

export function MySelect() {
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
