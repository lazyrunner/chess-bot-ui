# Chess App
Just a random Chess App

## Config
Open the file `src\config\config.json`

<b>To use Server :</b>

Set `USE_SERVER` to `true` and set `SERVER_URL` to the server url along with the route to the api.

The API will receive a json of the current board position `{ game: <chess game in pgn format eg:'1. e4 c5 2. f4 Qb6 3. Nc3'}` expects a json response `{ move: <chess move eg: e5> }`

<b>To play random moves :</b>

Set `USE_SERVER` to `false`, this will have the Chess provide a list of next possible moves and just pick one at random.

## Setup

1. `npm install`
2. `npm run start`

