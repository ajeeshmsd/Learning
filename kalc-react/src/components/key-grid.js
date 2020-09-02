import React from "react";
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {useStyletron} from "baseui";

import CalculatorKey from "./calculator-key";

const itemProps = {
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  tabIndex: '-1'
};

// const wideItemProps = {
//   ...itemProps,
//   overrides: {
//     Block: {
//       style: ({$theme}) => ({
//         width: `calc((200% - ${$theme.sizing.scale400}) / 3)`,
//       }),
//     },
//   },
// };

const KeyGrid = props => {
  let {clickHandler} = props;
  let [css] = useStyletron();
  return (
      <div
        className={css({
          height: '100%',
          marginLeft: '15px',
          marginBottom: '10px',
          marginRight: '15px',
        })}
        >
          <FlexGrid
            flexGridColumnCount='4'
            flexGridColumnGap="scale400"
            flexGridRowGap="scale400"
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
            <FlexGridItem {...itemProps}> <CalculatorKey value={"0"} type={"action"} clickHandler={clickHandler} /> </FlexGridItem>
            <FlexGridItem {...itemProps}> <CalculatorKey value={"."} type={"digit"} clickHandler={clickHandler} /> </FlexGridItem>
            <FlexGridItem display={'none'}> <CalculatorKey /> </FlexGridItem>
            <FlexGridItem {...itemProps}> <CalculatorKey value={"="} type={"action"} clickHandler={clickHandler} /> </FlexGridItem>
        </FlexGrid>
      </div>
  );
};

export default KeyGrid;