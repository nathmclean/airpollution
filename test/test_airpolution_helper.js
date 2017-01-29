/*jshint expr: true*/
'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var AirPolutionHelper = require('../airpollution_helper');
chai.config.includeStack = true;

describe('AirPolutionHelper', function() {
  var subject = new AirPolutionHelper();
  var group;
  describe('#getAirQuality', function() {
    context('with an invalid location', function() {
      it('returns invalid location', function() {
        group = 'GRENWICH';
        return expect(subject.getAirQuality(group)).to.be.rejectedWith(Error);
      });
    });
    context('with a valid location', function() {
      it('returns location', function() {
        group = 'greenwich';
        var value = subject.getAirQuality(group).then(function(obj) {
          return obj['body']['HourlyAirQualityIndex']['@GroupName'].toLowerCase();
        });
        return expect(value).to.eventually.eq(group);
      });
    });
  });
  describe('#formatAirStatus', function() {
    var status = {
      "HourlyAirQualityIndex": {
        "@GroupName": "greenwich",
        "@TimeToLive": "19",
        "LocalAuthority": {
          "@LocalAuthorityCode": "11",
          "@LocalAuthorityName": "Greenwich",
          "@LaCentreLatitude": "51.47879",
          "@LaCentreLongitude": "-0.010677",
          "@LaCentreLatitudeWGS84": "6706427.144723",
          "@LaCentreLongitudeWGS84": "-1188.558203",
          "Site": [
            {
              "@BulletinDate": "2017-01-28 16:00:00",
              "@SiteCode": "GN0",
              "@SiteName": "Greenwich - A206 Burrage Grove",
              "@SiteType": "Roadside",
              "@Latitude": "51.490532",
              "@Longitude": "0.074003",
              "@LatitudeWGS84": "6708526.16964",
              "@LongitudeWGS84": "8237.97627717",
              "Species": [
                {
                  "@SpeciesCode": "NO2",
                  "@SpeciesDescription": "Nitrogen Dioxide",
                  "@AirQualityIndex": "0",
                  "@AirQualityBand": "No data",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "PM10",
                  "@SpeciesDescription": "PM10 Particulate",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Trigger"
                },
                {
                  "@SpeciesCode": "PM25",
                  "@SpeciesDescription": "PM2.5 Particulate",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Trigger"
                }
              ]
            },
            {
              "@BulletinDate": "2017-01-28 16:00:00",
              "@SiteCode": "GN3",
              "@SiteName": "Greenwich - Plumstead High Street",
              "@SiteType": "Roadside",
              "@Latitude": "51.486957",
              "@Longitude": "0.095111",
              "@LatitudeWGS84": "6707887.0378",
              "@LongitudeWGS84": "10587.7080888",
              "Species": [
                {
                  "@SpeciesCode": "NO2",
                  "@SpeciesDescription": "Nitrogen Dioxide",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "O3",
                  "@SpeciesDescription": "Ozone",
                  "@AirQualityIndex": "2",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "PM10",
                  "@SpeciesDescription": "PM10 Particulate",
                  "@AirQualityIndex": "2",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Trigger"
                },
                {
                  "@SpeciesCode": "PM25",
                  "@SpeciesDescription": "PM2.5 Particulate",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Trigger"
                }
              ]
            },
            {
              "@BulletinDate": "2017-01-28 16:00:00",
              "@SiteCode": "GN4",
              "@SiteName": "Greenwich - Fiveways Sidcup Rd A20",
              "@SiteType": "Roadside",
              "@Latitude": "51.4346627060562",
              "@Longitude": "0.0642224671704697",
              "@LatitudeWGS84": "6702412.5486",
              "@LongitudeWGS84": "4535.53633525",
              "Species": [
                {
                  "@SpeciesCode": "NO2",
                  "@SpeciesDescription": "Nitrogen Dioxide",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "PM10",
                  "@SpeciesDescription": "PM10 Particulate",
                  "@AirQualityIndex": "0",
                  "@AirQualityBand": "No data",
                  "@IndexSource": "Measurement"
                }
              ]
            },
            {
              "@BulletinDate": "2017-01-28 16:00:00",
              "@SiteCode": "GR4",
              "@SiteName": "Greenwich - Eltham",
              "@SiteType": "Suburban",
              "@Latitude": "51.45258",
              "@Longitude": "0.070766",
              "@LatitudeWGS84": "6701743.73787",
              "@LongitudeWGS84": "7877.63508548",
              "Species": [
                {
                  "@SpeciesCode": "NO2",
                  "@SpeciesDescription": "Nitrogen Dioxide",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "O3",
                  "@SpeciesDescription": "Ozone",
                  "@AirQualityIndex": "2",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "PM10",
                  "@SpeciesDescription": "PM10 Particulate",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Trigger"
                },
                {
                  "@SpeciesCode": "PM25",
                  "@SpeciesDescription": "PM2.5 Particulate",
                  "@AirQualityIndex": "0",
                  "@AirQualityBand": "No data",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "SO2",
                  "@SpeciesDescription": "Sulphur Dioxide",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                }
              ]
            },
            {
              "@BulletinDate": "2017-01-28 16:00:00",
              "@SiteCode": "GR7",
              "@SiteName": "Greenwich - Blackheath",
              "@SiteType": "Roadside",
              "@Latitude": "51.472504",
              "@Longitude": "-0.012381",
              "@LatitudeWGS84": "6705303.66805",
              "@LongitudeWGS84": "-1378.24661551",
              "Species": [
                {
                  "@SpeciesCode": "NO2",
                  "@SpeciesDescription": "Nitrogen Dioxide",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "PM10",
                  "@SpeciesDescription": "PM10 Particulate",
                  "@AirQualityIndex": "2",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Trigger"
                }
              ]
            },
            {
              "@BulletinDate": "2017-01-28 16:00:00",
              "@SiteCode": "GR8",
              "@SiteName": "Greenwich - Woolwich Flyover",
              "@SiteType": "Roadside",
              "@Latitude": "51.486884",
              "@Longitude": "0.017901",
              "@LatitudeWGS84": "6707873.98752",
              "@LongitudeWGS84": "1992.73020469",
              "Species": [
                {
                  "@SpeciesCode": "NO2",
                  "@SpeciesDescription": "Nitrogen Dioxide",
                  "@AirQualityIndex": "2",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "O3",
                  "@SpeciesDescription": "Ozone",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "PM10",
                  "@SpeciesDescription": "PM10 Particulate",
                  "@AirQualityIndex": "2",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Trigger"
                }
              ]
            },
            {
              "@BulletinDate": "2017-01-28 16:00:00",
              "@SiteCode": "GR9",
              "@SiteName": "Greenwich - Westhorne Avenue",
              "@SiteType": "Roadside",
              "@Latitude": "51.456357",
              "@Longitude": "0.040725",
              "@LatitudeWGS84": "6702418.47577",
              "@LongitudeWGS84": "4533.48626256",
              "Species": [
                {
                  "@SpeciesCode": "NO2",
                  "@SpeciesDescription": "Nitrogen Dioxide",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "O3",
                  "@SpeciesDescription": "Ozone",
                  "@AirQualityIndex": "2",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Measurement"
                },
                {
                  "@SpeciesCode": "PM10",
                  "@SpeciesDescription": "PM10 Particulate",
                  "@AirQualityIndex": "2",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Trigger"
                },
                {
                  "@SpeciesCode": "PM25",
                  "@SpeciesDescription": "PM2.5 Particulate",
                  "@AirQualityIndex": "1",
                  "@AirQualityBand": "Low",
                  "@IndexSource": "Trigger"
                }
              ]
            }
          ]
        }
      }
    }
    context('with a low air pollution', function() {
      it('formats the status as expected', function() {
        expect(subject.formatAirStatus(status)).to.eq('The current air pollution in greenwich is Low.');
      });
    });
  });
});
