import React from 'react';
import SectionTemplate from '../templates/SectionTemplate';
import AdminPanelTopBar from '../components/organisms/AdminPanelTopBar/AdminPanelTopBar';
import PostsTable from '../components/organisms/PostsTable/PostsTable';
import H1 from '../components/atoms/H1/H1';

const AdminPanel = () => {
  return (
    <SectionTemplate style={{ color: '#333' }}>
      <AdminPanelTopBar />
      <H1> SolFran Energy - Blog </H1>
      <PostsTable />
    </SectionTemplate>
  );
};

export default AdminPanel;
