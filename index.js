const electron = require('electron')

app = electron.app
let ipcMain = electron.ipcMain

const BrowserWindow = electron.BrowserWindow

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

    ipcMain.on('msg_render2main', (event, param1, param2) => {
        console.log(param1)
        console.log(param2)
        console.log(event.sender)
    })

})

app.on('window-all-closed', function () {
    app.quit()
})
