import React, { Component } from 'react';

import { Days, Options, Summary } from '../../lib/constants';
import { OptionSummary } from '../../lib/interfaces';

interface IState {
    summary: OptionSummary[];
}

class EmployerTableView extends Component<{}, IState> {

    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            summary: [...Summary]
        };
    }

    render() {
        return (
            <div style={{ padding: "30px" }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" />
                            {Days.map(day => <th scope="col">{day}</th>)}
                        </tr>
                    </thead>
                    <tbody>

                        {Options.map(option => {
                            const optionSummary = this.state.summary
                                .filter(os => os.option === option.id)
                                .sort((os1, os2) => os1.day - os2.day)
                                .map(os => os.count);

                            console.log(optionSummary);

                            return (<tr>
                                <th scope="row">{option.name}</th>
                                {Days.map((day, index) => <td>{optionSummary[index]}</td>)}
                            </tr>);
                        }
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployerTableView;
