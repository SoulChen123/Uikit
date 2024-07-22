import styled from "@emotion/styled";

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const FlexCenter = styled(FlexBox)`
  align-items: center;
  justify-content: center;
`;

export const FlexSpaceBetween = styled(FlexBox)`
  align-items: center;
  justify-content: space-between;
`;

export const GridBox = styled.div`
  display: grid;
`;

export const GridColumn = styled(GridBox)`
  grid-auto-flow: column;
  align-items: center;
`;
