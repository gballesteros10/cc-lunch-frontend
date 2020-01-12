import React, { Component } from 'react';

import EmployeeView from './employee/EmployeeView';
import EmployerTableView from './employer/EmployerTableView';
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
            return (
                // TODO: move to new file Loader.tsx
                <div className="d-flex justify-content-center" style={{ marginTop: "30px" }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }

        if (this.state.isAdmin) {
            return <EmployerTableView />;
        }

        return <EmployeeView />;
    }
}

export default Home;
