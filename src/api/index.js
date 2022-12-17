import axios from "axios";


export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export const appid = "d71098a49f8209b0c1151408fdafd6bd";