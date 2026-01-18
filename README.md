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
```javascript
import { View } from 'react-native';
<View style={styles.container}></View>
```
Text must go in between Text tags
```javascript
import { Text } from 'react-native';
<Text>Hello</Text>
```
Styles are applied with StyleSheet. A variable is created with the styles and is applied to any element by adding "style={styles_var.type_of_style}" inside of the tag.
**There is no global styles**. Each component needs to know what styles will be using. There is no cascade of styles or styles for a tag like "div {div_styles}".
Also, it is posible to add styles directly without using a variable. Double bracket {{}} is needed for some reason, first brackets indicate a space to place something that is not a string and second ones are the dictionary.
```javascript
import { StyleSheet } from 'react-native';
// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// Apply the styles to the View element
<View style={styles.container}></View>
// avoid. but posible
<View style={{width:100, height:100}}></View>
```
Images can be added with the tag Image. To add an image from the project, it has to be imported either with "require()" or "import" Best with require and put it as source inside the tag. Image is a singular tag. Path "./" is the base of the project.
For images that are remote, **the link must be in a dictionary inside the key "uri"** and also **the width and height must be defined in style** otherwise the image wont show.
```javascript
import { Image } from 'react-native';
// Local images
const photo = require("./assets/icon.png"); // this one better
import photo from "./assets/icon.png"; // also possible
<Image source={photo}/>
// Remote image
const remote_photo = "https://stuf_and_stuf"
<Image source = {{uri: remote_photo}} style={{width:100, height:100}}/>
```
