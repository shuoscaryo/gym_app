# gym_app
react mobile app to track progress in the gym

## **1 Empezar el proyecto**
* **node**: el que ejecuta JS fuera del navegador. python3 file.py = node file.js
* **npm**: lo que instala paquetes, igual que pip
* **nvm**: pyenv, para tener versiones de node con distintas librerías 
* **npx**: como python3 -m. no se :)

### Comandos para instalar
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
nvm use --lts
```
### Crear la carpeta con la app
Con --template blank se crea la app sin nada
```bash
npx create-expo-app@latest <app-name> --template blank
```
### Encender la app
Se supone que tiene que funcionar sin --tunnel pero no me va :3
```bash
cd <app-name>
npx expo start --tunnel
```
