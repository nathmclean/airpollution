#!/bin/bash
curl http://api.erg.kcl.ac.uk/AirQuality/Information/Groups/json | jq . | grep @GroupName | grep -v All | awk -F '"' '{print $4}' > groups
