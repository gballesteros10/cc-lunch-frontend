import React, { Component } from 'react';

import EmployeeView from './employee/EmployeeView';
import EmployerTableView from './employer/EmployerTableView';
import Loader from './Loader';
import { GetUser } from '../api/UserAPI';
import { User } from '../lib/interfaces';
import UserLogin from './user/UserLogin';

interface IState {
    user?: User;
    isDoneFetching: boolean;
}

class Home extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: undefined,
            isDoneFetching: false
        }
    }

    componentWillMount() {
        // I know, ugly workaround
        // render gets executed first before localStorage.setItem
        setTimeout(() => {
            this.setState({
                user: GetUser(),
                isDoneFetching: true
            })
        }, 1000)
    }

    render() {
        if (this.state.user) {
            if (this.state.user.is_admin)
                return <EmployerTableView />
            return <EmployeeView />
        }

        if (this.state.isDoneFetching) {
            return <UserLogin />;
        }

        return <Loader />;
    }
}

export default Home;
