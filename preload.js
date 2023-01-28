const { contextBridge, dialog } = require("electron");
const theme = require("/themes.json");
require("fs")
  .readdirSync(controllerPath)
  .forEach(function (file) {
    require(file);
  });

contextBridge.exposeInMainWorld("theme", {
  setTheme: (THEMENAME) => {
    if (theme == THEMENAME) {
      document.body.style.backgroundColor = theme.THEMENAME.backgroundColor;
      document.body.style.color = theme.THEMENAME.textColor;
    } else {
        window.alert("Theme does not exist\nError")
    }
  },
});

contextBridge.exposeInMainWorld("proton", {
  openFile: () => {
    dialog
      .showOpenDialog({ properties: ["openFile"] })
      .then(function (response) {
        if (!response.canceled) {
          // handle fully qualified file name
          console.log(response.filePaths[0]);
        } else {
          console.log("no file selected");
        }
      });
  },
});
