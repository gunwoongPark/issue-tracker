import { useMemo } from "react";
import styled, { css } from "styled-components";
import { calcTextColor } from "../../util/calcTextColor";
import type { Label as LabelType } from "../../lib/api/issues/schema";

const LabelItemView = (props: { label: LabelType }) => {
  const labelTextColor = useMemo(
    () => calcTextColor(props.label.color),
    [props.label.color],
  );

  return (
    <Label
      className="label"
      backgroundColor={props.label.color}
      textColor={labelTextColor}
    >
      {props.label.name}
    </Label>
  );
};

export default LabelItemView;

const Label = styled.li<{ backgroundColor: string; textColor: string }>`
  background-color: ${({ backgroundColor }) => css`#${backgroundColor}`};
  color: ${({ textColor }) => textColor};
  font-size: 10px;
  line-height: 12px;
  border-radius: 12px;
  padding: 0 3px;
  &:not(:first-child) {
    margin-left: 5px;
  }
`;
