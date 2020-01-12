import { APIURI } from '../lib/config'
import { User } from "../lib/interfaces";

export const LoginUser = (username: string, password: string) => {
    const user: User = {
        username,
        password
    };

    return fetch(`${APIURI}/login`, {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(user)
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Invalid username/password');
            }
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            return user;
        })
        .catch(console.log);
};

export const GetUser = () => {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
        var user: User = JSON.parse(userJSON);
        return user;
    }
}

export const GetUserID = () => {
    const user = GetUser();
    return user ? (user._id ? user._id : '') : '';
}

export const LogoutUser = () => {
    localStorage.removeItem('user');
}

export const IsUserAdmin = () => {
    const user = GetUser();
    if (user) {
        return user.is_admin;
    }
    return false;
}
