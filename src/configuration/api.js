import axios from "axios";

export const apiInstance = axios.create({
    baseURL: 'https://mooovit-api.staging.matthieutirelli.fr',
    timeout: 5000,
});


apiInstance.setToken = (token) => {
    apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return apiInstance;
}
