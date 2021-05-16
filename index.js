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
        console.log('主进程接收到消息1', param1)
        console.log('主进程接收到消息2', param2)
        console.log('主进程接收到发送者', event.sender)
        win.webContents.send('msg_main2render', param1, param2)
    })

    ipcMain.on('msg_render3main', (event, param1, param2) => {
        console.log('主进程接收到消息1', param1)
        console.log('主进程接收到消息2', param2)
        console.log('主进程接收到发送者', event.sender)
        // 主进程接收消息的事件的 event.sender 代表发送消息的渲染进程的 webContents，所以可以通过使用这个对象来给对应的窗口发送消息
        event.sender.send('msg_main3render', param1, param2)
        // 原理同上
        // event.reply('msg_main3render', param1, param2)
    })

})

app.on('window-all-closed', function () {
    app.quit()
})
