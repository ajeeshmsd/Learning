import  React, { useEffect, useState } from 'react';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';

import DigitCard from "./digit-card";

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(year, 10, 28) - +new Date();
    let timeLeft;
    if(difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    } else {
        timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    return timeLeft;
};

const Layout = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer=setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <FlexGrid
            flexGridColumnCount='4'
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
            >
            <FlexGridItem> <DigitCard head='Days' value={timeLeft.days} /> </FlexGridItem>
            <FlexGridItem> <DigitCard head='Hours' value={timeLeft.hours} /> </FlexGridItem>
            <FlexGridItem> <DigitCard head='Minutes' value={timeLeft.minutes} /> </FlexGridItem>
            <FlexGridItem> <DigitCard head='Seconds' value={timeLeft.seconds} /> </FlexGridItem>
        </FlexGrid>
    );
}

export default Layout;