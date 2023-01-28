const { contextBridge } = require("electron");
const standardDarkTheme = require("./standardDark.json");
const draculaTheme = require("./dracula.json");
contextBridge.exposeInMainWorld("theme", {
  standardDark: (font) => {
    document.body.style.backgroundColor = standardDarkTheme.backgroundColor;
    document.body.style.fontFamily = font;
    document.body.style.color=standardDarkTheme.textColor
    document.getElementById("sideBar").style.backgroundColor =
      standardDarkTheme.darkColor;
    document.getElementById("themeInfo").innerHTML =
      "Theme: " +
      standardDarkTheme.name +
      ", Made by: " +
      standardDarkTheme.author;
    document.getElementById("themeInfo").style.color =
      standardDarkTheme.textColor;
    document.getElementById("string").style.color =
      standardDarkTheme.syntaxHighlight.string;
    document.getElementById("vari").style.color =
      standardDarkTheme.syntaxHighlight.variable;
    document.getElementById("cmnt").style.color =
      standardDarkTheme.syntaxHighlight.comment;
    document.getElementById("func").style.color =
      standardDarkTheme.syntaxHighlight.function;
    document.getElementById("icon").style.color=standardDarkTheme.textColor
  },
  dracula: (font) => {
    document.body.style.backgroundColor = draculaTheme.backgroundColor;
    document.body.style.fontFamily = font;
    document.body.style.color=draculaTheme.textColor;
    document.getElementById("sideBar").style.backgroundColor =
      draculaTheme.darkColor;
    document.getElementById("themeInfo").innerHTML =
      "Theme: " +
      draculaTheme.name +
      ", Made by: " +
      draculaTheme.author;
    document.getElementById("themeInfo").style.color =
      draculaTheme.textColor;
    document.getElementById("string").style.color =
      draculaTheme.syntaxHighlight.string;
    document.getElementById("vari").style.color =
      draculaTheme.syntaxHighlight.variable;
    document.getElementById("cmnt").style.color =
      draculaTheme.syntaxHighlight.comment;
    document.getElementById("func").style.color =
      draculaTheme.syntaxHighlight.function;
    document.getElementById("icon").style.color = draculaTheme.textColor;
  },
});
