import { UserID } from '../lib/constants'; //TODO: this should be fetched from logged in user
import { APIURI } from '../lib/config'
import { LunchOrder } from '../lib/interfaces';

const moduleName = "lunchorder";

export const GetAllLunchOrders = () => {
    return fetch(`${APIURI}/${moduleName}`)
        .then(res => res.json())
        .catch(console.log);
};

export const GetLunchOrderByUser = () => {
    return fetch(`${APIURI}/${moduleName}/${UserID}`)
        .then(res => res.json())
        .catch(console.log);
};

export const CreateLunchOrder = (lunchOrder: LunchOrder) => {
    fetch(`${APIURI}/${moduleName}`, {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(lunchOrder)
    })
        .then((res) => res.json())
        .catch(console.log);
};
