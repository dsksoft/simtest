cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-sim.Sim",
        "file": "plugins/cordova-plugin-sim/www/sim.js",
        "pluginId": "cordova-plugin-sim",
        "merges": [
            "window.plugins.sim"
        ]
    },
    {
        "id": "cordova-plugin-sim.SimAndroid",
        "file": "plugins/cordova-plugin-sim/www/android/sim.js",
        "pluginId": "cordova-plugin-sim",
        "merges": [
            "window.plugins.sim"
        ]
    },
    {
        "id": "com.darktalker.cordova.screenshot.screenshot",
        "file": "plugins/com.darktalker.cordova.screenshot/www/Screenshot.js",
        "pluginId": "com.darktalker.cordova.screenshot",
        "merges": [
            "navigator.screenshot"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-sim": "1.3.3",
    "com.darktalker.cordova.screenshot": "0.1.5"
};
// BOTTOM OF METADATA
});