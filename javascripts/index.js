let textMessage = document.getElementById('message')
let encryptText = document.getElementById('encrypt')
let decryptText = document.getElementById('decrypt')
let showMessageContainer = document.querySelector('.show-message-container')
let showMessage = document.getElementById('showMessage')
let copyButton = document.getElementById('copyButton')
let targetImg = document.querySelector('.target-img')
let targetTitle = document.querySelector('.target-title')
let targetText = document.querySelector('.target-text')

encryptText.onclick = () => {
  showMessage.textContent = encrypt(textMessage.value)
  textMessage.value = ''

  showMessageContainer.classList.add('show')
  targetImg.style.display = 'none'
  targetTitle.style.display = 'none'
  targetText.style.display = 'none'
}

decryptText.onclick = () => {
  showMessage.textContent = decrypt(textMessage.value)
  textMessage.value = ''
}

copyButton.onclick = () => {
  copyToClipboard(showMessage.textContent)
}

// Faz a criptografia do texto
function encrypt(text) {
  text = text.toLowerCase()
  text = text.replace(/e/g, "enter")
  text = text.replace(/i/g, "imes")
  text = text.replace(/a/g, "ai")
  text = text.replace(/o/g, "ober")
  text = text.replace(/u/g, "ufat")
  return text
}

// Faz a descriptografia do texto
function decrypt(textEncrypt) {
  textEncrypt = textEncrypt.toLowerCase()
  textEncrypt = textEncrypt.replace(/ufat/g, "u")
  textEncrypt = textEncrypt.replace(/ober/g, "o")
  textEncrypt = textEncrypt.replace(/ai/g, "a")
  textEncrypt = textEncrypt.replace(/imes/g, "i")
  textEncrypt = textEncrypt.replace(/enter/g, "e")
  return textEncrypt
}

// Altera tema do site quando clica no botão DARK MODE
function toggleMode() {
  var body = document.body
  var button = document.getElementById("modeButton")
  var buttons = document.querySelectorAll("button")
  var aside = document.querySelector("aside")

  if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode")
      button.textContent = "DARK MODE"
      aside.classList.remove("dark-mode")

      buttons.forEach(function(btn) {
          btn.classList.remove("dark-mode")
      })
  } else {
      body.classList.add("dark-mode")
      button.textContent = "LIGHT MODE"
      aside.classList.add("dark-mode")

      buttons.forEach(function(btn) {
          btn.classList.add("dark-mode")
      })
  }
}

// Copia o texto criptgrafado/descriptografado para a área de transferência
function copyToClipboard(text) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)

  copyButton.innerHTML = '<i class="fas fa-check"></i>'
  setTimeout(function() {
    copyButton.innerHTML = '<i class="fas fa-copy"></i>'
  }, 2000)
}