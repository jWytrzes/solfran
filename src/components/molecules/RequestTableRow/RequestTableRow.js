import React, { useState } from 'react';
import { StyledRow, StyledTableCell, StyledDetails, StyledDetail, StyledCheckbox } from './styles';
import Button from '../../atoms/Button/Button';
import NoInfomation from '../../atoms/NoInformation/NoInformation';

const RequestTableRow = ({ data, num, updateItem }) => {
  const [visible, setVisibility] = useState(false);

  return (
    <StyledRow even={num % 2 === 0}>
      <StyledTableCell width="40px"> {num + 1} </StyledTableCell>
      <StyledTableCell> {data.createdAt} </StyledTableCell>
      <StyledTableCell> {data.name.length ? data.name : <NoInfomation />} </StyledTableCell>
      <StyledTableCell>
        <a href={`mailto:${data.email}`}> {data.email} </a>
      </StyledTableCell>
      <StyledTableCell>{data.phone.length ? <a href={`tel:${data.phone}`}> {data.phone} </a> : <NoInfomation />}</StyledTableCell>
      <StyledTableCell> {data.city.length ? data.city : <NoInfomation />} </StyledTableCell>
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
          Preferowana forma kontaktu: <span>{data.contactForm.length ? data.contactForm : <NoInfomation />} </span>
        </StyledDetail>
        <StyledDetail>
          Przybliżony prąd pokrycia dachowego: <span>{data.angle.length ? data.angle : <NoInfomation />} </span>
        </StyledDetail>
        <StyledDetail>
          Planowana moc instalacji (w watach): <span>{data.power.length ? data.power : <NoInfomation />}</span>
        </StyledDetail>
        <StyledDetail>
          Miejsce montażu paneli fotowoltaicznych: <span>{data.location.length ? data.location : <NoInfomation />}</span>
        </StyledDetail>
        <StyledDetail>
          Rodzaj pokrycia dachowego: <span>{data.materialType.length ? data.materialType : <NoInfomation />}</span>
        </StyledDetail>
        <StyledDetail fullWidth>
          Wiadomość: <span>{data.message.length ? data.message : <NoInfomation />} </span>
        </StyledDetail>
      </StyledDetails>
    </StyledRow>
  );
};

export default RequestTableRow;
