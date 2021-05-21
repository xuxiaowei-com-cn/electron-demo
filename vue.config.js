module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['ffi-napi'],
      builderOptions: {
        extraResources: [
          {
            from: "./dll/myAddDll.dll",
            to: "../dll/myAddDll.dll"
          }
        ]
      }
    }
  }
}
