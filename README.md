# beMyAppChallenge

## install

- install MongoDB
```
sudo apt-get install mongodb
```
- install dependencies
```
npm install
```
- start the app
```
node app
```
- enjoy the REST api on http://localhost:1337/events

## model

An event has a name and a url. Name is required, Url is required and unique.

You can see the model here: api/models/Event.js

## usage

This app uses [cheerio](https://github.com/cheeriojs/cheerio) to parse webpages, and [agenda](https://github.com/rschmukler/agenda) to ping [lanyrd](http://lanyrd.com/topics/javascript) every 24 hours.
Most of interesting code is here:
- api/services/ParserService.js
- api/services/AgendaService.js
