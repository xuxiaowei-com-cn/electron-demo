let {BrowserWindow} = require('electron')

exports.makeWin = function () {
    return new BrowserWindow(({
        webPreferences: {
            nodeIntegration: true
        }
    }));
}
