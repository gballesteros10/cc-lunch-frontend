import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { LoginUser, LogoutUser } from '../../api/UserAPI';
import { User } from '../../lib/interfaces';

interface IState {
    loading: boolean;
    loginSuccessful: boolean;
    showFailAlert: boolean;
}

class UserLogin extends Component<{}, IState> {
    username = React.createRef<HTMLInputElement>();
    password = React.createRef<HTMLInputElement>();

    constructor(props: any) {
        super(props);

        this.state = {
            loginSuccessful: false,
            showFailAlert: false,
            loading: false
        };
    }

    componentDidMount() {
        LogoutUser();
    }

    closeAlert = () => {
        this.setState({ showFailAlert: false });
    }

    onSubmit = () => {
        this.setState({ loading: true });
        if (this.username && this.username.current && this.password && this.password.current) {
            LoginUser(this.username.current.value, this.password.current.value)
                .then((user: User) => {
                    if (user && user._id) {
                        this.setState({
                            loginSuccessful: true,
                            loading: false
                        })
                    } else {
                        this.setState({
                            showFailAlert: true,
                            loading: false
                        })
                    }
                })
        }
    }

    render() {
        if (this.state.loginSuccessful) {
            return <Redirect to='/' />
        }
        return (
            <div className="d-flex justify-content-center">
                <div className="card" style={{ width: "500px", marginTop: "30px" }}>
                    <div className="card-header bg-dark text-white">
                        Login
                        </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" ref={this.username} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" ref={this.password} />
                        </div>
                        {
                            this.state.showFailAlert && (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Login Failed</strong> Invalid username and/or password.
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.closeAlert}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            )
                        }
                        <button className="btn btn-dark" onClick={this.onSubmit} disabled={this.state.loading}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserLogin;
