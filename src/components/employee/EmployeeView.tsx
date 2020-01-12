import React, { Component } from 'react';
// import './App.css';

import EmployeeLunchDay from './EmployeeLunchDay';
import { GetLunchOrderByUser, CreateLunchOrder } from '../../api/LunchOrderAPI';

import { Days } from '../../lib/constants';
import { LunchOrder } from '../../lib/interfaces';
import Navigation from '../Navigation';

interface IState {
    selectedOptions: (string | null)[];
    isSaved: boolean;
    isSaving: boolean;
}

class EmployeeView extends Component<{}, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            selectedOptions: [null, null, null, null, null, null, null],
            isSaved: false,
            isSaving: false
        };
    }

    componentDidMount() {
        GetLunchOrderByUser()
            .then((lunchOrders: LunchOrder[]) => {
                if (Array.isArray(lunchOrders)) {
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
            selectedOptions: newSelected,
            isSaved: false
        });
    }

    saveChanges = () => {
        this.setState({ isSaving: true });
        const savePromises: Promise<any>[] = [];
        Days.forEach(day => {
            savePromises.push(
                CreateLunchOrder(
                    this.state.selectedOptions[day.id],
                    day.id
                )
            );
        });

        Promise.all(savePromises).then(() => this.setState({ isSaved: true, isSaving: false }))
    }

    render() {
        return (
            <div>
                <Navigation />
                {Days.map((day) =>
                    <EmployeeLunchDay
                        key={day.id} day={day}
                        selected={this.state.selectedOptions[day.id]}
                        setSelected={this.setSelected} />)}

                <div className="footer fixed-bottom bg-dark" style={{ padding: "8px 15px", textAlign: "right" }}>
                    {this.state.isSaved && (
                        <h5 style={{ display: "inline", marginRight: "20px" }}>
                            <span className="badge badge-success text-white" data-toggle="tooltip">Changes Saved</span>
                        </h5>
                    )}

                    <button className="btn btn-light"
                        onClick={this.saveChanges}
                        disabled={this.state.isSaving}>
                        Save Changes
                    </button>
                </div>
            </div>
        );
    }
}

export default EmployeeView;
