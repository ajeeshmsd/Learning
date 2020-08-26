import * as React from 'react';
// import { useEffect, useState } from "react";
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';

const itemProps = {
    backgroundColor: 'mono300',
    height: 'scale1000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

// import DigitCard from "./digit-card";

// const calculateTimeLeft = () => {
//     let year = new Date().getFullYear();
//     const difference = +new Date(year, 10, 28) - +new Date();
//     let timeLeft;
//     if(difference > 0) {
//         timeLeft = {
//             days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//             minutes: Math.floor((difference / 1000 / 60) % 60),
//             seconds: Math.floor((difference / 1000) % 60)
//         };
//     } else {
//         timeLeft = {
//             days: 0,
//             hours: 0,
//             minutes: 0,
//             seconds: 0
//         };
//     }
//     return timeLeft;
// };

const Layout = () => {
    // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    // // const [year, setYear] = useState(new Date().getFullYear())
    // useEffect(() => {
    //     const timer=setTimeout(() => {
    //         setTimeLeft(calculateTimeLeft());
    //         // setYear(new Date().getFullYear());
    //     }, 1000);
    //     // Clear timeout if the component is unmounted
    //     return () => clearTimeout(timer);
    // });
    return (
        <FlexGrid
            flexGridColumnCount='4'
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800">
        >
            <FlexGridItem> 1 </FlexGridItem>
            <FlexGridItem> 2 </FlexGridItem>
            <FlexGridItem> 3 </FlexGridItem>
            <FlexGridItem> 4 </FlexGridItem>
        </FlexGrid>
    );
    // return (
    //     <FlexGrid
    //         flexGridColumnCount='4'
    //         // flexGridColumnGap="scale800"
    //         // flexGridRowGap="scale800">
    //         >
    //         <FlexGridItem> <DigitCard head='Days' value={timeLeft.days} /> </FlexGridItem>
    //         <FlexGridItem> <DigitCard head='Hours' value={timeLeft.hours} /> </FlexGridItem>
    //         <FlexGridItem> <DigitCard head='Minutes' value={timeLeft.minutes} /> </FlexGridItem>
    //         <FlexGridItem> <DigitCard head='Seconds' value={timeLeft.seconds} /> </FlexGridItem>
    //     </FlexGrid>
    // );
}

export default Layout;