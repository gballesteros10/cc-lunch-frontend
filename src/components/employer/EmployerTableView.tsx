import React, { Component } from 'react';

import { GetAllLunchOrders } from '../../api/LunchOrderAPI';

import { Days, Options } from '../../lib/constants';
import { OptionSummary, LunchOrder } from '../../lib/interfaces';
import Navigation from '../Navigation';

interface IState {
    summary: OptionSummary[];
}

class EmployerTableView extends Component<{}, IState> {

    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            summary: []
        };
    }

    componentDidMount() {
        GetAllLunchOrders()
            .then((lunchOrders: LunchOrder[]) => {
                if (lunchOrders) {
                    const summary = this.getSummary(lunchOrders);
                    this.setState({ summary: [...summary] });
                }
            });
    }

    getSummary = (lunchOrders: LunchOrder[]) => {
        let optionSummary: OptionSummary[] = [];

        Days.forEach(day => {
            Options.forEach(option => {
                if (Array.isArray(lunchOrders)) {
                    const count = lunchOrders.filter(lunchOrder => lunchOrder.day === day.id && lunchOrder.option_id === option.id).length;
                    optionSummary.push({
                        option: option.id,
                        day: day.id,
                        count: count
                    });
                }
            });
        });

        return optionSummary;
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="table-responsive-md" style={{ padding: "30px" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" />
                                {Days.map(day => <th scope="col" key={day.id}>{day.name}</th>)}
                            </tr>
                        </thead>
                        <tbody>

                            {Options.map(option => {
                                const optionSummary = this.state.summary
                                    .filter(os => os.option === option.id)
                                    .sort((os1, os2) => os1.day - os2.day)
                                    .map(os => os.count);

                                console.log(optionSummary);

                                return (<tr key={option.id}>
                                    <th scope="row">{option.name}</th>
                                    {Days.map(day => <td key={`${option.id}_${day.id}`}>{optionSummary[day.id]}</td>)}
                                </tr>);
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EmployerTableView;
