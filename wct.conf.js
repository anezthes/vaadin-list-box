var argv = require('yargs').argv;

module.exports = {
  registerHooks: function(context) {
    var saucelabsPlatforms = [
      'iOS Simulator/iphone@11.3',
      'iOS Simulator/ipad@10.3',
      'Windows 10/microsoftedge@17',
      'Windows 10/internet explorer@11',
      'macOS 10.13/safari@11.1',
      'iOS Simulator/iphone@9.3'
    ];

    var cronPlatforms = [
      'Android/chrome',
      'Windows 10/chrome@59',
      'Windows 10/firefox@54'
    ];

    if (argv.env === 'saucelabs') {
      context.options.plugins.sauce.browsers = saucelabsPlatforms;

    } else if (argv.env === 'saucelabs-cron') {
      context.options.plugins.sauce.browsers = cronPlatforms;
    }
  }
};
