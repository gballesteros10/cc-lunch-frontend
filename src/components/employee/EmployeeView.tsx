import React, { Component } from 'react';
// import './App.css';

import EmployeeLunchDay from './EmployeeLunchDay';

import { Days } from '../../lib/constants';

interface IState {
    selectedOptions: (string | null)[];
}

class EmployeeView extends Component<{}, IState> {

    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            selectedOptions: [null, null, null, null, null, null, null]
        };
    }

    setSelected = (day: number, option: string) => {
        const newSelected = [...this.state.selectedOptions];
        newSelected[day] = newSelected[day] !== option ? option : null;
        this.setState({
            selectedOptions: newSelected
        });
    }

    saveChanges = () => {
        //TODO: call api save
        console.log(this.state.selectedOptions);
    }

    render() {
        return (
            <div>
                {Days.map((day, index) =>
                    <EmployeeLunchDay
                        key={index} day={index}
                        selected={this.state.selectedOptions[index]}
                        setSelected={this.setSelected} />)}

                <div className="footer fixed-bottom bg-dark" style={{ padding: "8px 15px", textAlign: "right" }}>
                    <button className="btn btn-light" onClick={this.saveChanges}>Save Changes</button>
                </div>
            </div>
        );
    }
}

export default EmployeeView;
