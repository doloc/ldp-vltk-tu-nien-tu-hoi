import axios from 'axios';

const API_URL = 'https://ldp.wiremockapi.cloud';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const MW = {
    getEventState: async () => {
        const response = await api.get('/api/event-state?event_id=123456');
        return {
            "err": 0,
            "msg": "Success",
            "data": {
              "state": "processing"
            }
        };
    },

    checkin: async () => {
        const response = await api.post('/api/checkin', {
            "zgsk": "123456"
        })
        return response.data;
    },

    getHisCheckin: async () => {
        return {}
    }
};