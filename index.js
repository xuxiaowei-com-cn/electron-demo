const { app, ipcMain, BrowserWindow } = require('electron')

let win;

app.on('ready', function () {

    win = new BrowserWindow({
        webPreferences: {
            // 是否启用Node集成。
            // 默认值为false 。
            nodeIntegration: true,
            // 是否在单独的JavaScript上下文中运行Electron API和指定的`preload`脚本。 默认为true 。
            // `preload`脚本在其中运行的上下文将只能访问其自己的专用`document`和`window`全局变量，
            // 以及其自己的JavaScript内置集合（`Array`，`Object`，`JSON`等），所有这些对于加载的内容都是不可见的。
            // Electron API仅在`preload`脚本中可用，而在加载的页面中不可用。
            // 加载潜在的不受信任的远程内容时，应使用此选项，以确保加载的内容不会篡改`preload`脚本和所使用的任何Electron API。
            // 此选项使用与Chrome Content Scripts相同的技术。
            // 您可以在开发工具中访问此上下文，方法是在“控制台”选项卡顶部的组合框中选择'Electron Isolated Context'条目
            contextIsolation: false
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
