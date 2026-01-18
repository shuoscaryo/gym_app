# gym_app
react mobile app to track progress in the gym

## **1 Start the project**
* **node**: The one that runs JS outside of browsers. python3 file.py = node file.js.
* **npm**: What installs packages, same as python's pip.
* **nvm**: pyenv. Used to have different libraries in different projects.
* **npx**: like python3 -m. dunno what it does :)

### Commands for installing node and stuff
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
nvm use --lts
```
### Create a new folder with the app
with --template blank the app is created with the minimum things
```bash
npx create-expo-app@latest <app-name> --template blank
```
### Start the app
Use this before starting to develop
Allegedly it can be used without --tunnel but doesn't work for me :3
```bash
cd <app-name>
npx expo start --tunnel
```

## **2 Develop stuff**
It is not possible to add divs manually or do normal JS DOM, here everything
goes through react-native elements.
View is the equivalent of div here.
```bash
import { View } from 'react-native';
<View style={styles.container}></View>
```
Text must go in between Text tags
```bash
import { Text } from 'react-native';
<Text>Hello</Text>
```
Styles are applied with StyleSheet. A variable is created with the styles and is applied to any element by adding "style={styles_var.type_of_style}" inside of the tag.
**There is no global styles**. Each component needs to know what styles will be using. There is no cascade of styles or styles for a tag like "div {div_styles}"
```bash
import { StyleSheet } from 'react-native';
# styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
# Apply the styles to the View element
<View style={styles.container}></View>
```
