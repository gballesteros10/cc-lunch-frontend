import React, { Component } from 'react';

import EmployeeView from './employee/EmployeeView';
import EmployerTableView from './employer/EmployerTableView';
import Loader from './Loader';
import { IsUserAdmin } from '../api/UserAPI';

interface IState {
    isAdmin?: boolean;
}

class Home extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isAdmin: undefined
        }
    }

    componentWillMount() {
        // I know, ugly workaround
        // render gets executed first before localStorage.setItem
        setTimeout(() => this.setState({ isAdmin: IsUserAdmin() }), 1000)
    }

    render() {
        if (this.state.isAdmin === undefined) {
            return <Loader />;
        }

        if (this.state.isAdmin) {
            return <EmployerTableView />;
        }

        return <EmployeeView />;

    }
}

export default Home;
