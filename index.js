const electron = require('electron')

app = electron.app

const BrowserWindow = electron.BrowserWindow

let win;

// 标识
// 如果 Windows 屏蔽了、或者不提示 Notification，可尝试修改 app.setAppUserModelId()
app.setAppUserModelId("cn.com.xuxiaowei");

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
