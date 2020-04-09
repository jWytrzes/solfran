import React from 'react';
import AdminPanelTemplate from '../templates/AdminPanelTemplate';
import H1 from '../components/atoms/H1/H1';
import NewPostForm from '../components/organisms/NewPostForm/NewPostForm';

const AdminNewPost = () => {
  return (
    <AdminPanelTemplate>
      <H1> Nowy post </H1>
      <NewPostForm />
    </AdminPanelTemplate>
  );
};

export default AdminNewPost;
