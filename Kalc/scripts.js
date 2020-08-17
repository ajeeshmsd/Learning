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

    constructor() {
        this.#operator_display = document.getElementById('current_operator');
        this.#output_display = document.getElementById('current_result');
        this.#input_display = document.getElementById('current_input');

        document.getElementById('calculator').addEventListener('click', event => {
            const key = event.target;
            if(!key.matches('button')) {
                return;
            }
            if(key.matches('.key_operator')) {
                this.#operator_input(key.dataset.action);
            } else if(key.matches('.key_action')) {
                this.#action_input(key.dataset.action);
            } else if(key.matches('.key_digit')) {
                this.#digit_input(key.textContent);
            }
            this.#update_display();
        });

        window.addEventListener('keydown', event => {
            const key = event.key
            if (key >= '0' && key <= '9') {
                this.#digit_input(key)
            } else if(key === '+' || key === '-' || key === '*' || key === '/') {
                this.#operator_input(key);
            } else if(key === 'Backspace' || key === '=' || key === '.') {
                this.#action_input(key)
            } else {
                console.log(key)
            }
            this.#update_display();
        });

        this.#all_clear();
    }

    #digit_input(digit) {
        this.#input_not_given = false;
        if(parseFloat(this.#current_input) === 0) {
            this.#current_input = this.#current_input.slice(0, -1);
        }
        this.#current_input += digit;
        console.log("Digit: " + digit);
    }

    #operator_input(operator) {
        if(this.#input_not_given) {
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

        this.#update_display();
    }

    #update_display() {
        switch (this.#current_operator) {
            case '*' : {
                this.#operator_display.textContent = '*';
                break;
            }
            case '/' : {
                this.#operator_display.textContent = '/';
                break;
            }
            default : this.#operator_display.textContent = this.#current_operator;
        }

        this.#output_display.textContent = this.#current_output.toString();

        this.#input_display.textContent = this.#current_input;

        if(this.#input_not_given) {
            this.#input_display.style.color = 'red';
        } else {
            this.#input_display.style.color = 'blue';
        }
    }

    static #calculate(opcode, operand1, operand2) {
        switch (opcode) {
            case '+' : return operand1 + operand2;
            case '-' : return operand1 - operand2;
            case '*' : return operand1 * operand2;
            case '/' : return operand1 / operand2;
            case ' ' : return operand2;
            default : throw "Unknown opcode";
        }
    }
}

new Calculator();
