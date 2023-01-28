const { app, BrowserWindow } = require("electron");
const proton = require("./ide.json");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
    },
    width: 900,
    height: 700,
  });

  win.loadFile("src/pages/index.html");
};

app.whenReady().then(() => {
  createWindow();
  if (proton.isDevelopmentVersion) {
    console.log(
      "========Development Info========\nOS: " +
        process.platform +
        "\nProton: " +
        proton.branch +
        " " +
        proton.version
    );
  }
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
