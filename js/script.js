import { Modal } from './modal.js'
import { AlertError } from './alert-error.js' 
import { calculateIMC, notANumber, displayResultMessege } from './utils.js'


const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessege(result)
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
