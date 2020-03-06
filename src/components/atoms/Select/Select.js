import styled from 'styled-components';
import arrowDown from '../../../assets/pictures/arrowDown.svg';

const Select = styled.select`
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: 18px 15px;
  color: ${({ theme }) => theme.secondary};
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(${arrowDown});
  background-color: ${({ theme }) => theme.greyBcg};
  background-position: calc(100% - 15px) 50%;
  background-size: 16px 8px;
  background-repeat: no-repeat;
`;

export default Select;
