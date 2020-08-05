import React from 'react';
import AdminPanelTemplate from '../templates/AdminPanelTemplate';
import H1 from '../components/atoms/H1/H1';
import EditHomepageForm from '../components/organisms/EditHomepageForm/EditHomepageForm';

const AdminEditHomepage = () => {
  return (
    <AdminPanelTemplate>
      <H1 data-aos="fade"> Edycja strony głównej </H1>
      <EditHomepageForm />
    </AdminPanelTemplate>
  );
};

export default AdminEditHomepage;
