const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
config.port = 4723;


// ====================
// Specs
// =====================

config.specs = [
    '../test/specs/android/delete-note-screen*.js'

    //Relative path
    //'webdriverio-appium-v8/test/specs/android/add-note-screen.spec.js'

];

// ====================
// Capabilities
// =====================

config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'Pixel XL',
        'appium:automationName': 'UIAutomator2',
        'appium:app': path.join(process.cwd(), './app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true
        //'appium:app': 'app/android/ApiDemos-debug.apk'
    }
]

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services['appium'];

exports.config = config