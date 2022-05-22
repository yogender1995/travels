import React, { Component } from "react";
import AdminRoutes from './componets/dashboard/AdminRoutes';
import SiteRoutes from './componets/main-site/SiteRoutes';

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
        {this.state.adminLogin ? <AdminRoutes /> : <SiteRoutes />}
      </div >
    );
  }
}


export default App;
