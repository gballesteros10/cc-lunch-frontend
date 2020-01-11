import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { LoginUser, LogoutUser } from '../../api/UserAPI';

interface IState {
    loginSuccessful: boolean;
}

class UserLogin extends Component<{}, IState> {
    username = React.createRef<HTMLInputElement>();
    password = React.createRef<HTMLInputElement>();

    constructor(props: any) {
        super(props);

        this.state = {
            loginSuccessful: false
        };
    }

    componentDidMount() {
        LogoutUser();
    }

    onSubmit = () => {
        if (this.username && this.username.current && this.password && this.password.current) {
            LoginUser(this.username.current.value, this.password.current.value);
            this.setState({ loginSuccessful: true });
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
                        <button className="btn btn-dark" onClick={this.onSubmit} >Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserLogin;
