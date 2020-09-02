import React, {useState} from "react";
import {useStyletron} from 'baseui'

import Calculator from "./calculator";
import AddCalculator from "./add-calculator";

const Layout = () => {

    let [count, setCount] = useState(1);
    let [css] = useStyletron();

    let addCalculator = () => {
        setCount(currentCount => currentCount + 1);
    };

    return (
        <div
            className={css({
                position: 'absolute',
                top: '0px',
                left: '0px',
                right: '0px',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: '#E5E5E5'
            })}
        >
            {Array(count).fill(0).map((_j, i) => <Calculator key={i} />)}
            <AddCalculator handler={addCalculator} />
        </div>
        );
};

export default Layout;
