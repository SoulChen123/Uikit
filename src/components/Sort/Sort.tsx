import React from "react";
import styled from "@emotion/styled";
import { ISortProps } from "./type";
import { cx } from "../../utils";
import { useSafeLayoutEffect, useTheme } from "../../hooks";
import { useControllableValue } from "ahooks";
import { SortUpIcon } from "../../icons";

const Wrapper = styled.span(() => {
  return {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer"
  };
});

const Direction = styled.span(({ theme }) => {
  return {
    display: "grid",
    paddingLeft: 8,
    gridAutoFlow: "row",
    height: "fit-content",
    width: "fit-content",
    color: theme.system.gray[5]
  };
});

const SortIcon = styled.span(({ theme }) => {
  return {
    fontSize: 6,
    display: "inline-flex",
    "&[data-descend]": {
      transform: "rotateX(180deg)"
    },
    "&[data-actived]": {
      color: theme.system.primary[5]
    }
  };
});

const Sort = React.forwardRef<HTMLSpanElement, ISortProps>((props, ref) => {
  const {
    children,
    className,
    defaultSortDirection,
    sortDirection,
    onSort,
    sortDirections,
    onSortMounted,
    onClick,
    ...restProps
  } = props;
  const { prefixCls } = useTheme();

  const [directionType, setDirectionType] = useControllableValue<ISortProps["sortDirection"]>(props, {
    defaultValuePropName: "defaultSortDirection",
    valuePropName: "sortDirection",
    trigger: "onSort",
    defaultValue: sortDirections?.[0]
  });

  useSafeLayoutEffect(() => {
    onSortMounted?.(directionType);
  }, []);

  return (
    <Wrapper
      className={cx(`${prefixCls}-sort`, className)}
      ref={ref}
      onClick={(e) => {
        if (sortDirections?.length && sortDirections?.length > 1) {
          const index = sortDirections.findIndex((p) => p === (directionType || null)) + 1;
          const direction = sortDirections?.[index >= sortDirections.length ? 0 : index];
          setDirectionType?.(direction);
        }

        onClick?.(e);
      }}
      {...restProps}
    >
      {children}

      <Direction className={`${prefixCls}-sort-direction`}>
        {sortDirections?.includes("ascend") && (
          <SortIcon data-ascend="" data-actived={directionType === "ascend" ? "" : undefined}>
            <SortUpIcon />
          </SortIcon>
        )}
        {sortDirections?.includes("descend") && (
          <SortIcon data-descend="" data-actived={directionType === "descend" ? "" : undefined}>
            <SortUpIcon />
          </SortIcon>
        )}
      </Direction>
    </Wrapper>
  );
});

Sort.defaultProps = {
  sortDirections: [null, "ascend", "descend"]
};

export default Sort;
