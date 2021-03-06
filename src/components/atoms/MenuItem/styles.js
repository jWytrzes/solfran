import styled from 'styled-components';

export const StyledLi = styled.li`
  font-size: ${({ theme }) => theme.font.size.r};
  font-weight: ${({ isActive, theme }) => (isActive ? theme.font.weight.bold : theme.font.weight.regular)};
  color: ${({ isActive, theme }) => (isActive ? theme.primary : theme.secondary)};
  transition: color 0.3s ease-in;
  will-change: color;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (min-width: 1150px) {
    position: relative;
    margin: 10px 0 10px 10px;

    .menu__text {
      border-radius: 5px;
      padding: 5px 10px;
      font-size: ${({ theme }) => theme.font.size.xs};
      white-space: ${({ vertical }) => (vertical ? 'unset' : 'nowrap')};
      text-align: center;
      letter-spacing: 1px;
    }
  }
`;

export const StyledIconWrapper = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isActive }) => (isActive ? theme.primary : 'transparent')};
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;

  &::after {
    content: '';
    position: absolute;
    border-radius: 100%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 10px 15px ${({ theme }) => theme.shadow};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transform: ${({ isActive }) => (isActive ? 'translateY(0)' : 'translateY(-5px)')};
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }

  svg {
    height: 17px;
    color: ${({ isActive }) => (isActive ? 'white' : 'inherit')};
  }

  @media (min-width: 1150px) {
    margin-right: auto;
    margin-left: auto;
  }
`;
