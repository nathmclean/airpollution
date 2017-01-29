[![Build Status](https://travis-ci.org/nathmclean/airpollution.svg?branch=master)](https://travis-ci.org/nathmclean/airpollution)
# Description
An Alexa Skill that uses [London Air Org](http://www.londonair.org.uk/LondonAir/API/ "London Air Orgs") API to return the current hourly forecast for a given area. Currently returns the highest value for an area.

## Improvement
This Skill is still work in progress. There are a number of other features that may be added.

* Ask Alexa for the current health advice for a given location
* Ask Alexa for the current level of a specific pollutant (e.g. CO, NO2, PH2.5 or PH10) in an area 
* Ask Alexa for the daily forcast (rather than the current/hourly forecast currently supplied)

# Contributing

Tests should be written and passing for any new helpers for new features that are added.
Test the new features work in [Alexa-app-server](https://github.com/alexa-js/alexa-app-server "Alexa-app-server") (simulates the skill and allows inputs as a user would provide them.

Clone [Alexa-app-server](https://github.com/alexa-js/alexa-app-server "Alexa-app-server") and then clone/copy the airpollution repo into the examples/apps directory of the Alexa-app-server repo. `node server` from the example directory and then you'll be able to interact with the airpollution skill from http://localhost:8080/airpollution.
