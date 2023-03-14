import axios from "axios";

const URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacterById = (charId) => {
    return axios.get(`${URL}/${charId}`);
}

export const fetchCharacters = (name) => {
    return axios.get(`${URL}/?name=${name ?? ''}`);
}

export const fetchFilterCharacters = (characterFilter) => {
    return axios.get(`${URL}?name=${characterFilter}`);
}