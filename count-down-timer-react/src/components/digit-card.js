import React from "react";
import {Block} from "baseui/block/index";

const DigitCard = props => {
    const {head, value} = props;
    return (
        <Block
            backgroundColor="primary200"
            padding='20px'
        >{head}<br />{value}</Block>
    );
}

export default DigitCard;