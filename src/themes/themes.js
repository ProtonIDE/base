const { contextBridge } = require("electron");
const standardDarkTheme = require("./standardDark.json");
const draculaTheme = require("./dracula.json");
contextBridge.exposeInMainWorld("theme", {
  standardDark: (font) => {
    document.body.style.backgroundColor = standardDarkTheme.backgroundColor;
    document.body.style.fontFamily = font;
    document.body.style.color = standardDarkTheme.textColor;
    document.getElementById("sideBar").style.backgroundColor = standardDarkTheme.darkColor;
    document.getElementById("themeInfo").innerHTML = "Theme: " + standardDarkTheme.name + ", Made by: " + standardDarkTheme.author;
    document.getElementById("themeInfo").style.color = standardDarkTheme.textColor;
    document.getElementById("code").style.backgroundColor = standardDarkTheme.backgroundColor;
    document.getElementById("code").style.color = standardDarkTheme.syntaxHighlight.string;
    document.getElementById("code").style.fontFamily = font;
  },
  dracula: (font) => {
    document.body.style.backgroundColor = draculaTheme.backgroundColor;
    document.body.style.fontFamily = font;
    document.body.style.color = draculaTheme.textColor;
    document.getElementById("sideBar").style.backgroundColor = draculaTheme.darkColor;
    document.getElementById("themeInfo").innerHTML = "Theme: " + draculaTheme.name + ", Made by: " + draculaTheme.author;
    document.getElementById("themeInfo").style.color = draculaTheme.textColor;
    document.getElementById("code").style.backgroundColor = draculaTheme.backgroundColor;
    document.getElementById("code").style.color = draculaTheme.syntaxHighlight.string
    document.getElementById("code").style.fontFamily = font;
  },
});
