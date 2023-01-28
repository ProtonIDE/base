const { contextBridge, dialog } = require("electron");

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
