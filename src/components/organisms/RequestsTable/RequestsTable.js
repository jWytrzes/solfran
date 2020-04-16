import React, { useState, useEffect } from 'react';
import { firestore } from '../../../base';
import Loader from '../Loader/Loader';
import RequestTableRow from '../../molecules/RequestTableRow/RequestTableRow';
import { StyledWrapper, StyledHeader, StyledBadge, StyledHeading, StyledTableHeader, StyledTableCell, StyledStats, StyledImportant } from './styles';

const RequestsTable = () => {
  const [loading, setLoading] = useState(false);
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
  }, []);

  const updateItem = (id, currentValue) => {
    requestsCollection
      .doc(id)
      .update({
        checked: !currentValue,
      })
      .then(() => {
        const itemToUpdate = requests.findIndex((item) => item.id === id);
        const newRequests = [...requests];
        newRequests[itemToUpdate].checked = !currentValue;
        setRequests(newRequests);
      });
  };

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeading big>
          Posty <StyledBadge> {requests.length} </StyledBadge>
        </StyledHeading>
        <StyledStats>
          <div>Obsłużone: {requests.filter((item) => item.checked).length} </div>
          <StyledImportant>Nieobsłużone: {requests.filter((item) => !item.checked).length} </StyledImportant>
        </StyledStats>
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
        {requests.length ? requests.map((request, i) => <RequestTableRow key={request.id} data={request} num={i} updateItem={updateItem} />) : null}
      </div>
      {loading && <Loader />}
    </StyledWrapper>
  );
};

export default RequestsTable;
