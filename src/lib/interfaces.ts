export interface Option {
    id: string;
    name: string;
};

export interface Day {
    id: number;
    name: string;
};

export interface OptionSummary {
    option: string;
    day: number;
    count: number;
}

export interface LunchOrder {
    _id?: string;
    user_id: string;
    option_id: string | null;
    day: number;
}

export interface User {
    _id?: string;
    username: string;
    password: string;
    is_admin?: boolean;
}
