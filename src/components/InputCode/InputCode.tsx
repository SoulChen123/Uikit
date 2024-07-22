import React, { useState } from "react";
import styled from "@emotion/styled";
import { IInputCodeProps } from "./type";
import { Input } from "../Input";
import clone from "lodash/clone";
import { cx } from "../../utils/share";
import { useTheme } from "@emotion/react";

const Wrapper = styled.div(({ theme }) => ({
  display: "grid",
  gap: "8px",
  gridAutoFlow: "column",
  width: "fit-content",

  [`.${theme.prefixCls}-input-wrapper `]: {
    width: "44px",
    height: "44px",
    padding: 0,
    // borderRadius: "8px",

    [`.${theme.prefixCls}-input`]: {
      textAlign: "center",
      fontSize: "16px"
    }
  }
}));

enum KEY_CODE {
  Backspace = "Backspace",
  ArrowLeft = "ArrowLeft",
  ArrowUp = "ArrowUp",
  ArrowRight = "ArrowRight",
  ArrowDown = "ArrowDown"
}

const InputCode: React.FC<IInputCodeProps> = ({
  fields = 6,
  defaultValue,
  className,
  type = "number",
  autoFocus = true,
  onUpdated,
  onComplete,
  disabled,
  ...props
}) => {
  const { prefixCls } = useTheme();
  const itemRefs = Array.from({ length: fields }).map(() => React.useRef<HTMLInputElement>(null));

  const [value, setValue] = useState(
    defaultValue
      ? defaultValue
          .split("")
          .concat(Array.from({ length: fields }).map(() => ""))
          .filter((p, i) => i < fields)
      : Array.from({ length: fields }).map(() => "")
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [autoFocusIndex, setAutoFocusIndex] = useState(
    defaultValue ? ((defaultValue ?? "")?.length > fields ? fields - 1 : defaultValue.length) : 0
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (type === "number") {
      e.target.value = e.target.value.replace(/[^\d]/gi, "");
    }
    if (e.target.value === "" || (type === "number" && !e.target.validity.valid)) {
      return;
    }

    const r = e.target.value;

    const cloneValue = clone(value);

    let next;

    if (r.length > 1) {
      let nextIndex = r.length + index - 1;
      if (nextIndex >= fields) {
        nextIndex = fields - 1;
      }
      next = itemRefs?.[nextIndex];
      const split = r.split("");
      split.forEach((item: any, i: any) => {
        const cursor = index + i;
        if (cursor < fields) {
          cloneValue[cursor] = item;
        }
      });
    } else {
      next = itemRefs?.[index + 1];
      cloneValue[index] = r;
    }
    setValue(cloneValue);
    if (next) {
      next?.current?.focus();
      next?.current?.select();
    }
    triggerChange(cloneValue);
  };

  const triggerChange = (values = value) => {
    const val = values.join("");
    onUpdated && onUpdated(val);
    if (onComplete && val.length >= fields) {
      onComplete(val);
    }
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const prevIndex = index - 1;
    const nextIndex = index + 1;
    const prev = itemRefs?.[prevIndex];
    const next = itemRefs?.[nextIndex];
    const cloneValue = clone(value);
    switch (e.code) {
      case KEY_CODE.Backspace:
        e.preventDefault();
        if (cloneValue[index]) {
          cloneValue[index] = "";
          setValue(cloneValue);
          triggerChange(cloneValue);
        } else if (prev) {
          cloneValue[prevIndex] = "";
          prev.current?.focus();
          setValue(cloneValue);
          triggerChange(cloneValue);
        }
        break;
      case KEY_CODE.ArrowLeft:
        e.preventDefault();
        if (prev) {
          prev.current?.focus();
        }
        break;
      case KEY_CODE.ArrowRight:
        e.preventDefault();
        if (next) {
          next.current?.focus();
        }
        break;
      case KEY_CODE.ArrowUp:
      case KEY_CODE.ArrowDown:
        e.preventDefault();
        break;
      default:
        // handleKeys[index] = true;
        break;
    }
  };

  return (
    <Wrapper className={cx(`${prefixCls}-input-code-wrapper`, className)} {...props}>
      {value.map((p, i) => (
        <Input
          key={i}
          value={p}
          ref={itemRefs[i]}
          type={type === "number" ? "tel" : type}
          pattern={type === "number" ? "[0-9]*" : undefined}
          autoFocus={autoFocus && i === autoFocusIndex}
          onChange={(e) => {
            onChange(e, i);
          }}
          onKeyDown={(e) => {
            onKeyDown(e, i);
          }}
          onFocus={(e) => e.target.select()}
          disabled={disabled}
        />
      ))}
    </Wrapper>
  );
};

export default InputCode;
