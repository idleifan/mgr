import axios from 'axios';
import { normalizeUnits } from 'moment';
import { reactive } from 'vue';


export const list = (page = 1,size = 20,key = '') => {
    return axios.get('http://localhost:3000/user/list',{
        params: {
            page,
            size,
            key,
        }
    })};

    export const remove = (id) => {
        console.log('id111', id)
        return axios.delete(`http://localhost:3000/user/${id}`);
    };


    export const add = (account,password,character) => {
        return axios.post('http://localhost:3000/user/add',{
            account,
            password,
            character,
        });
    };

    export const resetPassword = (id) => {
        return axios.post('http://localhost:3000/user/reset/password',{
            id,
        });
    };

    export const editCharacter = (characterId,userId) => {
        return axios.post('http://localhost:3000/user/update/character', {
            character: characterId,
            userId: userId,
        });
    };

    export const info = () => {
        return axios.get('http://localhost:3000/user/info');
    };
    
