import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useControllableValue } from "ahooks";
import React, { useMemo } from "react";
import { forwardRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons";
import { cx } from "../../utils";
import { IPaginationProps } from "./type";

const Wrapper = styled.ul`
  display: grid;
  grid-auto-flow: column;
  width: fit-content;
  gap: 4px;
`;

const Item = styled.div`
  width: 32px;
  height: 32px;
  /* border-radius: 6px; */
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.system.gray[6]};
  user-select: none;
  & > svg {
    font-size: 24px;
  }

  :not([data-disabled]):hover {
    background: ${({ theme }) => theme.system.gray[1]};
  }
  :not([data-disabled]):focus-within {
    background: ${({ theme }) => theme.system.primary[1]};
    color: ${({ theme }) => theme.system.primary[5]};
  }
  :not([data-disabled])[data-actived] {
    background: ${({ theme }) => theme.system.primary[5]};
    color: ${({ theme }) => theme.system.black};
  }

  &[data-disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.system.gray[4]};
  }
`;

const JUMP = 3;

const MAX_FULL = 5;

const Pagination = forwardRef<HTMLUListElement, IPaginationProps>((props, ref) => {
  const { prefixCls } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { defaultPageNum, pageNum, defaultPageSize, pageSize, onChange, total, className, ...rest } = props;

  const [internalPageNum, setInternalPageNum] = useControllableValue(props, {
    defaultValuePropName: "defaultPageNum",
    valuePropName: "pageNum",
    defaultValue: 1,
    trigger: ""
  });

  const [internalPageSize, setInternalPageSize] = useControllableValue(props, {
    defaultValuePropName: "defaultPageSize",
    valuePropName: "pageSize",
    defaultValue: 10,
    trigger: ""
  });

  const onPageNumChange = (pageNum: number) => {
    setInternalPageNum(pageNum);
    onChange?.(pageNum, internalPageSize);
  };

  const length = useMemo(() => Math.ceil((total || 0) / internalPageSize), [total, internalPageSize]);

  const arr = useMemo(() => Array.from({ length }, (item, index) => index + 1), [length]);

  const isFull = length <= MAX_FULL;

  const leftQty = useMemo(() => {
    if (isFull) {
      return MAX_FULL;
    }
    if (internalPageNum < JUMP) {
      return JUMP;
    } else if (internalPageNum === JUMP) {
      return JUMP + 1;
    } else {
      return 1;
    }
  }, [internalPageNum, length, isFull]);

  const middleQty = useMemo(() => {
    if (internalPageNum > JUMP && internalPageNum < length - 2) {
      return JUMP;
    }
    return 0;
  }, [internalPageNum, length]);

  const rightQty = useMemo(() => {
    if (internalPageNum > length - 2) {
      return JUMP;
    } else if (internalPageNum === length - 2) {
      return 4;
    } else {
      return 1;
    }
  }, [internalPageNum, length]);

  if (length <= 1) return null;

  return (
    <Wrapper className={cx(`${prefixCls}-pagination`, className)} ref={ref} {...rest}>
      <Item
        className={cx(`${prefixCls}-pagination-prev`)}
        tabIndex={0}
        data-disabled={internalPageNum === 1 ? "" : undefined}
        onClick={() => {
          if (internalPageNum === 1) return;
          onPageNumChange(internalPageNum - 1);
        }}
      >
        <ArrowLeftIcon />
      </Item>

      {/* left */}
      {arr.slice(0, leftQty).map((p) => (
        <Item
          className={cx(`${prefixCls}-pagination-${p}`)}
          key={p}
          tabIndex={0}
          onClick={() => onPageNumChange(p)}
          data-actived={internalPageNum === p ? "" : undefined}
        >
          {p}
        </Item>
      ))}

      {/* left jump */}
      {!isFull && internalPageNum > JUMP && (
        <Item
          className={cx(`${prefixCls}-pagination-jump-prev`)}
          tabIndex={0}
          onClick={() => onPageNumChange(internalPageNum - JUMP)}
        >
          ...
        </Item>
      )}
      {/* middle */}
      {!isFull &&
        !!middleQty &&
        arr.slice(internalPageNum - 2, internalPageNum - 2 + middleQty).map((p) => (
          <Item
            className={cx(`${prefixCls}-pagination-${p}`)}
            key={p}
            tabIndex={0}
            onClick={() => onPageNumChange(p)}
            data-actived={internalPageNum === p ? "" : undefined}
          >
            {p}
          </Item>
        ))}

      {/* right jump */}
      {!isFull && internalPageNum < length - 2 && (
        <Item
          className={cx(`${prefixCls}-pagination-jump-next`)}
          tabIndex={0}
          onClick={() => onPageNumChange(internalPageNum + JUMP)}
        >
          ...
        </Item>
      )}

      {/* right */}
      {!isFull &&
        !!rightQty &&
        arr.slice(-rightQty).map((p) => (
          <Item
            className={cx(`${prefixCls}-pagination-${p}`)}
            key={p}
            tabIndex={0}
            onClick={() => onPageNumChange(p)}
            data-actived={internalPageNum === p ? "" : undefined}
          >
            {p}
          </Item>
        ))}

      <Item
        className={cx(`${prefixCls}-pagination-next`)}
        tabIndex={0}
        data-disabled={internalPageNum === length ? "" : undefined}
        onClick={() => {
          if (internalPageNum === length) return;
          onPageNumChange(internalPageNum + 1);
        }}
      >
        <ArrowRightIcon />
      </Item>
    </Wrapper>
  );
});

Pagination.defaultProps = {
  total: 0
};

export default Pagination;
