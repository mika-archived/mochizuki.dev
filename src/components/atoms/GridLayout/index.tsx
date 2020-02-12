import React from "react";
import styled from "styled-components";

type RowProps = {
  children?: any;
  md: number;
  sm: number;
};

type GridProps = {
  children?: any;
  rows: number;
};

const GridContext = React.createContext(12);

const Grid: React.FC<GridProps> = ({ children, rows }) => {
  return <GridContext.Provider value={rows}>{children}</GridContext.Provider>;
};

const RowInternal = styled.div<RowProps & { rows: number }>`
  display: inline-block;

  @media screen and (max-width: 576px) {
    width: ${props => (props.sm / props.rows) * 100}%;
  }

  @media screen and (min-width: 576px) {
    width: ${props => (props.md / props.rows) * 100}%;
  }
`;

const Row: React.FC<RowProps> = ({ children, sm, md }) => {
  return (
    <GridContext.Consumer>
      {value => (
        <RowInternal md={md} sm={sm} rows={value}>
          {children}
        </RowInternal>
      )}
    </GridContext.Consumer>
  );
};

export { Grid, Row };
