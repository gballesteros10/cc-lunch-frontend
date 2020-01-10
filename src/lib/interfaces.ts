export interface Option {
    id: string;
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
    option_id: string;
    day: number;
}
