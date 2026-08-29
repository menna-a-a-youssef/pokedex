import styled from "styled-components";

export const ButtonWrap = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 18px auto 0;
  padding: 0 16px 32px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  min-width: 180px;
  padding: 10px 22px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.01em;

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`;
