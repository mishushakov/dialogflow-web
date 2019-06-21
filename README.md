## 🚨 [DEPRECATION WARNING: THIS PROJECT IS NO LONGER SUPPORTED, MOVE TO DIALOGFLOW FOR WEB V2](https://github.com/MishUshakov/dialogflow-web-v2)

![](https://camo.githubusercontent.com/7bee509b607c0b359b2e00d3bdfd52085002f2cf/68747470733a2f2f692e696d6775722e636f6d2f4a3861544977742e706e67)

---

# Dialogflow for Web

![](https://imgur.com/g3KyOqV.png)

> Dialogflow lets you build conversational interfaces on top of your products and services by providing a powerful natural language understanding (NLU) engine to process and understand natural language input

This is a unofficial Web client for Dialogflow, it was built, to support Google Assistant rich-responses and to make the most out of the Platform available to Web

![](https://imgur.com/YkOoS4h.png)

## What's included

- 100% Progressive Web App, following Google's Material guidlines
- Customizable environment
- Works offline and without JavaScript
- Responsive design
- Contains Search Engine Optimization
- Based on VueJS with Webpack & Live Reload
- WebSpeech API for voice input
- Text-To-Speech output
- Perfect accessibility for disabled users

## Requirements
- NodeJS
- NPM or Yarn
- Basic knowledge in ES6 (JavaScript)
- Dialogflow API Key ([You can get it here](https://dialogflow.com))

## What is supported
- Basic reply (is being displayed and spoken)
- Simple Response (is being spoken)
- Cards
- Carousel Cards
- Lists
- Suggestions Chips
- Link chips
- Combination of all above
- Fancy animations and visual feedback
- Widget mode, for more info see https://github.com/MishUshakov/dialogflow-widget
- Googling unknown requests

# Get started

## Clone the repository to your machine

You can use git or download it directly from github

![](https://imgur.com/bpHE9K6.png)

## Get the dependencies
Open your cloned folder. Then, using your favorite package manager get the dependencies

Example using npm

`npm install`

Example using yarn

`yarn`

## Start development server & build

Open your cloned folder. Then, using your favorite package manager run `dev` command

Example using npm

`npm run dev`

Example using yarn

`yarn dev`

When you done these steps, your default browser should open and redirect you to `localhost:8080`. If the port 8080 is already in use, you can give an `port` argument to connect at specified port

Example using npm

`npm run dev --port 9090`

Example using yarn

`yarn dev --port 9090`

**PLEASE DO NOT USE THE DEVELOPMENT SERVER FOR SERVING YOUR APP, DEVELOPMENT SERVER IS MEANT FOR THE DEVELOPMENT. INSTEAD PLEASE UPLOAD BUILD ARTIFACTS TO A STATIC WEB-SERVER**

## Building for production

Your app will be bundled to `dist/build.js`
To build it you can use npm or yarn

Example using npm

`npm run build`

Example using yarn

`yarn build`

## Customizing App & Connecting your agent

To connect your bot, you first need to create one. You can do it by visiting [Dialogflow website](https://dialogflow.com). Then create your intents and add Google Assistant responses

Open `config.js` and change the `token` variable, to connect your bot. You can also translate the strings to your language

Example

```js
export default {
    app: {
        token: "9d686a47b1de48bab431e94750d1cd87"
    }
}
```

if you want to change the accent color open `src/App.sass` and change the `$color` variable

## Frequently Asked Questions

- Q: I changed the token and the responses are the same as with previous token
- A: Make sure you have **cleaned your cache** and **rebuilt your app**. In Safari go to "Develop" > "Empty Caches". In Chrome: "Developer Tools" > "Application" > "Clear storage" > "Clear site data"

# Thank you, stay updated!