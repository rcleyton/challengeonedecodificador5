let textMessage = document.getElementById('message')
let encryptText = document.getElementById('encrypt')
let decryptText = document.getElementById('decrypt')
let showMessage = document.getElementById('showMessage')
let targetImg = document.querySelector('.target-img')
let targetTitle = document.querySelector('.target-title')
let targetText = document.querySelector('.target-text')

encryptText.onclick = () => {
  showMessage.textContent = encrypt(textMessage.value)
  textMessage.value = ''

  targetImg.style.display = 'none'
  targetTitle.style.display = 'none'
  targetText.style.display = 'none'
}

decryptText.onclick = () => {
  showMessage.textContent = decrypt(textMessage.value)
  textMessage.value = ''
}

function encrypt(text) {
  text = text.toLowerCase()
  text = text.replace(/e/g, "enter")
  text = text.replace(/i/g, "imes")
  text = text.replace(/a/g, "ai")
  text = text.replace(/o/g, "ober")
  text = text.replace(/u/g, "ufat")
  return text
}

function decrypt(textEncrypt) {
  textEncrypt = textEncrypt.toLowerCase()
  textEncrypt = textEncrypt.replace(/ufat/g, "u")
  textEncrypt = textEncrypt.replace(/ober/g, "o")
  textEncrypt = textEncrypt.replace(/ai/g, "a")
  textEncrypt = textEncrypt.replace(/imes/g, "i")
  textEncrypt = textEncrypt.replace(/enter/g, "e")
  return textEncrypt
}

function toggleMode() {
  let body = document.body
  let button = document.getElementById("modeButton")
  let aside = document.querySelector("aside")
  let btn = document.querySelector("button")


  if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode")
      button.textContent = "DARK MODE"
      aside.classList.remove("dark-mode")
      btn.classList.remove("dark-mode")
  } else {
      body.classList.add("dark-mode")
      button.textContent = "LIGHT MODE"
      aside.classList.add("dark-mode")
      btn.classList.add("dark-mode")
  }
}