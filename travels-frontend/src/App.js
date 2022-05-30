import React, { Component } from "react";
import AdminRoutes from './componets/dashboard/AdminRoutes';
import SiteRoutes from './componets/main-site/SiteRoutes';

import AuthUser from './componets/AuthUser';

const App = () => {

  const {getToken} = AuthUser();

  if(!getToken()){

    return <SiteRoutes />
  }
  return (
      <AdminRoutes />
  );
}

export default App;
