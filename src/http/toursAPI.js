import {$authHost, $host} from "./index";

export const fetchTours = async () => {
    const {data} = await $host.get('api/tours')
    return data
}

export const fetchOneTour = async (id) => {
    const {data} = await $host.get('api/tours/' + id)
    return data
}