import React, { Component } from 'react';

import { Outlet} from 'react-router-dom';
import AdminSidebar from '../dashboard/Sidebar';
import AdminHeader from '../dashboard/Header';

class Home extends Component {
    constructor(props) {
		super(props);
    }

    render() {
        return (
            <div><AdminHeader />
				<section className="dashboard gray-bg padd-0 mrg-top-50">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-2 col-md-2 col-sm-3 dashboard-bg">
								<AdminSidebar />
							</div>
							<div className="col-lg-10 col-md-10 col-sm-9 col-lg-push-2 col-md-push-2 col-sm-push-3" style={{"marginTop":"30px"}}>
								<Outlet />
							</div>

						</div>
					</div>

				</section>

            </div>
        );
    }
}

export default Home;