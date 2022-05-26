import { react } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Outlet} from 'react-router-dom';
import Services from '../main-site/Services';
import AdminHome from '../dashboard/Home';


class DynamicSection extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
              
            </div>
        );
    }
}

export default DynamicSection;