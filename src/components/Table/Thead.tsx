import styled from "@emotion/styled";
import React from "react";
import { useTheme } from "../../hooks";
import { cx } from "../../utils/share";
import { Sort } from "../Sort";
import { useTable } from "./context";
import { AnyObject, ITableColumn, ITableContext } from "./type";

const Wrapper = styled.thead(() => {
  return {
    position: "relative"
  };
});

const Th = styled.th<Pick<ITableContext<AnyObject>, "size"> & { column?: ITableColumn<AnyObject> }>(
  ({ theme, size, column }) => {
    const sizeStyles = () => {
      switch (size) {
        case "large":
          return {
            padding: "0px 16px",
            height: 40,
            fontSize: 14
          };
        case "middle":
          return {
            padding: "0px 16px",
            height: 36,
            fontSize: 14
          };
        case "small":
          return {
            padding: "0px 12px",
            height: 32,
            fontSize: 12
          };
        default:
          return {
            padding: "0px 16px",
            height: 36,
            fontSize: 14
          };
      }
    };

    return {
      // background: theme.system.blueGray[2],
      position: "relative",
      zIndex: 1,
      "::after": {
        content: "''",
        width: "100%",
        height: "calc(100% - 4px)",
        background: theme.system.blueGray[3],
        position: "absolute",
        top: 2,
        left: 0,
        zIndex: -1,
        pointerEvents: "all"
      },
      color: theme.system.gray[5],
      overflowWrap: "break-word",
      verticalAlign: "middle",

      ...sizeStyles(),
      ...(column?.align
        ? {
            textAlign: column.align
          }
        : {
            textAlign: "right",
            ":first-of-type": {
              textAlign: "left"
            }
          })
      // ...(column?.fixed ? { position: "sticky", right: 0, zIndex: 3 } : {})
    };
  }
);

const Td: React.FC<{
  column: ITableColumn<AnyObject>;
}> = ({ column }) => {
  const { prefixCls } = useTheme();
  const { sortState, setSortState, size } = useTable();

  return (
    <Th key={column.key} className={cx(`${prefixCls}-table-th`, column.className)} size={size} column={column}>
      {column.sort ? (
        <Sort
          sortDirection={sortState?.key === column.key ? sortState.direction : null}
          onSort={(e) => {
            setSortState?.({
              key: column.key,
              direction: e || null,
              compareFn: column.sortCompareFn
            });
          }}
        >
          {column.title}
        </Sort>
      ) : (
        column.title
      )}
    </Th>
  );
};

const Thead: React.FC = () => {
  const { prefixCls } = useTheme();
  const { columns } = useTable();

  return (
    <Wrapper className={`${prefixCls}-table-thead`}>
      <tr>
        {columns?.map((p) => {
          return <Td key={p.key} column={p} />;
        })}
      </tr>
    </Wrapper>
  );
};

export default Thead;
