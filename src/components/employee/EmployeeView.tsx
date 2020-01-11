import React, { Component } from 'react';
// import './App.css';

import EmployeeLunchDay from './EmployeeLunchDay';
import { GetLunchOrderByUser, CreateLunchOrder } from '../../api/LunchOrderAPI';

import { Days, UserID } from '../../lib/constants';
import { LunchOrder } from '../../lib/interfaces';

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
        Days.forEach(day => {
            console.log(this.state.selectedOptions[day.id]);
            CreateLunchOrder({
                user_id: UserID,
                option_id: this.state.selectedOptions[day.id],
                day: day.id
            });
        })
    }

    render() {
        return (
            <div>
                {Days.map((day) =>
                    <EmployeeLunchDay
                        key={day.id} day={day}
                        selected={this.state.selectedOptions[day.id]}
                        setSelected={this.setSelected} />)}

                <div className="footer fixed-bottom bg-dark" style={{ padding: "8px 15px", textAlign: "right" }}>
                    <button className="btn btn-light" onClick={this.saveChanges}>Save Changes</button>
                </div>
            </div>
        );
    }
}

export default EmployeeView;
