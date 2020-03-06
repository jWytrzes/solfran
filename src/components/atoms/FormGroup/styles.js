import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.font.size.xs};
`;
