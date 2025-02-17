const { app, BrowserWindow } = require("electron");
const path = require('path')
const url = require('url')
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow()
  mainWindow.maximize()
  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow);