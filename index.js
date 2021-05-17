const { app, BrowserWindow } = require('electron')

let win;

app.on('ready', function () {

    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')

    win.on('close', function () {
        win = null
    })

})

app.on('window-all-closed', function () {
    app.quit()
})
