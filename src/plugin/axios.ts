import axios from 'axios';

function createAxios(baseUrl: string) {
    return axios.create({
        baseURL: baseUrl,
        timeout: 10000
    });
}

export default createAxios;
