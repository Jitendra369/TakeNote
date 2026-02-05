import { environment } from "../environments/environment";
import { Log } from "../model/log";

const BASE_URL = environment.apiBaseUrl;
const BASE_LOG_URL = environment.apiBaseLogUrl;
const ROOT_URL = environment.rootUrl;

export const API_ENDPOINTS = {
    USER: {
        GET_ALL: `${BASE_URL}/user/all`,
        GET_BY_ID: (id: string) => `${BASE_URL}/user/${id}`,
        ADD_NOTE: (userId: string) => `${BASE_URL}/user/${userId}/note`
    },
    LOG: {
        VIEW_ALL: `${BASE_LOG_URL}/all`,
        ADD_LOGS: `${BASE_LOG_URL}/add`
    },
    CATEG: {
        VIEW_ALL: `${ROOT_URL}/api/log/logCateg/view/all`,
        SAVE: `${ROOT_URL}/api/log/logCateg/save`
    }
}