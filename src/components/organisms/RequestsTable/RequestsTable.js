import React, { useState, useEffect } from 'react';
import { firestore } from '../../../base';
import Loader from '../Loader/Loader';
import RequestTableRow from '../../molecules/RequestTableRow/RequestTableRow';
import { StyledWrapper, StyledHeader, StyledBadge, StyledHeading, StyledTableHeader, StyledTableCell } from './styles';

const RequestsTable = () => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [requests, setRequests] = useState([]);
  const requestsCollection = firestore.collection('valuationRequests');

  const documentsCollection = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect(() => {
    setLoading(true);
    const subscribe = requestsCollection
      .orderBy('createdAt', 'desc')
      .get()
      .then((snapshot) => {
        const dataFromCollection = snapshot.docs.map(documentsCollection);
        setRequests(dataFromCollection);
        setLoading(false);
      });

    return () => subscribe;
  }, [refresh]);

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeading big>
          Posty <StyledBadge> {requests.length} </StyledBadge>
        </StyledHeading>
      </StyledHeader>
      <StyledTableHeader>
        <StyledTableCell width="40px">#</StyledTableCell>
        <StyledTableCell>Data dodania</StyledTableCell>
        <StyledTableCell>Imię i nazwisko</StyledTableCell>
        <StyledTableCell>E-mail</StyledTableCell>
        <StyledTableCell>Telefon</StyledTableCell>
        <StyledTableCell>Miejscowośc montażu</StyledTableCell>
        <StyledTableCell></StyledTableCell>
        <StyledTableCell width="40px" style={{ transform: 'translateX(-70%)' }}>
          Obsłużone
        </StyledTableCell>
      </StyledTableHeader>
      <div>
        {requests.length &&
          requests.map((request, i) => <RequestTableRow key={request.id} data={request} num={i} refresh={() => setRefresh(!refresh)} />)}
      </div>
      {loading && <Loader />}
    </StyledWrapper>
  );
};

export default RequestsTable;
