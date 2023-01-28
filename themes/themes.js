const { contextBridge } = require("electron");
const standardDarkTheme = require("./standardDark.json");
const draculaTheme = require("./dracula.json");
const sideBar = document.getElementById("sideBar");
const themeInfo = document.getElementById("themeInfo");
const str = document.getElementById('string')
const variable = document.getElementById("vari");
const comment = document.getElementById("cmnt");
const funct = document.getElementById("func");
contextBridge.exposeInMainWorld("theme", {
  standardDark: (font) => {
    document.body.style.backgroundColor = standardDarkTheme.backgroundColor;
    document.body.style.fontFamily = font;
    sideBar.style.backgroundColor = standardDarkTheme.darkColor;
    themeInfo.innerText = "Theme: " + standardDarkTheme.name + " Made by: " + standardDarkTheme.author;
    str.style.color=standardDarkTheme.syntaxHighlight.string
    variable.style.color=standardDarkTheme.syntaxHighlight.variable
    comment.style.color=standardDarkTheme.syntaxHighlight.comment
    funct.style.color=standardDarkTheme.syntaxHighlight.function
  },
  dracula: (font) => {
    document.body.style.backgroundColor = draculaTheme.backgroundColor;
    document.body.style.color = draculaTheme.textColor;
    document.body.style.fontFamily = font;
    sideBar.style.backgroundColor = draculaTheme.darkColor;
    themeInfo.innerText ="Theme: " + draculaTheme.name + " Made by: " + draculaTheme.author;
  },
});
