const { app, BrowserWindow, } = require('electron');
const { version, branch, isDevelopmentVersion } = require('./ide.json')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile('src/pages/index.html')
}

app.whenReady().then(() => {
    createWindow()
    if (isDevelopmentVersion) {
        console.log('========Development Info========\nOS: ' + process.platform + '\nProton: ' + branch + ' ' + version)
    }
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
