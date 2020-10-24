import styled from 'styled-components';

export const Container = styled.div`
  background-color: #6f6f6f;
  padding: 20px;
  color: #fff;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 20px;
    }
  }
`;
