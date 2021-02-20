// import electron from "electron"
const electron = require("electron")

function start() {
    browserWindow()
        .loadFile('ui/index.html')
        .catch(error => console.log("error:", error))
        .then(x => console.log(x))
}

function browserWindow() {
    return new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true
        }
    })
}

electron.app.once('ready', start)
