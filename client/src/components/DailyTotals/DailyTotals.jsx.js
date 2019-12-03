import styled from "styled-components";

export const TodayTotals = styled.div`
  font-size: 1.8rem;
  border-bottom: solid 1px grey;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalsHeader = styled.div`
  font-size: 2.5rem;
  margin-left: 2rem;

  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const TotalCellHeader = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  border-bottom: 1px solid #006f46;
`;

export const TotalCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const NetCell = styled(TotalCell)`
  border-left: 1px solid grey;

  & div.red {
    color: #b42857;
  }

  & div.green {
    color: #006f46;
  }
`;

export const NoTotals = styled.div`
  font-size: 3rem;
  border-bottom: solid 1px grey;
  text-align: center;
  padding: 1rem;
`;
