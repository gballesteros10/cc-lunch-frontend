import { APIURI } from '../lib/config'
import { LunchOrder } from '../lib/interfaces';
import { GetUserID } from './UserAPI';

const moduleName = "lunchorder";

export const GetAllLunchOrders = () => { //TODO: pass user to authenticate employer
    return fetch(`${APIURI}/${moduleName}`)
        .then(res => res.json())
        .catch(console.log);
};

export const GetLunchOrderByUser = () => {
    return fetch(`${APIURI}/${moduleName}/${GetUserID()}`)
        .then(res => res.json())
        .catch(console.log);
};

export const CreateLunchOrder = (option_id: string | null, day: number) => {
    const lunchOrder: LunchOrder = {
        option_id,
        day,
        user_id: GetUserID()
    }

    return fetch(`${APIURI}/${moduleName}`, {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(lunchOrder)
    })
        .then((res) => res.json())
        .catch(console.log);
};
