import styled from "styled-components";

export const TodayTotals = styled.div`
  font-size: 1.8rem;
  border-bottom: solid 1px grey;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    margin-left: 2rem;
  }
`;

export const TotalCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  & div {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const NetCell = styled(TotalCell)`
  border-left: 1px solid grey;

  & div.red {
    color: #b42857;
  }

  & div.green {
    color: #28b485;
  }
`;

export const NoTotals = styled.div`
  font-size: 3rem;
  border-bottom: solid 1px grey;
  text-align: center;
  padding: 10px;
`;
