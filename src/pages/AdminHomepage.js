import React from 'react';
import PostsTable from '../components/organisms/PostsTable/PostsTable';
import H1 from '../components/atoms/H1/H1';
import AdminPanelTemplate from '../templates/AdminPanelTemplate';

const AdminHomepage = () => {
  return (
    <AdminPanelTemplate>
      <H1 data-aos="fade"> SolFran Energy - Blog </H1>
      <PostsTable />
    </AdminPanelTemplate>
  );
};

export default AdminHomepage;
