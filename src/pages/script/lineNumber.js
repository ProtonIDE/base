const textarea = document.querySelector('#code')
const lineNumbers = document.querySelector('.line-numbers')
var lineCount = 0

textarea.addEventListener('keyup', event => {
  for (let i = 1; i < textarea.value.length; i++) {
    if (lineCount[i] == '\n') {
      lineCount++
      const numberOfLines = event.target.value.split('\n').length
    }
  }

  var count = 0
  var a = document.getElementById('code')
  for (let i = 0; i < a.value.length; i++) {
    if (a[i] == '\n') {
      count++
      lineNumbers.innerHTML = Array(numberOfLines)
        .fill('<span>' + count + '</span>')
        .join('')
    }
  }
  console.log(count)
})

textarea.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    textarea.value =
      textarea.value.substring(0, start) + '\t' + textarea.value.substring(end)

    event.preventDefault()
  }
})
