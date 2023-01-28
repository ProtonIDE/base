const { contextBridge } = require('electron')
const standardDarkTheme = require('./standardDark.json')
const draculaTheme = require('./dracula.json')

contextBridge.exposeInMainWorld('syntax', {
  standardDark: () => {
    document.getElementById('string').style.color =
      standardDarkTheme.syntaxHighlight.string
    document.getElementById('vari').style.color =
      standardDarkTheme.syntaxHighlight.variable
    document.getElementById('cmnt').style.color =
      standardDarkTheme.syntaxHighlight.comment
    document.getElementById('func').style.color =
      standardDarkTheme.syntaxHighlight.function
    document.getElementById('icon').style.color = standardDarkTheme.textColor
  },
  draculaDark: () => {
    document.getElementById('string').style.color =
      draculaTheme.syntaxHighlight.string
    document.getElementById('vari').style.color =
      draculaTheme.syntaxHighlight.variable
    document.getElementById('cmnt').style.color =
      draculaTheme.syntaxHighlight.comment
    document.getElementById('func').style.color =
      draculaTheme.syntaxHighlight.function
    document.getElementById('icon').style.color = draculaTheme.textColor
  }
})
