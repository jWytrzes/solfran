import React from 'react';
import SectionTemplate from '../templates/SectionTemplate';
import AdminPanelTopBar from '../components/organisms/AdminPanelTopBar/AdminPanelTopBar';

const AdminPanelTemplate = ({ children }) => {
  return (
    <SectionTemplate style={{ color: '#333' }}>
      <AdminPanelTopBar />
      {children}
    </SectionTemplate>
  );
};

export default AdminPanelTemplate;
