import React, { Component } from 'react';
import LunchLogo from '../../default-food.png';

import { Option } from '../../lib/interfaces';

interface IProps {
    option: Option;
    day: number;
    isSelected: boolean;
    setSelected: (day: number, option: string) => void;
}

class EmployeeLunchOption extends Component<IProps, {}> {

    render() {
        return (
            <div className={`card card-lunchoption ${this.props.isSelected ? ' text-white bg-secondary' : ''}`}
                onClick={() => this.props.setSelected(this.props.day, this.props.option.id)}>
                <img className="card-img-top" src={LunchLogo} alt="Upload lunch option image..." />
                <div className="card-body">
                    <p className="card-text">{this.props.option.name}</p>
                </div>
            </div>
        );
    }
}

export default EmployeeLunchOption;
