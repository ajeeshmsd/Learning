import React, {useState} from "react";
import {Block} from "baseui/block";
import Display from "./display";
import KeyGrid from "./key-grid";

let calculate = (opcode, operand1, operand2) => {
    switch (opcode) {
        case '+' : return operand1 + operand2;
        case '-' : return operand1 - operand2;
        case '*' : return operand1 * operand2;
        case '/' : {
            if(operand2 === 0) throw Error("Division by zero error");
            return operand1 / operand2;
        }
        case ' ' : return operand2;
        default : throw Error("Unknown opcode" + opcode);
    }
}

const Calculator = () => {

    let [currentOperator, setCurrentOperator] = useState(" ");
    let [inputValue, setInputValue] = useState('0');
    let [resultValue, setResultValue] = useState(0);
    let [isInputAvailable, setIsInputAvailable] = useState(false);

    let clickHandler = (type, value) => {
      switch (type) {
          case 'digit':
              return digitInputHandler(value);
          case 'action':
              return actionInputHandler(value);
          case 'operator':
              if(value === '-' && ! isInputAvailable) {
                  return actionInputHandler("u_minus")
              } else {
                  return operatorInputHandler(value)
              }
          default:
              throw Error("Unknown click");
      }
    };

    let digitInputHandler = digit => {
        let inp = inputValue;
        if(parseFloat(inp) === 0 && !inp.includes('.')) {
           inp = inp.slice(0, -1);
        }
        inp += digit
        setInputValue(inp);
        setIsInputAvailable(true);
    };

    let actionInputHandler = action => {
        switch (action) {
            case 'del':
            case 'Backspace' : {
                let inp = inputValue.slice(0, -1);
                if (!inp) {
                    setIsInputAvailable(false);
                    setInputValue("0");
                } else {
                    setInputValue(inp);
                }
                break;
            }
            case 'AC' : {
                setInputValue("0");
                setIsInputAvailable(false);
                setResultValue(0);
                setCurrentOperator(" ");
                break;
            }
            case '.' : {
                if (!inputValue.includes('.')) {
                    setInputValue(inputValue + '.');
                    setIsInputAvailable(true);
                }
                break;
            }
            case 'Enter':
            case '=' : {
                if (!isInputAvailable || currentOperator === ' ') {
                    return;
                }
                setResultValue(calculate(currentOperator, resultValue, parseFloat(inputValue)));
                setCurrentOperator(" ");
                setInputValue("0");
                setIsInputAvailable(false);
                break;
            }case 'u_minus':
            case '+/-' : {
                if (!inputValue.includes('-')) {
                    setInputValue('-' + inputValue);
                } else {
                    setInputValue(inputValue.slice(1));
                }

                break;
        }
            default:
                throw Error("Unknown action " + action);
        }
    };

    let operatorInputHandler = operator => {
        console.log(resultValue);
        console.log(currentOperator)
        console.log(inputValue)
        setResultValue(prevResultValue => calculate(currentOperator, prevResultValue, parseFloat(inputValue)));
        setCurrentOperator(operator);
        setInputValue("0");
        setIsInputAvailable(false);
    }

    return <Block
    background={"#E5E5E5"}
    margin={"auto"}

    overrides={{
        Block: {
            style: {
                background: "white",
                    borderRadius: "5px",
                    border: "solid 1px black",
                    margin: "10em auto 1em",
                    width: "600px",
                    outline: "none"
            },
        },
    }}
    >
        <Display
            operator={currentOperator}
            inputValue={inputValue}
            isInputAvailable={isInputAvailable}
            resultValue={resultValue}
        />
        <KeyGrid clickHandler={clickHandler}/>
    </Block>;
};

export default Calculator;