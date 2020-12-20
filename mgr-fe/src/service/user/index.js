import axios from 'axios';


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


    export const add = (account,password) => {
        return axios.post('http://localhost:3000/user/add',{
            account,
            password,
        });
    };

    export const resetPassword = (id) => {
        return axios.post('http://localhost:3000/user/reset/password',{
            id,
        });
    };