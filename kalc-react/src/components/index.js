import React, {useState} from "react";

import Calculator from "./calculator";
import AddCalculator from "./add-calculator";

const Layout = () => {

    let [count, setCount] = useState(1);

    let addCalculator = () => {
        setCount(currentCount => currentCount + 1);
    };

    let calculators = [];
    for (let i = 0; i < count; ++i) {
        calculators = calculators.concat(<Calculator />);
    }

    return (
        <div>
            {calculators}
            <AddCalculator handler={addCalculator}/>
        </div>);
};

export default Layout;
