const calculator = document.getElementById('calculator')
const operator_display = document.getElementById('current_operator')
const output_display = document.getElementById('current_result')
const input_display = document.getElementById('current_input')
let current_output = 0
let current_input_integral = '0'
let current_input_fractional = ""
let input_has_fraction = false
let current_operator = ' '

function update_output() {
    operator_display.textContent = current_operator
    output_display.textContent = current_output.toString()
    if(input_has_fraction) {
        input_display.textContent = parseInt(current_input_integral).toString() + '.' + current_input_fractional
    } else {
        input_display.textContent = parseInt(current_input_integral).toString()
    }
}

function calculate() {
    console.log(current_output)
    console.log(current_operator)
    const operand1 = current_output
    const operator = current_operator
    const operand2 = input_has_fraction ?
        parseFloat(current_input_integral + '.' + current_input_fractional) : parseInt(current_input_integral)
    switch (operator) {
        case "plus":
            current_output = operand1 + operand2
            break
        case "minus":
            current_output = operand1 - operand2
            break
        case "multiply":
            current_output = operand1 * operand2
            break
        case "divide":
            current_output = operand1 / operand2
            break
        default:
            current_output = operand2
    }
}

update_output()

if(calculator)
{
    calculator.addEventListener('click', e => {
        const key = e.target
        if(!key.matches('button')) {
            return;
        }

        if(key.matches('.key_operator')) {
            calculate()
            current_operator = key.dataset.action
            current_input_integral = '0'
            input_has_fraction = false
            current_input_fractional = ''
            console.log("Operator key pressed " + key.dataset.action)
        } else if(key.matches('.key_action')) {
            if(key.dataset.action === 'decimal') {
                input_has_fraction = true
            }
            console.log("Action key pressed " + key.dataset.action)
        } else if(key.matches('.key_digit')) {
            if(input_has_fraction) {
                current_input_fractional = current_input_fractional + key.textContent
            } else {
                current_input_integral = current_input_integral + key.textContent
            }
            console.log("Number key pressed " + key.textContent)
        }

        update_output()
    })
} else {
    throw "Couldn't find calculator"
}