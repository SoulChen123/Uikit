import styled from "@emotion/styled";
import React, { forwardRef } from "react";
import { IExternalLinkProps } from "./type";
import { cx } from "../../utils/share";
import { useTheme } from "@emotion/react";

const Wrapper = styled("a")<IExternalLinkProps>(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  cursor: "pointer",
  fontSize: "inherit",
  color: theme.system.gray[9],

  ":hover": {
    color: theme.system.primary[6]
  },

  "&[data-colorscheme=primary]": {
    color: theme.system.primary[6],
    ":hover": {
      color: theme.system.primary[5]
    }
  }
}));

const ExternalLink: React.FC<IExternalLinkProps> = forwardRef<HTMLAnchorElement, IExternalLinkProps>(
  ({ colorScheme, className, ...props }, ref) => {
    const { prefixCls } = useTheme();
    return (
      <Wrapper
        className={cx(`${prefixCls}-external-link`, className)}
        data-colorscheme={colorScheme}
        rel="noreferrer noopener"
        ref={ref}
        {...props}
      />
    );
  }
);

ExternalLink.defaultProps = {};

export default ExternalLink;
