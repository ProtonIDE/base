const textarea = document.querySelector('#code')
const lineNumbers = document.querySelector('.line-numbers')
var number = 0

textarea.addEventListener('keyup', event => {
  lineNumbers.innerHTML = ''
  const numberOfLines = event.target.value.split('\n').length
  for (var i = 1; i < numberOfLines; ++i) {
    var d = document.createElement('span')
    d.innerText = i
    lineNumbers.append(d)
  }
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
