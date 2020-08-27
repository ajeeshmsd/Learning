import React from "react";
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';

import CalculatorKey from "./calculator-key";

const itemProps = {
  backgroundColor: 'mono300',
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const wideItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({$theme}) => ({
        width: '200%',
      }),
    },
  },
};

const KeyGrid = props => {
  let {clickHandler} = props;
  return (
      <FlexGrid
        flexGridColumnCount='4'
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
        width={"570px"}
        height={"100%"}
        backgroundColor={"transparent"}
        marginLeft={"15px"}
        marginBottom={"10px"}
        border={"solid 1px transparent"}
      >
        <FlexGridItem {...itemProps}> <CalculatorKey value={"AC"} type={"action"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"+/-"} type={"action"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"del"} type={"action"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"+"} type={"operator"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"7"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"8"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"9"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"-"} type={"operator"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"4"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"5"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"6"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"*"} type={"operator"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"1"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"2"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"3"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"/"} type={"operator"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"0"} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"."} type={"action"} clickHandler={clickHandler} /> </FlexGridItem>
        <FlexGridItem {...itemProps}> <CalculatorKey value={"="} type={"action"} clickHandler={clickHandler} /> </FlexGridItem>


    </FlexGrid>
  );
};

export default KeyGrid;