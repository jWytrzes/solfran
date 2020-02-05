import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.s};
`;

export const StyledIconWrapper = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  background-color: ${({theme, isActive}) => isActive ? theme.primary : 'transparent'};

  &::after {
    content: "";
    position: absolute;
    border-radius: 100%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 10px 15px ${({ theme }) => theme.shadow};
    opacity: ${({ isActive}) => isActive ? 1 : 0};
    transition: opacity .2s ease-in-out;
  }

  svg {
    height: 17px;
    color: ${({isActive}) => isActive ? 'white' : 'inherit'};
  }
`;
