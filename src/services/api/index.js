import axios from 'axios';

const api = axios.create({
    baseURL:"https://api.github.com/",
    headers: {
        Authorization: "token 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"
    }
});

export { api }
