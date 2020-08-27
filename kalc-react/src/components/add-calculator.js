import React from "react";
import {Button} from "baseui/button";

const AddCalculator = props => {
    let {handler} = props;
    return (
        <div>
            <Button onClick={handler} > + </Button>
        </div>
    );
};

export default AddCalculator;