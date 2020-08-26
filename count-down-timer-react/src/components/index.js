import  React, { useEffect, useState } from 'react';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';

import DigitCard from "./digit-card";
import {Block} from "baseui/block";

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
        <div>
            <Block
                width={"750px"}
                margin={"auto"}
                marginTop={"200px"}
                backgroundColor={"#E5E5E5"}

                overrides={{
                    Block: {
                        style: {
                            fontSize:"100px",
                            textAlign:"center"
                        },
                    },
                }}
            >
                Welcome to the <br /> New World
            </Block>
            <Block
                width={"750px"}
                margin={"auto"}
                marginTop={"200px"}
            >
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
            </Block>
        </div>
    );
}

export default Layout;