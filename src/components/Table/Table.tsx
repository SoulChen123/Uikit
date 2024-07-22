import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useEventListener, useScroll, useSize } from "ahooks";
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { cx, isBrowser } from "../../utils";
import { Loading } from "../Loading";
import { ISortDirection } from "../Sort";
import { TableProvider } from "./context";
import TableCard from "./TableList";
import Tbody from "./Tbody";
import Thead from "./Thead";
import { AnyObject, ITableColumn, ITableContext, ITableProps } from "./type";

const Wrapper = styled.div<Pick<ITableContext<AnyObject>, "scroll">>(({ theme, scroll }) => {
  return {
    position: "relative",
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
    ...(scroll?.y !== undefined
      ? {
          display: "flex",
          flexDirection: "column"
        }
      : {}),
    ...(scroll?.x !== undefined
      ? {
          overflowX: "auto"
        }
      : {})
  };
});

const TableWrapper = styled.table<Pick<ITableContext<AnyObject>, "scroll">>(({ scroll }) => {
  return {
    width: "100%",
    ...(scroll?.x !== undefined ? { minWidth: scroll.x, tableLayout: "fixed" } : {})
  };
});

const Container = styled.div<Pick<ITableContext<AnyObject>, "scroll">>(({ scroll, theme }) => {
  return {
    width: "100%",
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
    ...(scroll?.y ? { maxHeight: scroll.y, overflow: "overlay" } : {})
  };
});

const InternalTable = <RecordType extends AnyObject = any>(
  {
    dataSource,
    columns,
    className,
    size = "middle",
    scroll,
    rowKey,
    listConfig,
    loading,
    onSort,
    empty,
    ...props
  }: ITableProps<RecordType>,
  ref: React.Ref<HTMLDivElement>
) => {
  const { prefixCls } = useTheme();

  const body = useSize(isBrowser ? document.body : null);

  const headerContainerRef = useRef<HTMLDivElement | null>(null);
  const bodyContainerRef = useRef<HTMLDivElement | null>(null);

  useEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      headerContainerRef.current?.scrollBy(e.deltaX, 0);
      bodyContainerRef.current?.scrollBy(e.deltaX, 0);
    },
    {
      target: headerContainerRef
    }
  );

  useScroll(bodyContainerRef, (e) => {
    headerContainerRef.current?.scrollTo({
      left: e.left
    });
    return true;
  });

  const [sortState, setSortState] = useState<{
    key: string;
    direction: ISortDirection;
    compareFn?: ITableColumn<RecordType>["sortCompareFn"];
  }>();

  const data = useMemo(() => {
    const cloneData = dataSource?.concat([]) || [];
    if (sortState && sortState.direction) {
      if (sortState.compareFn !== null) {
        if (sortState.compareFn) {
          return cloneData.sort((a, b) => {
            const compare = sortState.compareFn?.(a, b);
            if (compare) {
              return sortState.direction === "ascend" ? compare : -compare;
            }
            return 0;
          });
        } else {
          return cloneData.sort((a, b) => {
            const compare = a[sortState.key] > b[sortState.key] ? 1 : -1;
            return sortState.direction === "ascend" ? compare : -compare;
          });
        }
      }
    }

    return dataSource;
  }, [dataSource, sortState]);

  useEffect(() => {
    onSort?.(sortState?.direction, sortState?.key);
  }, [sortState]);

  return (
    <TableProvider
      value={{
        data,
        columns,
        rowKey,
        size,
        scroll,
        listConfig,
        setSortState,
        sortState,
        empty
      }}
    >
      <Loading loading={loading} delay={50} opacity={0.5}>
        {/* PC */}
        {body?.width && body?.width >= 768 ? (
          scroll?.y === undefined ? (
            <Wrapper className={cx(`${prefixCls}-table`, className)} {...props} ref={ref} scroll={scroll}>
              <TableWrapper scroll={scroll}>
                <colgroup>
                  {columns?.map((p) => (
                    <col
                      style={{
                        width: p.width
                      }}
                      key={p.key}
                    />
                  ))}
                </colgroup>
                <Thead />
                <Tbody />
              </TableWrapper>
            </Wrapper>
          ) : (
            <Wrapper className={cx(`${prefixCls}-table`, className)} {...props} ref={ref} scroll={scroll}>
              <Container
                className={cx(`${prefixCls}-table-header`)}
                style={{ overflow: "hidden" }}
                ref={headerContainerRef}
              >
                <TableWrapper scroll={scroll}>
                  <colgroup>
                    {columns?.map((p) => (
                      <col
                        style={{
                          width: p.width || 150
                        }}
                        key={p.key}
                      />
                    ))}
                  </colgroup>
                  <Thead />
                </TableWrapper>
              </Container>

              <Container className={cx(`${prefixCls}-table-body`)} scroll={scroll} ref={bodyContainerRef}>
                <TableWrapper scroll={scroll}>
                  <colgroup>
                    {columns?.map((p) => (
                      <col
                        style={{
                          width: p.width || 150
                        }}
                        key={p.key}
                      />
                    ))}
                  </colgroup>
                  <Tbody />
                </TableWrapper>
              </Container>
            </Wrapper>
          )
        ) : (
          <></>
        )}

        {/* Mobile */}
        {body?.width && body?.width < 768 ? <TableCard /> : <></>}
      </Loading>
    </TableProvider>
  );
};

const Table = forwardRef(InternalTable) as <RecordType>(
  props: ITableProps<RecordType> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof InternalTable>;

export default Table;
