import {makeAutoObservable} from "mobx"
//readme 003
export default class UserTravel {
    constructor() {
        this._tours = []

        this._tour = []
        makeAutoObservable(this)
    }

    setTours(tours) { // Именяют состояние
        this._tours = tours
    }

    setTour(tour) {
        this._tour = tour
    }

    // Вызываются если переменная была изменена
    get Tours() {
        return this._tours
    }

    get tour() {
        return this._tour
    }

}
