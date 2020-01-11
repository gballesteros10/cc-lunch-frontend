import { User } from "../lib/interfaces";
import { UserID } from "../lib/constants";

export const LoginUser = (username: string, password: string) => {
    const user: User = {
        username
    };

    //TODO: this is hardcoded. fetch from backend
    user._id = UserID;
    user.is_admin = username === 'admin';

    localStorage.setItem('user', JSON.stringify(user));
};

export const GetUser = () => {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
        var user: User = JSON.parse(userJSON);
        return user;
    }
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
