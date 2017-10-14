# ung-back
backend server for The ung website

## How to install the server:

- Have node.js and mongoDB installed on your computer
- clone the git repository
- type on your CLI `npm install` when you are in the folder of the repository
- run mongoDB and type `npm run start` to run the server
- the default port for the server is `localhost:3000` to change it, go in `/config/default.json` and change the `port` value

## Config

If you want to change the parameters, go into `/config/default.json`, if you have a specific config for the production,
change the file `/config/production.json`

## API:

#### GET

`/` to check if the server is ready