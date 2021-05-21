<template>
  <div>
    <h3>DLL</h3>
    <input id="numA" type="text"/>
    <input id="numB" type="text"/>
    <button @click="dll">DLL</button>
  </div>
</template>

<script>
const {dialog} = require('@electron/remote')
const ffi = require('ffi-napi')
const path = require('path')
const fs = require("fs")

// 获取 DLL 路径
// eslint-disable-next-line no-undef
let dllPath = path.join(__static, 'dll/myAddDll.dll')

// 修正开发环境的路径
dllPath = dllPath.replace('\\public\\', '\\')

// 修正生产环境的路径
dllPath = dllPath.replace('\\resources\\app.asar\\', '\\')

export default {
  name: "Dll",
  methods: {
    dll() {

      fs.access(dllPath, function (err) {
        if (err) {
          console.error('DLL 文件不存在：', dllPath)
          return dialog.showMessageBox({
            type: 'info',
            title: '返回dll的运算结果',
            message: 'DLL 文件不存在：' + dllPath,
            buttons: ['ok', 'cancel']
          })
        } else {
          console.log('DLL 文件已存在：', dllPath)
        }
      })

      const myAddDll = new ffi.Library(dllPath, {
        'funAdd':
            [
              'int', ['int', 'int']
            ]
      })

      const result = myAddDll.funAdd(
          parseInt(document.getElementById("numA").value),
          parseInt(document.getElementById("numB").value)
      )

      let resultMessage = dialog.showMessageBox({
        type: 'info',
        title: '返回dll的运算结果',
        message: result.toString(),
        buttons: ['ok', 'cancel']
      })

      resultMessage.then((e) => {
        if (e.response === 0) {
          console.log('点击了确定')
        } else {
          console.log('点击了取消')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>