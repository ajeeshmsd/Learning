import React from "react";
import {Block} from "baseui/block";

const DigitCard = props => {
    const {head, value} = props;
    return (
        <Block
            backgroundColor={"#E5E5E5"}
            overrides={{
                Block: {
                    style: {
                        fontSize: "24px",
                        textAlign: "center",
                        fontStyle: "Roboto",
                        paddingBottom: "8px"
                    },
                },
            }}
        >
            {head}
            <Block
                backgroundColor={"#C4C4C4"}
                overrides={{
                    Block: {
                        style: {
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            margin: "10px",
                            fontSize: "48px",
                            textAlign: "center",
                        },
                    },
                }}
            >
                {("0" + value).slice(-2)}
            </Block>
        </Block>
    );
}

export default DigitCard;