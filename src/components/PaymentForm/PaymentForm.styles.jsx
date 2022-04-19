import styled from "styled-components";

import Button from "../Button/Button.component";

export const PaymentFormContainer = styled.div`
  ${"" /* height: 300px; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f3f4f6;
  padding: 30px;
  border-radius: 10px;
  margin-top: 30px;
`;

export const FormContainer = styled.form`
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const DemoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;

  span {
    color: red;
  }
`;
