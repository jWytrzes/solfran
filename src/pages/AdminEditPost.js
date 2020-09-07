import React from 'react';
import AdminPanelTemplate from '../templates/AdminPanelTemplate';
import H1 from '../components/atoms/H1/H1';
import NewPostForm from '../components/organisms/NewPostForm/NewPostForm';

const AdminEditPost = () => {
  return (
    <AdminPanelTemplate>
      <H1 data-aos="fade"> Edytuj post </H1>
      <NewPostForm edit />
    </AdminPanelTemplate>
  );
};

export default AdminEditPost;
