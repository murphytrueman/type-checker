const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector('.output')
const originalText = outputTag.innerHTML

sentenceTag.addEventListener("keyup", function() {
  if (this.value) { 
    // if this has any value
    outputTag.innerHTML = this.value
  } else {
    outputTag.innerHTML = originalText
})
