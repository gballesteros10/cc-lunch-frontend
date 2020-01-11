import { Option, OptionSummary, Day } from './interfaces';

export const Days: Day[] = [
    { id: 0, name: 'Sunday' },
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
];

export const Options: Option[] = [
    { id: '5e18ae80f6b54210ecf5349b', name: 'Omni' },
    { id: '5e18ae80f6b54210ecf5349c', name: 'Veggie' },
    { id: '5e18ae80f6b54210ecf5349d', name: 'Gluten-Free' },
    { id: '5e18ae80f6b54210ecf5349e', name: 'Nut-allergy' },
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

export const UserID = '5e18a10138165d56baad012c';
