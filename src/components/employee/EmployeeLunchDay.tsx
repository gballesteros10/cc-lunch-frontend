import React, { Component } from 'react';
import EmployeeLunchOption from './EmployeeLunchOption';

import { Days, Options } from '../../lib/constants';

interface IProps {
    day: number;
    selected: string | null;
    setSelected: (day: number, option: string) => void;
}

class EmployeeLunchDay extends Component<IProps, {}> {

    render() {
        return (
            <div className="card" style={{ margin: "30px" }}>
                <div className="card-header">
                    {Days[this.props.day]}
                </div>
                <div className="card-body" style={{ display: "flex" }}>
                    {Options.map((option) =>
                        <EmployeeLunchOption
                            key={option.id}
                            day={this.props.day}
                            option={option}
                            isSelected={option.id === this.props.selected}
                            setSelected={this.props.setSelected} />)}
                </div>
            </div>
        );
    }
}

export default EmployeeLunchDay;
