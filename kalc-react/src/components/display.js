import React from "react";
import {useStyletron} from "baseui";

const OperatorDisplay = props => {
    let {operator} = props;
    let [css] = useStyletron();
    return (
        <div
            className={css({
                width: "28px",
                float: "left",
                fontSize: "40px",
                marginTop: "60px",
                paddingLeft: "10px",
                marginLeft: "10px",
            })}
        >
            {operator}
        </div>);

};
const InputDisplay = props => {
    let {inputValue} = props;
    return (
        <div>
            {inputValue}
        </div>
    );
};

const OutputDisplay = props => {
    let {resultValue} = props;
    // let [css] = useStyletron();
    return (
        <div>
            {resultValue}
        </div>
    );
};

const RightDisplay = props => {
    let {inputValue, resultValue} = props;
    let [css] = useStyletron();
    return (
        <div
            className={css({
                textAlign: "right",
                marginLeft: "30px",
                marginRight: "20px",
                float: "right",
                display: "inline-block",
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "calc(80%)",
                whiteSpace: "nowrap",
            })}
            >
            <OutputDisplay resultValue={resultValue} />
            <InputDisplay inputValue={inputValue} />
        </div>
    );
};

const Display = props => {
    let {inputValue, resultValue, operator} = props;
    let [css] = useStyletron();
    return (
        <div
            className={css({
                background: '#E6ECF3',
                margin: '15px 15px 15px 15px',
                fontSize: "50px",
                display: "flow-root",
                borderRadius: "5px",
                color: "black",
                fontFamily: "Anonymous Pro, serif",
                border: "solid 1px black"
            })}
        >
            <OperatorDisplay operator={operator} />
            <RightDisplay inputValue={inputValue} resultValue={resultValue} />
        </div>
    );
};

export default Display;