import React from "react";
import {Block} from "baseui/block";

const OperatorDisplay = props => {
    let {operator} = props;
    return (
        <Block
        overrides={{
            Block: {
                style: {
                    width: "28px",
                    float: "left",
                    fontSize: "40px",
                    marginTop: "60px",
                    paddingLeft: "10px",
                    marginLeft: "10px",
                },
            },
        }}>
            {operator}
        </Block>);

};
const InputDisplay = props => {
    let {inputValue} = props;
    return (
        <Block>
            {inputValue}
        </Block>
    );
};

const OutputDisplay = props => {
    let {resultValue} = props;
    return (
        <Block>
            {resultValue}
        </Block>
    );
};

const RightDisplay = props => {
    let {inputValue, resultValue} = props;
    return (
        <Block
            overrides={{
                Block: {
                    style: {
                        textAlign: "right",
                        marginLeft: "30px",
                        marginRight: "20px",
                        float: "right",
                        display: "inline-block",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        width: "calc(80%)",
                        whiteSpace: "nowrap",
                    },
                },
            }}>
            <OutputDisplay resultValue={resultValue} />
            <InputDisplay inputValue={inputValue} />
        </Block>
    );
};

const Display = props => {
    let {inputValue, resultValue, operator} = props;

    return (
        <Block
            background={"#E6ECF3"}
            margin={"15px 15px 15px 15px"}

            overrides={{
                Block: {
                    style: {
                        fontSize: "50px",
                        display: "flow-root",
                        borderRadius: "5px",
                        color: "black",
                        fontFamily: "Anonymous Pro, serif",
                        border: "solid 1px black"
                    },
                },
            }}>
            <OperatorDisplay operator={operator} />
            <RightDisplay inputValue={inputValue} resultValue={resultValue} />
        </Block>
    );
};

export default Display;