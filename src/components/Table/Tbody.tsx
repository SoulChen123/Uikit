import styled from "@emotion/styled";
import React from "react";
import { __DEV__ } from "../../config";
import { useTheme } from "../../hooks";
import { cx } from "../../utils";
import { Empty } from "../Empty";
import { useTable } from "./context";
import { AnyObject, ITableColumn, ITableContext } from "./type";

const Wrapper = styled.tbody(() => {
  return {};
});

const Tr = styled.tr(({ theme }) => {
  return {
    "&:hover": {
      "td::after": {
        background: theme.system.blueGray[4]
      }
    }
  };
});

const Td = styled.td<Pick<ITableContext<AnyObject>, "size"> & { column?: ITableColumn<AnyObject> }>(
  ({ theme, size, column }) => {
    const sizeStyles = () => {
      switch (size) {
        case "large":
          return {
            padding: "0px 16px",
            height: 68,
            fontSize: 14
          };
        case "middle":
          return {
            padding: "0px 16px",
            height: 52,
            fontSize: 14
          };
        case "small":
          return {
            padding: "0px 12px",
            height: 34,
            fontSize: 12
          };
        default:
          return {
            padding: "0px 16px",
            height: 52,
            fontSize: 14
          };
      }
    };
    return {
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
      color: theme.system.gray[9],
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
          }),
      [`&.${theme.prefixCls}-table-empty-td`]: {
        "::after": {
          background: theme.system.transparent
        }
      }
      // ...(column?.fixed ? { position: "sticky", right: 0, zIndex: 3, background: theme.system.blueGray[1] } : {})
    };
  }
);

type ITableRow = {
  data: AnyObject;
};

const TableRow: React.FC<ITableRow> = ({ data }) => {
  const { prefixCls } = useTheme();
  const { columns, size } = useTable();

  return (
    <Tr className={cx(`${prefixCls}-table-row`)}>
      {columns?.map((p, i) => (
        <Td className={cx(`${prefixCls}-table-td`, p.className)} key={p.key} size={size} column={p} style={p.style}>
          {p.render ? p.render(data[p.key] ? data[p.key] : "", data, i) : data[p.key]}
        </Td>
      ))}
    </Tr>
  );
};

const Tbody: React.FC = () => {
  const { prefixCls } = useTheme();
  const { data, columns, rowKey, empty } = useTable();

  return (
    <Wrapper className={cx(`${prefixCls}-table-tbody`)}>
      {data?.length ? (
        data?.map((_row) => {
          const key = _row[rowKey];
          if (__DEV__) {
            if (!rowKey) console.error(`UIKit Table Error: The 'rowkey' attribute is required to ensure uniqueness`);
            if (!(rowKey in _row)) {
              console.error(`UIKit Table Error: 'rowKey:${rowKey.toString()}' attribute does not exist`);
            }
          }

          return <TableRow key={key} data={_row} />;
        })
      ) : (
        <tr className={cx(`${prefixCls}-table-empty`)}>
          <Td colSpan={columns?.length} className={`${prefixCls}-table-empty-td`} align="center">
            {empty ? empty : <Empty description={"No Data"} />}
          </Td>
        </tr>
      )}
    </Wrapper>
  );
};

export default Tbody;
