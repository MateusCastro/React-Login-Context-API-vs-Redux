import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6f6f6f;
`;

export const ContainerLogin = styled.div`
  background-color: #fff;
  width: 500px;
  margin: auto;
  padding: 50px;
  border-radius: 20px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    input {
      padding: 15px;
      margin: 5px 0;
      border-radius: 10px;
      border-width: 0;
      font-size: 15px;
      -webki-webkit-box-shadow: 0px 0px 1px 1px rgba(224,224,224,1);
      -moz-box-shadow: 0px 0px 1px 1px rgba(224,224,224,1);
      box-shadow: 0px 0px 1px 1px rgba(224,224,224,1);
    }

    button {
      align-self: flex-start;
      padding: 15px 40px;
      border-radius: 10px;
      border-width: 0;
      margin-top: 5px;
      font-size: 15px;
      background-color: #EFEFEF;

      :hover {
        background-color: #e6e6e6;
      }
    }
  }

`;
