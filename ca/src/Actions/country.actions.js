import { SET_DATA,SET_SEARCH } from "../Types/country.types";

export const setData = (data) => ({
    type: SET_DATA,
    payload: data
});

export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search
});