
var config = require("../config/config.targetprocess_burndown");
var cronJob = require('cron').CronJob;
var webshot = require('webshot');
var btoa = require('btoa');

try {
    config.options.customHeaders = { Authorization: 'Basic ' + btoa(config.client.username + ':' + config.client.password) }
    var url = config.client.protocol + '://' + config.client.host + config.client.pathToBurnDown;
    new cronJob(config.cronInterval, function() {
        webshot(url, 'public/' + config.publicLocalImagePath, config.options, function (error) {
            if (error) return console.log('Error:', error);
            var version = Math.round(+new Date()/1000);
            send_event(config.eventName, {
                src: '/' + config.publicLocalImagePath + '?' + version
            });
        });
    }, null, true, null);
} catch (error) {
    console.log('Exception: ', error);
}