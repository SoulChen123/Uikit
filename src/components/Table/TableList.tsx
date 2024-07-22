import styled from "@emotion/styled";
import React from "react";
import { __DEV__ } from "../../config";
import { useTheme } from "../../hooks";
import { ChevronDownIcon } from "../../icons";
import { Empty } from "../Empty";
import { useTable } from "./context";
import { AnyObject, ITableProps } from "./type";

const Wrapper = styled.ul<Pick<ITableProps<AnyObject>, "listConfig">>(({ listConfig, theme }) => {
  return {
    listStyle: "none",
    display: "grid",
    gap: 4,
    "::-webkit-scrollbar": {
      width: 4,
      height: 4
    },
    "::-webkit-scrollbar-track": {
      // borderRadius: 4,
      boxShadow: "none",
      backgroundColor: "transparent"
    },
    "::-webkit-scrollbar-thumb": {
      // borderRadius: 4,
      background: theme.system.gray[6]
    },
    "::-webkit-scrollbar-corner": {
      backgroundColor: "transparent"
    },
    ...(listConfig?.y
      ? {
          maxHeight: listConfig.y,
          overflowY: "auto"
        }
      : {})
  };
});

const ListItem = styled.li(() => {
  return {
    listStyle: "none"
  };
});

const ListItemContainer = styled.div(({ theme }) => {
  return {
    background: theme.system.blueGray[3],
    padding: "0px 12px",
    ":hover": {
      background: theme.system.blueGray[4]
    }
  };
});

const ListTitle = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.system.gray[9],
    cursor: "pointer",
    padding: "16px 0",
    fontSize: 14,
    "&>div": {
      flex: 1,
      paddingRight: 4
    },
    "&>svg": {
      color: theme.system.gray[7],
      fontSize: 20,
      transition: "transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)"
    },
    "&[data-expanded] > svg": {
      transform: "rotateX(180deg)"
    }
  };
});

const ListContent = styled.div(() => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 12,
    maxHeight: 0,
    overflow: "hidden",
    transition:
      "max-height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),padding 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",
    "&[data-expanded]": {
      maxHeight: 1000,
      paddingBottom: 16
    }
  };
});

const ListContentItem = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    fontSize: 12,
    "&>div:first-of-type": {
      marginBottom: 4,
      color: theme.system.gray[5]
    },
    "&>div:last-of-type": {
      color: theme.system.gray[9]
    }
  };
});

const TableListItem = React.memo<{ data: any; index: number }>(({ data, index }) => {
  const { columns } = useTable();
  const { prefixCls } = useTheme();

  const [expanded, setExpanded] = React.useState(false);

  if (!columns) return <></>;

  const customTitleColumn = columns.find((p) => p.listConfig?.customTitle);

  const listContent = columns.filter(
    (p, i) => !p.listConfig?.hidden && (customTitleColumn ? !p.listConfig?.customTitle : i !== 0)
  );

  return (
    <ListItem className={`${prefixCls}-table-list-item`} data-expanded={expanded ? "" : undefined}>
      <ListItemContainer className={`${prefixCls}-table-list-container`}>
        <ListTitle
          className={`${prefixCls}-table-list-title`}
          data-expanded={expanded ? "" : undefined}
          onClick={() => {
            setExpanded((e) => !e);
          }}
        >
          <div className={`${prefixCls}-table-list-title-render`}>
            {customTitleColumn
              ? customTitleColumn.listConfig?.customTitle?.(
                  data[customTitleColumn.key] ? data[customTitleColumn.key] : "",
                  data,
                  index
                )
              : columns[0].render
              ? columns[0].render(data[columns[0].key], data, 0)
              : data[columns[0].key]}
          </div>
          <ChevronDownIcon />
        </ListTitle>

        <ListContent className={`${prefixCls}-table-list-content`} data-expanded={expanded ? "" : undefined}>
          {listContent.map((p, i) => {
            const render = p.listConfig?.render || p.render;

            return (
              <ListContentItem key={p.key} className={`${prefixCls}-table-list-content-item`}>
                <div className={`${prefixCls}-table-list-content-title`}>{p.title}</div>
                <div className={`${prefixCls}-table-list-content-desc`}>
                  {render ? render(data[p.key] ? data[p.key] : "", data, i) : data[p.key]}
                </div>
              </ListContentItem>
            );
          })}
        </ListContent>
      </ListItemContainer>
    </ListItem>
  );
});

const TableList: React.FC = () => {
  const { data, listConfig, rowKey, empty } = useTable();
  const { prefixCls } = useTheme();

  return (
    <Wrapper className={`${prefixCls}-table-list`} listConfig={listConfig}>
      {data?.length ? (
        data?.map((p, i) => {
          const key = p[rowKey];

          if (__DEV__) {
            if (!rowKey)
              console.error(`UIKit TableList Error: The 'rowkey' attribute is required to ensure uniqueness`);
            if (!(rowKey in p)) {
              console.error(`UIKit TableList Error: 'rowKey:${rowKey.toString()}' attribute does not exist`);
            }
          }

          return <TableListItem key={key} data={p} index={i} />;
        })
      ) : empty ? (
        empty
      ) : (
        <Empty description="No Data" />
      )}
    </Wrapper>
  );
};

export default TableList;
