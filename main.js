const {
  app,
  BrowserWindow,
  Menu
} = require('electron')
const url = require("url");
const path = require("path");

let appWindow;
let template = [];

function initWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Electron Build Path
  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // Initialize the DevTools.
  appWindow.webContents.openDevTools()
  
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  appWindow.on('closed', function () {
    appWindow = null
  })
}

app.on('ready', initWindow)

// Close when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    initWindow()
  }
})