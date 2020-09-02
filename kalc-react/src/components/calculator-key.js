import React from "react";
import { Button } from "baseui/button";

const CalculatorKey = props => {
    let {value, type, clickHandler} = props;
    return <Button onClick={(event) => clickHandler(event, type, value)
    }
       overrides={{
           BaseButton: {
               style: {
                   outline: "none",
                   // background: '#BACFE8',
                   height: '100%',
                   width: '100%',
               },
           },
       }}
    > {value} </Button>
};

export default CalculatorKey;