import {makeAutoObservable} from "mobx"
//readme 003
export default class UserTravel {
    constructor() {
        this._isAuth = false // _ыы - Нельзя изменять
        this._user = {}
        makeAutoObservable(this) // Следит за изменением
    }

    setIsAuth(bool) { // Именяют состояние, принимает bool
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    // Вызываются если переменная была изменена в AppRouter (Оптимизация)
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }

}
