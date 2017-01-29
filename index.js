'use strict';
module.change_code = 1;
var _ = require('lodash');
var Alexa = require('alexa-app');
var app = new Alexa.app('airpollution');
var AirPollutionHelper = require('./airpollution_helper');

app.launch(function(req, res) {
      var prompt = 'For air pollution information tell me a location.';
        res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('airpollution', {
  'slots': {
    'LOCATION': 'GROUP'
  },
  'utterances': ['{|pollution|air pollution} {|in|status} {|info} {|for} {-|LOCATION}']
},
  function(req, res) {
    //get the slot
    var group = req.slot('LOCATION');
    var reprompt = 'Tell me a location you want the air pollution status for.';
if (_.isEmpty(group)) {
      var prompt = 'I didn\'t hear a location. Tell me an location.';
      res.say(prompt).reprompt(reprompt).shouldEndSession(false);
      return true;
    } else {
      var airHelper = new AirPollutionHelper();

airHelper.requestAirQuality(group).then(function(airStatus) {
        console.log(airStatus);
        res.say(airHelper.formatAirStatus(airStatus)).send();
      }).catch(function(err) {
        console.log(err.statusCode);
        var prompt = 'I didn\'t have data for the location ' + group;
        res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
      });
      return false;
    }
  }
);

//hack to support custom utterances in utterance expansion string
var utterancesMethod = app.utterances;
app.utterances = function() {
return utterancesMethod().replace(/\{\-\|/g, '{');
};

module.exports = app;
