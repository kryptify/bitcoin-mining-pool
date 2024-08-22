var fs = require('fs');
var async = require('async');
var http = require('http');
var charts = require('./charts.js');

var logSystem = 'chartsDataCollector';
require('./exceptionWriter.js')(logSystem);

console.log('info', logSystem, 'Started');

charts.startDataCollectors();
