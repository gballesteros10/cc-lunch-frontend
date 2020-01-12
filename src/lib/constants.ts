import { Option, Day } from './interfaces';

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
