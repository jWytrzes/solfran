import React from 'react';
import H1 from '../components/atoms/H1/H1';
import AdminPanelTemplate from '../templates/AdminPanelTemplate';
import RequestsTable from '../components/organisms/RequestsTable/RequestsTable';

const AdminValuationRequests = () => {
  return (
    <AdminPanelTemplate>
      <H1> SolFran Energy - Prośby o wycenę </H1>
      <RequestsTable />
    </AdminPanelTemplate>
  );
};

export default AdminValuationRequests;
