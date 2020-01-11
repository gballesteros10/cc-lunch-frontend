import { APIURI } from '../lib/config'
import { LunchOrder } from '../lib/interfaces';
import { GetUser } from './UserAPI';

const user = GetUser();
const userID = user ? (user._id ? user._id : '') : ''; //TODO: fix this

const moduleName = "lunchorder";

export const GetAllLunchOrders = () => { //TODO: pass user to authenticate employer
    return fetch(`${APIURI}/${moduleName}`)
        .then(res => res.json())
        .catch(console.log);
};

export const GetLunchOrderByUser = () => {
    return fetch(`${APIURI}/${moduleName}/${userID}`)
        .then(res => res.json())
        .catch(console.log);
};

export const CreateLunchOrder = (option_id: string | null, day: number) => {
    const lunchOrder: LunchOrder = {
        option_id,
        day,
        user_id: userID
    }

    fetch(`${APIURI}/${moduleName}`, {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(lunchOrder)
    })
        .then((res) => res.json())
        .catch(console.log);
};
