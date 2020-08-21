class Calculator {

    // Display Objects
    #operator_display;
    #output_display;
    #input_display

    // State values
    #current_output;
    #current_input
    #current_operator;
    #input_not_given

    #ui_element

    constructor(ui_element_) {
        this.#ui_element = ui_element_

        this.#operator_display = this.#ui_element.getElementsByClassName('current_operator')[0];
        this.#output_display = this.#ui_element.getElementsByClassName('current_result')[0];
        this.#input_display = this.#ui_element.getElementsByClassName('current_input')[0];

        this.#ui_element.addEventListener('click', event => {
            try {
                ui_element_.focus(); // Change the focus from key into the whole calculator.
                const key = event.target;
                if (!key.matches('button')) {
                    return;
                }
                key.classList.add("active");
                delay(50).then(() =>
                    key.classList.remove("active"));

                if (key.matches('.key_operator')) {
                    this.#operator_input(key.dataset.action);
                } else if (key.matches('.key_action')) {
                    this.#action_input(key.dataset.action);
                } else if (key.matches('.key_digit')) {
                    this.#digit_input(key.textContent);
                } else {
                    console.log(key);
                }
                this.update_display();
            } catch (err) {
                this.#all_clear();
                this.update_display();
                this.#output_display.textContent = err;
            }
            event.stopPropagation();
        });

        this.#ui_element.addEventListener('keydown', event => {
            try {
                let key = event.key;
                if (key >= '0' && key <= '9') {
                    this.#digit_input(key)
                } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                    this.#operator_input(key);
                } else if (key === 'Backspace' || key === '=' || key === 'Enter' || key === '.') {
                    this.#action_input(key)
                } else {
                    console.log(key)
                    return;
                }
                key = key === 'Enter' ? '=' : key;
                let button = this.#ui_element.getElementsByClassName("key_" + key)[0];
                button.classList.add("active");
                delay(50).then(() =>
                    button.classList.remove("active"));
                this.update_display();
            } catch (err) {
                this.#all_clear();
                this.update_display();
                this.#output_display.textContent = err;
            }
            event.stopPropagation();
        });

        this.#all_clear();
    }

    #digit_input(digit) {
        this.#input_not_given = false;
        if(parseFloat(this.#current_input) === 0 && !this.#current_input.includes('.')) {
            this.#current_input = this.#current_input.slice(0, -1);
        }
        this.#current_input += digit;
        console.log("Digit: " + digit);
    }

    #operator_input(operator) {
        if(this.#input_not_given) {
            if(operator === '-') {
                this.#action_input('u_minus');
            }
            return;
        }
        this.#current_output =
            Calculator.#calculate(this.#current_operator, this.#current_output, parseFloat(this.#current_input));
        this.#current_operator = operator;
        this.#current_input = '0';
        this.#input_not_given = true;
        console.log("Operator: " + operator);
    }

    #action_input(action) {
        switch (action) {
            case 'Backspace' : {
                this.#current_input = this.#current_input.slice(0, -1);
                if(!this.#current_input) {
                    this.#input_not_given = true;
                    this.#current_input = '0';
                }
                break;
            }
            case 'clear' : {
                this.#all_clear();
                break;
            }
            case '.' : {
                if(!this.#current_input.includes('.')) {
                    this.#current_input += '.';
                    this.#input_not_given = false;
                }
                break;
            }
            case 'Enter':
            case '=' : {
                if(this.#input_not_given || this.#current_operator === ' ') {
                    return;
                }
                this.#current_output =
                    Calculator.#calculate(this.#current_operator, this.#current_output, parseFloat(this.#current_input));
                this.#current_operator = ' ';
                this.#current_input = '0';
                this.#input_not_given = true;
                break;
            }
            case 'u_minus' : {
                if(!this.#current_input.includes('-')) {
                    this.#current_input = '-' + this.#current_input;
                } else {
                    this.#current_input = this.#current_input.slice(1);
                }
            }
        }
        console.log("Action: " + action);
    }

    #all_clear() {
        this.#current_output = 0;
        this.#current_input  = '0'
        this.#current_operator = ' ';
        this.#input_not_given = true

        this.update_display();
    }

    update_display() {
        switch (this.#current_operator) {
            case '*' : {
                this.#operator_display.innerHTML = '&times';
                break;
            }
            case '/' : {
                this.#operator_display.innerHTML = '&divide';
                break;
            }
            default : this.#operator_display.textContent = this.#current_operator;
        }

        this.#output_display.textContent = this.#current_output.toString();

        this.#input_display.textContent = this.#current_input;

        if(this.#input_not_given) {
            this.#input_display.classList.remove('input_display_active')
            this.#input_display.classList.add('input_display_inactive');
        } else {
            this.#input_display.classList.remove('input_display_inactive');
            this.#input_display.classList.add('input_display_active')
        }
    }

    static #calculate(opcode, operand1, operand2) {
        switch (opcode) {
            case '+' : return operand1 + operand2;
            case '-' : return operand1 - operand2;
            case '*' : return operand1 * operand2;
            case '/' : {
                if(operand2 === 0) throw "Division by zero error";
                return operand1 / operand2;
            }
            case ' ' : return operand2;
            default : throw "Unknown opcode";
        }
    }
}

window.onload = () => {
    const calculators_div = document.getElementById('calculators');
    let all_calculators = document.getElementsByClassName('calculator');
    const calculator_body = all_calculators[0];
    calculator_body.focus();
    new Calculator(calculator_body);
    document.getElementById("new_button").addEventListener('click', event => {
        const calculator_body_clone = calculator_body.cloneNode(true);
        all_calculators += calculator_body_clone;
        calculators_div.appendChild(calculator_body_clone);
        calculator_body_clone.focus();
        new Calculator(calculator_body_clone);
        event.stopPropagation();
    });

    document.getElementById("form").addEventListener('submit', event => {
        event.preventDefault();

        let count = document.getElementById("form").count.value;
        for(let i = 0; i < count; ++i) {
            console.log(i);
            let calculator_body_clone = calculator_body.cloneNode(true);
            all_calculators += calculator_body_clone;
            calculators_div.appendChild(calculator_body_clone);
            new Calculator(calculator_body_clone);
        }
        event.stopPropagation();
        return false;
    });

    window.addEventListener('click', event => {
        console.log("Default click listener");
    });

    window.addEventListener('keydown', event => {
        console.log('default keyboard event listener');
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
