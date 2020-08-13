const calculator = document.getElementById('calculator')
const operator_display = document.getElementById('current_operator')
const output_display = document.getElementById('current_result')
const input_display = document.getElementById('current_input')
let current_output = 0
let current_input_integral = '0'
let current_input_fractional = ''
let input_has_fraction = false
let current_operator = ' '
let is_input_negative = false

function update_output() {
    operator_display.textContent = current_operator
    output_display.textContent = current_output.toString()
    let input_display_text
    if(input_has_fraction) {
        input_display_text = parseInt(current_input_integral).toString() + '.' + current_input_fractional
    } else {
        input_display_text = parseInt(current_input_integral).toString()
    }
    if(is_input_negative) {
        input_display_text = '-' + input_display_text
    }
    input_display.textContent = input_display_text
}

function calculate() {
    console.log(current_output)
    console.log(current_operator)
    const operand1 = current_output
    const operator = current_operator
    let operand2 = input_has_fraction ?
        parseFloat(current_input_integral + '.' + current_input_fractional) : parseInt(current_input_integral)
    operand2 = is_input_negative ? (- operand2) : operand2
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
            is_input_negative = false
            current_input_fractional = ''
            console.log("Operator key pressed " + key.dataset.action)
        } else if(key.matches('.key_action')) {
            if(key.dataset.action === 'decimal') {
                input_has_fraction = true
            } else if(key.dataset.action === 'clear') {
                current_input_integral = '0'
                input_has_fraction = false
                is_input_negative = false
                current_input_fractional = ""
                current_operator = ' '
                current_output = 0
            } else if(key.dataset.action === 'u_minus') {
                is_input_negative = !is_input_negative
                console.log("u_minus pressed" + is_input_negative.toString())
            } else if (key.dataset.action === 'del') {
                if(input_has_fraction) {
                    if(current_input_fractional !== '') {
                        current_input_fractional = current_input_fractional.slice(0, -1)
                    } else {
                        input_has_fraction = false
                    }
                } else {
                    if(parseInt(current_input_integral) !== 0) {
                        current_input_integral = current_input_integral.slice(0, -1)
                    }
                }
            } else if(key.dataset.action === 'calculate') {
                console.log("calculate")
                calculate()
                current_operator = ' '
                current_input_integral = '0'
                input_has_fraction = false
                is_input_negative = false
                current_input_fractional = ''
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