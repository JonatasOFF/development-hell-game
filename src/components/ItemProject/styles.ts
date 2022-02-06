import styled from 'styled-components';

export const Container = styled.li`
  color: white;
  border-bottom: 0.2rem solid white;
  padding: 0.8rem;
  padding-right: 2.4rem;
  display: flex;
  flex-direction: row;
`;

export const LineAbove = styled.div`
  font-style: italic;
  font-size: 1.4rem;
  margin-top: -0.3rem;
`;

export const Title = styled.h2`
  font-weight: bold;
`;

export const Info = styled.span`
  font-size: 1.2rem;
`;

export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-top: 0.5rem;
`;

export const ArrowExpand = styled.div`
  position: absolute;
  right: 0.5rem;
  margin-top: 13px;
`;
