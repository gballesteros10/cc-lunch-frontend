import { Option, OptionSummary } from './interfaces';

export const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const Options: Option[] = [
    { id: '0', name: 'Omni' },
    { id: '1', name: 'Veggie' },
    { id: '2', name: 'Gluten-Free' },
    { id: '3', name: 'Nut-allergy' },
]; //TODO: for improvement: move to db and add create lunch option feature

//TODO:
// - remove this here. should come from api
// - create a mongo query that returns this. day 0-6, options 0-n. complete, even with 0 values
export const Summary: OptionSummary[] = [
    { day: 0, option: '0', count: 3 },
    { day: 0, option: '1', count: 2 },
    { day: 0, option: '2', count: 5 },
    { day: 0, option: '3', count: 0 },
    { day: 1, option: '0', count: 2 },
    { day: 1, option: '1', count: 4 },
    { day: 1, option: '2', count: 7 },
    { day: 1, option: '3', count: 2 },
    { day: 2, option: '0', count: 1 },
    { day: 2, option: '1', count: 2 },
    { day: 2, option: '2', count: 9 },
    { day: 2, option: '3', count: 2 },
    { day: 3, option: '0', count: 3 },
    { day: 3, option: '1', count: 3 },
    { day: 3, option: '2', count: 2 },
    { day: 3, option: '3', count: 6 },
    { day: 4, option: '0', count: 7 },
    { day: 4, option: '1', count: 5 },
    { day: 4, option: '2', count: 5 },
    { day: 4, option: '3', count: 2 },
    { day: 5, option: '0', count: 0 },
    { day: 5, option: '1', count: 1 },
    { day: 5, option: '2', count: 1 },
    { day: 5, option: '3', count: 5 },
    { day: 6, option: '0', count: 3 },
    { day: 6, option: '1', count: 7 },
    { day: 6, option: '2', count: 1 },
    { day: 6, option: '3', count: 1 },
];
