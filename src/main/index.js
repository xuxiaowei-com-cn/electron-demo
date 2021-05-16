const {app, BrowserWindow} = require('electron')
let path = require('path')
let URL = require('url')

let win
let url

app.on('ready', function () {

    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })

    if (process.env.NODE_ENV !== 'production') {
        url = 'http://localhost:' + process.env.ELECTRON_WEBPACK_WDS_PORT
    } else {
        url = URL.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'false'
        })
    }

    win.loadURL(url)

    win.on('close', function () {
        win = null
    })

})

app.on('window-all-closed', function () {
    app.quit()
})
