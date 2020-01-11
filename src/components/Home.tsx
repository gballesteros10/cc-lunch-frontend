import React, { Component } from 'react';

import EmployeeView from './employee/EmployeeView';
import EmployerTableView from './employer/EmployerTableView';
import { IsUserAdmin } from '../api/UserAPI';

class Home extends Component<{}, {}> {
    render() {
        if (IsUserAdmin()) {
            return <EmployerTableView />;
        }

        return <EmployeeView />;
    }
}

export default Home;
