import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dd469cebf4c64e47a304f5d5a2329fae'
    }
})