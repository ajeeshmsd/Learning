import React from "react";
import { Button } from "baseui/button";

const CalculatorKey = props => {
    let {value, type, clickHandler} = props;
    return <Button onClick={() => clickHandler(type, value)} > {value} </Button>
};

export default CalculatorKey;