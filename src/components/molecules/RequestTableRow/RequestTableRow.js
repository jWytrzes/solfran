import React, { useState } from 'react';
import { StyledRow, StyledTableCell, StyledDetails, StyledDetail, StyledCheckbox } from './styles';
import Button from '../../atoms/Button/Button';

const RequestTableRow = ({ data, num, updateItem }) => {
  const [visible, setVisibility] = useState(false);

  return (
    <StyledRow even={num % 2 === 0}>
      <StyledTableCell width="40px"> {num + 1} </StyledTableCell>
      <StyledTableCell> {data.createdAt} </StyledTableCell>
      <StyledTableCell> {data.name} </StyledTableCell>
      <StyledTableCell>
        <a href={`mailto:${data.email}`}> {data.email} </a>
      </StyledTableCell>
      <StyledTableCell>
        <a href={`tel:${data.phone}`}> {data.phone} </a>
      </StyledTableCell>
      <StyledTableCell> {data.city} </StyledTableCell>
      <StyledTableCell>
        <Button autoWidth onClick={() => setVisibility(!visible)} style={{ fontSize: '12px' }}>
          Szczegóły
        </Button>
      </StyledTableCell>
      <StyledTableCell width="40px">
        <StyledCheckbox type="checkbox" checked={data.checked} onChange={() => updateItem(data.id, data.checked)} />
      </StyledTableCell>

      <StyledDetails visible={visible}>
        <StyledDetail>
          Preferowana forma kontaktu: <span>{data.contactForm} </span>
        </StyledDetail>
        <StyledDetail>
          Przybliżony prąd pokrycia dachowego: <span>{data.angle} </span>
        </StyledDetail>
        <StyledDetail>
          Planowana moc instalacji (w watach): <span>{data.power}</span>
        </StyledDetail>
        <StyledDetail>
          Miejsce montażu paneli fotowoltaicznych: <span>{data.location}</span>
        </StyledDetail>
        <StyledDetail>
          Rodzaj pokrycia dachowego: <span>{data.materialType}</span>
        </StyledDetail>
        <StyledDetail fullWidth>
          Wiadomość: <span>{data.message} </span>
        </StyledDetail>
      </StyledDetails>
    </StyledRow>
  );
};

export default RequestTableRow;
