# Chess App
Just a random Chess App

## Config
Open the file `src\config\config.json`

<b>To use Server :</b>

Set `USE_SERVER` to `true` and set `SERVER_URL` to the server url along with the route to the api.

The API expects a json response `{ move: <chess move eg: e5> }`

<b>To play random moves :</b>

Set `USE_SERVER` to `false`, this will have the Chess provide a list of next possible moves and just pick one at random.

## Setup

1. `npm install`
2. `npm run start`

