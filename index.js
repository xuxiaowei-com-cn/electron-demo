const electron = require('electron')

app = electron.app

const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const ipcMain = electron.ipcMain

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

    ipcMain.on('open-error-dialog', (event, args) => {
        dialog.showErrorBox('错误消息', args == null ? '默认错误消息内容。' : args)
    })


})

app.on('window-all-closed', function () {
    app.quit()
})
