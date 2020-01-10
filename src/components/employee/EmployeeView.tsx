import React, { Component } from 'react';
// import './App.css';

import EmployeeLunchDay from './EmployeeLunchDay';

import { Days } from '../../lib/constants';
import { LunchOrder } from '../../lib/interfaces';
import { GetLunchOrderByUser, CreateLunchOrder } from '../../api/LunchOrderAPI';

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

    componentDidMount() {
        // TESTING ONLY
        // CreateLunchOrder({
        //     user_id: "5e18a10138165d56baad012c",
        //     option_id: "5e18ae80f6b54210ecf5349d",
        //     day: 2
        // });

        GetLunchOrderByUser()
            .then((lunchOrders: LunchOrder[]) => {
                if (lunchOrders) {
                    const fetchedSelected = [...this.state.selectedOptions];
                    lunchOrders.forEach((order: LunchOrder) => {
                        fetchedSelected[order.day] = order.option_id;
                    });
                    this.setState({
                        selectedOptions: fetchedSelected
                    });
                }
            });
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
