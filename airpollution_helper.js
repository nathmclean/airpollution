'use strict';
var _ = require('lodash');
var rp = require('request-promise');
var ENDPOINT = 'http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName\=';
var FORMAT = '/json';

function AirPollutionHelper() {
}

AirPollutionHelper.prototype.requestAirQuality = function(group) {
  return this.getAirQuality(group).then(
    function(response) {
      console.log('success - recieved air quality for ' + group);
      return response.body;
    }
  );
};

AirPollutionHelper.prototype.getAirQuality = function(group) {
  var options = {
    method: 'GET',
    uri: ENDPOINT + group + FORMAT,
    resolveWithFullResponse: true,
    json: true
  };
  return rp(options);
};

AirPollutionHelper.prototype.formatAirStatus = function(airStatus) {
  return _.template('The current air pollution in ${group} is ${status}.')({
    group: this.getGroup(airStatus),
    status: this.getAirPollutionHigh(airStatus)
  });
};

AirPollutionHelper.prototype.getGroup = function(airStatus){
  return airStatus['HourlyAirQualityIndex']['@GroupName'];
};

AirPollutionHelper.prototype.getAirPollutionHigh = function(airStatus){
  var high_val = 1;
  var high_band = 'Low';
  for(var site in airStatus['HourlyAirQualityIndex']['LocalAuthority']['Site']) {
    for(var species in site['Species']) {
      if (parseInt(species["@AirQualityIndex"]) > high_val) {
        high_val = parseInt(species["@AirQualityIndex"]);
        high_band = species["@AirQualityBand"];
      }
    }
  }

  return high_band;
};

module.exports = AirPollutionHelper;
