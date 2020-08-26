import React from "react";
import {Block} from "baseui/block/index";

const DigitCard = props => {
    const {head, value} = props;
    return (
        <Block
            display="flex"
            height={['20px', '40px', '80px', '160px']}
            backgroundColor="primary200"
        >{head}<br />{value}</Block>
    );
}

export default DigitCard;