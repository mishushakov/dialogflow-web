![](https://imgur.com/YkOoS4h.png)
![](https://imgur.com/g3KyOqV.png)
![](https://imgur.com/IsVxh0U.png)

# Dialogflow for Web

[![Greenkeeper badge](https://badges.greenkeeper.io/MishUshakov/dialogflow-web.svg)](https://greenkeeper.io/)

This is an unofficial Web client for Dialogflow, i built it, to support Google Assistant rich-responses and to delivery the most out of the Platform. The executable is around 300KB

## What's included

- 100% Progressive Web App, following Google's Material guidlines
- Customizable environment
- 100/100 Google Lighthouse Score
- Works offline and without javascript
- Responsive design
- Service-Worker caching enabled
- The App can be installed to homescreen
- Contains Search Engine Optimisation
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

## What will be supported soon
- Custom inputs and elements using custom payload
- More animations and visual feedback
- Widget mode, where you can add this app as an popup for your website (**WIP**)
- Support for Dialogflow API v2 & Entreprise Edition (Will be in a separate branch)

# Get started

## Clone the repository to your machine

You can use git or download it directly from github

![](https://imgur.com/bpHE9K6.png)

## Get the dependencies
Open your cloned folder. Then, using your favorite package manager get the dependencies.

Example using npm

`npm init`

Example using yarn

`yarn`

## Start development server & build

Open your cloned folder. Then, using your favorite package manager run `dev` command.

Example using npm

`npm run dev`

Example using yarn

`yarn dev`

When you done these steps, your default browser should open and redirect you to `localhost:8080`. If the port 8080 is already in use, you can give an `port` argument to connect at specified port

Example using npm

`npm run dev --port 9090`

Example using yarn

`yarn dev --port 9090`

## Building for production

Your app will be bundled to `dist/build.js`.
To build it you can use npm or yarn

Example using npm

`npm run build`

Example using yarn

`yarn build`


## Customizing App & Connecting your agent

First of all change all `title` and `meta` tags in `index.html`

Then go to `manifest.json` and edit it, add some icons, change the application name and colors.

Open `src` directory

This directory contains source code for the web-app. The App source code is in `App.vue` file. You should change my `accessToken` to yours, so you can connect and use your agent. Optionally you can also change the main color of app, by changing `$color` variable in sass style.

To connect your bot, you first need to create one. You can do it by visiting [Dialogflow website](https://dialogflow.com). Then create your intents and add Google Assistant responses.

Then grab your token and replace current one with yours. You can do it by opening `App.vue` and searching for `new ApiAiClient`.

# Thank you, stay updated!