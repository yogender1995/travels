import React, { Component } from "react";
import AdminRoutes from './componets/dashboard/AdminRoutes';
import SiteRoutes from './componets/main-site/SiteRoutes';
import { Outlet } from "react-router";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminLogin: false
    }
  }

  render() {
    return(
      <div>
        { <SiteRoutes />}
      </div >
    );
  }
}


export default App;
