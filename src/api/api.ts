import axios from "axios";

export const MainApi = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });
