import React, { forwardRef, useRef } from "react";
import styled from "@emotion/styled";
import { IButtonProps } from "./type";
import { useTheme } from "@emotion/react";
import { Transition } from "react-transition-group";
import { LoadingOutlinedIcon } from "../../svgs";
import { Overwrite } from "../../types";
import { cx } from "../../utils/share";
import { SPIN } from "../../theme/animations";

const Wrapper = styled("button")<Overwrite<IButtonProps, { loading?: string; size: IButtonProps["size"] }>>`
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  border: 2px solid;
  border-color: transparent;
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-weight: 500;
  ${({ block }) => (block ? { width: "100%" } : {})};

  ${({ size }) => {
    switch (size) {
      case "extra-large":
        return {
          height: 64,
          fontSize: 18,
          padding: "0 16px"
        };
      case "large":
        return {
          height: 56,
          fontSize: 16,
          padding: "0 16px"
        };
      case "middle":
        return {
          height: 48,
          fontSize: 14,
          padding: "0 12px"
        };
      case "small":
        return {
          height: 40,
          fontSize: 14,
          padding: "0 12px"
        };
      case "extra-small":
        return {
          height: 32,
          fontSize: 12,
          padding: "0 8px"
        };
      default:
        return {
          height: 48,
          fontSize: 14,
          padding: "0 12px"
        };
    }
  }};

  ${({ theme, variant, colorScheme }) => {
    switch (colorScheme) {
      case "default":
        if (variant === "contained") {
          return {
            background: theme.system.blueGray[5],
            color: theme.system.gray[9]
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.blueGray[9],
            color: theme.system.gray[9]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.gray[9]
          };
        }
        break;
      case "primary":
        if (variant === "contained") {
          return {
            background: theme.system.primary[5],
            color: theme.system.black
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.primary[5],
            color: theme.system.primary[5]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.primary[5]
          };
        }
        break;

      case "info":
        if (variant === "contained") {
          return {
            background: theme.system.green[5],
            color: theme.system.black
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.green[5],
            color: theme.system.green[5]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.green[5]
          };
        }
        break;

      case "danger":
        if (variant === "contained") {
          return {
            background: theme.system.red[5],
            color: theme.system.black
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.red[5],
            color: theme.system.red[5]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.red[5]
          };
        }
        break;
      case "warn":
        if (variant === "contained") {
          return {
            background: theme.system.yellow[5],
            color: theme.system.black
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.yellow[5],
            color: theme.system.yellow[5]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.yellow[5]
          };
        }
        break;

      default:
        if (variant === "contained") {
          return {
            background: theme.system.blueGray[5],
            color: theme.system.gray[9]
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.blueGray[9],
            color: theme.system.gray[9]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.gray[9]
          };
        }
    }
  }};

  :hover {
    ${({ theme, variant, colorScheme }) => {
      switch (colorScheme) {
        case "default":
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[4],
              boxShadow: `0px 0px 0px 4px ${theme.system.blueGray[3]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.blueGray[4],
              boxShadow: `0px 0px 0px 4px ${theme.system.blueGray[3]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.blueGray[4]
            };
          }
          break;

        case "primary":
          if (variant === "contained") {
            return {
              background: theme.system.primary[4],
              boxShadow: `0px 0px 0px 4px ${theme.system.primary[2]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.primary[1],
              boxShadow: `0px 0px 0px 4px ${theme.system.primary[2]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.primary[1]
            };
          }
          break;

        case "info":
          if (variant === "contained") {
            return {
              background: theme.system.green[4],
              boxShadow: `0px 0px 0px 4px ${theme.system.green[2]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.green[1],
              boxShadow: `0px 0px 0px 4px ${theme.system.green[2]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.green[1]
            };
          }
          break;

        case "danger":
          if (variant === "contained") {
            return {
              background: theme.system.red[4],
              boxShadow: `0px 0px 0px 4px ${theme.system.red[2]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.red[1],
              boxShadow: `0px 0px 0px 4px ${theme.system.red[2]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.red[1]
            };
          }
          break;

        case "warn":
          if (variant === "contained") {
            return {
              background: theme.system.yellow[4],
              boxShadow: `0px 0px 0px 4px ${theme.system.yellow[2]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.yellow[1],
              boxShadow: `0px 0px 0px 4px ${theme.system.yellow[2]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.yellow[1]
            };
          }
          break;

        default:
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[4],
              boxShadow: `0px 0px 0px 4px ${theme.system.blueGray[3]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.blueGray[4],
              boxShadow: `0px 0px 0px 4px ${theme.system.blueGray[3]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.blueGray[4]
            };
          }
      }
    }}
  }

  :focus {
    ${({ theme, variant, colorScheme }) => {
      switch (colorScheme) {
        case "default":
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[6],
              boxShadow: `0px 0px 0px 4px ${theme.system.blueGray[3]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.blueGray[6],
              boxShadow: `0px 0px 0px 4px ${theme.system.blueGray[3]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.blueGray[6]
            };
          }
          break;

        case "primary":
          if (variant === "contained") {
            return {
              background: theme.system.primary[6],
              boxShadow: `0px 0px 0px 4px ${theme.system.primary[2]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.primary[2],
              boxShadow: `0px 0px 0px 4px ${theme.system.primary[2]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.primary[2]
            };
          }
          break;

        case "info":
          if (variant === "contained") {
            return {
              background: theme.system.green[6],
              boxShadow: `0px 0px 0px 4px ${theme.system.green[2]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.green[2],
              boxShadow: `0px 0px 0px 4px ${theme.system.green[2]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.green[2]
            };
          }
          break;

        case "danger":
          if (variant === "contained") {
            return {
              background: theme.system.red[6],
              boxShadow: `0px 0px 0px 4px ${theme.system.red[2]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.red[2],
              boxShadow: `0px 0px 0px 4px ${theme.system.red[2]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.red[2]
            };
          }
          break;

        case "warn":
          if (variant === "contained") {
            return {
              background: theme.system.yellow[6],
              boxShadow: `0px 0px 0px 4px ${theme.system.yellow[2]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.yellow[2],
              boxShadow: `0px 0px 0px 4px ${theme.system.yellow[2]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.yellow[2]
            };
          }
          break;

        default:
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[6],
              boxShadow: `0px 0px 0px 4px ${theme.system.blueGray[3]}`
            };
          } else if (variant === "outlined") {
            return {
              background: theme.system.blueGray[6],
              boxShadow: `0px 0px 0px 4px ${theme.system.blueGray[3]}`
            };
          } else if (variant === "text") {
            return {
              background: theme.system.blueGray[6]
            };
          }
      }
    }}
  }

  &[disabled] {
    cursor: not-allowed;
  }
  &[disabled],
  &[loading] {
    box-shadow: none;
    ${({ theme, variant, colorScheme }) => {
      switch (colorScheme) {
        case "default":
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[3],
              color: theme.system.gray[4]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.blueGray[4],
              background: "none",
              color: theme.system.gray[4]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.gray[4],
              background: "none"
            };
          }
          break;

        case "primary":
          if (variant === "contained") {
            return {
              background: theme.system.primary[2],
              color: theme.system.gray[4]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.primary[2],
              color: theme.system.primary[2],
              background: "none"
            };
          } else if (variant === "text") {
            return {
              color: theme.system.primary[2],
              background: "none"
            };
          }
          break;

        case "info":
          if (variant === "contained") {
            return {
              background: theme.system.green[2],
              color: theme.system.gray[4]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.green[2],
              color: theme.system.green[2],
              background: "none"
            };
          } else if (variant === "text") {
            return {
              color: theme.system.green[2],
              background: "none"
            };
          }
          break;

        case "danger":
          if (variant === "contained") {
            return {
              background: theme.system.red[2],
              color: theme.system.gray[4]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.red[2],
              color: theme.system.red[2],
              background: "none"
            };
          } else if (variant === "text") {
            return {
              color: theme.system.red[2],
              background: "none"
            };
          }
          break;

        case "warn":
          if (variant === "contained") {
            return {
              background: theme.system.yellow[2],
              color: theme.system.gray[4]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.yellow[2],
              color: theme.system.yellow[2],
              background: "none"
            };
          } else if (variant === "text") {
            return {
              color: theme.system.yellow[2],
              background: "none"
            };
          }
          break;

        default:
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[3],
              color: theme.system.gray[4]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.blueGray[4],
              color: theme.system.gray[4],
              background: "none"
            };
          } else if (variant === "text") {
            return {
              color: theme.system.gray[4],
              background: "none"
            };
          }
      }
    }}
  }
`;

const SpinBox = styled("span")<Pick<IButtonProps, "size">>(({ size }) => ({
  marginLeft: 0,
  width: 0,
  transform: "scale(0)",
  opacity: 0,
  transition: "all 0.3s",
  display: "inline-flex",
  alignItems: "center",
  "&[data-opened]": {
    ...(size === "extra-large" ? { marginLeft: 10 } : {}),
    ...(size === "large" ? { marginLeft: 8 } : {}),
    ...(size === "middle" ? { marginLeft: 6 } : {}),
    ...(size === "small" ? { marginLeft: 4 } : {}),
    width: "1em",
    transform: "scale(1)",
    opacity: 1
  }
}));

const SpinIconWrapper = styled(LoadingOutlinedIcon)(() => ({
  animationName: SPIN,
  animationDuration: "1.5s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite"
}));

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, children, loading, onClick, size, ...props }, ref) => {
    const spinRef = useRef(null);
    const { prefixCls } = useTheme();

    return (
      <Wrapper
        {...props}
        className={cx(`${prefixCls}-btn`, !!props.colorScheme && `${prefixCls}-btn-${props.colorScheme}`, className)}
        data-variant={props.colorScheme ? props.variant : undefined}
        data-colorscheme={props.colorScheme}
        loading={loading ? "" : undefined}
        onClick={!loading ? onClick : undefined}
        size={size}
        ref={ref}
      >
        {children}

        <Transition in={loading} timeout={{ exit: 300 }} appear unmountOnExit nodeRef={spinRef}>
          {(state) => (
            <SpinBox ref={spinRef} data-opened={state === "entered" ? "" : undefined} size={size}>
              <SpinIconWrapper className={`${prefixCls}-icon-spin`} />
            </SpinBox>
          )}
        </Transition>
      </Wrapper>
    );
  }
);

Button.defaultProps = {
  colorScheme: "default",
  variant: "contained",
  size: "middle"
};

export default Button;
