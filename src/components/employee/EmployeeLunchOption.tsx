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
            <div className={`card ${this.props.isSelected ? ' text-white bg-secondary' : ''}`} style={{ width: "8rem", margin: "0px 5px", cursor: "pointer" }}
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
