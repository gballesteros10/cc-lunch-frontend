import React, { Component } from 'react';
import EmployeeLunchOption from './EmployeeLunchOption';

import { Options } from '../../lib/constants';
import { Day } from '../../lib/interfaces';

interface IProps {
    day: Day;
    selected: string | null;
    setSelected: (day: number, option: string) => void;
}

class EmployeeLunchDay extends Component<IProps, {}> {

    render() {
        return (
            <div className="card" style={{ margin: "30px" }}>
                <div className="card-header">
                    {this.props.day.name}
                </div>
                <div className="card-body" style={{ display: "flex" }}>
                    {Options.map((option) =>
                        <EmployeeLunchOption
                            key={option.id}
                            day={this.props.day.id}
                            option={option}
                            isSelected={option.id === this.props.selected}
                            setSelected={this.props.setSelected} />)}
                </div>
            </div>
        );
    }
}

export default EmployeeLunchDay;
