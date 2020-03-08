import styled from 'styled-components';

const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: 6px;

  @media (min-width: 1440px) {
    white-space: nowrap;
  }
`;

export default Label;
