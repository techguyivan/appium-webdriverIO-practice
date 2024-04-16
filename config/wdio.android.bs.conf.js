require('dotenv').config()
const { config } = require('./wdio.shared.conf');

// ====================
// Browserstack Credentials
// =====================

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;


// ====================
// Specs
// =====================

config.specs = [
    '../test/specs/android/add-note-screen*.js'

    //Relative path
    //'webdriverio-appium-v8/test/specs/android/add-note-screen.spec.js'

];

// ====================
// Capabilities
// =====================

config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '9.0',
        'appium:deviceName': 'Samsung Galaxy S10',
        'appium:automationName': 'UIAutomator2',
        'appium:app': "bs://e479611d196c38f4ff72740df5d62d623a736f1c",
        'appium:autoGrantPermissions': true
    }
]

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config