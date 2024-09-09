const randomNumber = 2 // Math.round(Math.random() * 10)
let xAttempts = 1;

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#InputNumber")

  console.log(inputNumber)

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen01").classList.add("hide")
    document.querySelector(".screen02").classList.remove("hide")

    document
      .querySelector(".screen02 h2")
      .innerText = `Parabéns! você acertou em ${xAttempts}!`
  }
  xAttempts++
}

const tryButton = document.querySelector("#tryButton")
const tryAgainButton = document.querySelector("#tryAgainButton")

tryButton.addEventListener('click', handleTryClick)
tryAgainButton.addEventListener('click', function () {

  document.querySelector(".screen01").classList.remove("hide")
  document.querySelector(".screen02").classList.add("hide")
  xAttempts = 1
})

