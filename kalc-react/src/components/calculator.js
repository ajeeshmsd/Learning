import React, {useState} from "react";
import {Block} from "baseui/block";
import Display from "./display";
import KeyGrid from "./key-grid";

const Calculator = () => {

    let [operator, setOperator] = useState(" ");
    let [inputValue, setInputValue] = useState('0');
    let [resultValue, setResultValue] = useState(0);
    let [isInputAvailable, setIsInputAvailable] = useState(false);

    let clickHandler = (type, value) => {
      switch (type) {
          case 'digit':
              console.log("digit input");
              break;
          case 'action':
              console.log("action input");
              break;
          case 'operator':
              console.log("operator input");
              break;
          default:
      }
    };

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
            operator={operator}
            inputValue={inputValue}
            isInputAvailable={isInputAvailable}
            resultValue={resultValue}
        />
        <KeyGrid clickHandler={clickHandler}/>
    </Block>;
};

export default Calculator;