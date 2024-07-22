import { ClassNames, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { ITextProps } from "./type";

const Wrapper = styled.span<ITextProps>(({ fontSize, fontWeight, color, whiteSpace, wordBreak, theme }) => ({
  fontSize: fontSize ?? 14,
  fontWeight: fontWeight ?? 400,
  whiteSpace,
  wordBreak,
  color: color ? color : theme.system.gray[9]
}));

const Text: React.FC<ITextProps> = ({ className, children, ...props }) => {
  const { prefixCls } = useTheme();

  return (
    <ClassNames>
      {({ cx }) => {
        const clx = cx([{ [`${prefixCls}-text`]: true }, { [className || ""]: !!className }]);
        return (
          <Wrapper className={clx} {...props}>
            {children}
          </Wrapper>
        );
      }}
    </ClassNames>
  );
};

Text.defaultProps = {};

export default Text;
