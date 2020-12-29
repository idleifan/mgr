import axios from 'axios';

export const add = (form) => {
    return axios.post('http://localhost:3000/findLose/add',form,);
};

export const list = (data) => {
    return axios.get('http://localhost:3000/findLose/list',{
        params: data,
    });

};

export const remove = (id) => {
    return axios.delete(`http://localhost:3000/findLose/${id}`,);

};

export const update = (data = {}) => {
    return axios.post(`http://localhost:3000/findLose/update`,data)};

export const detail = (id) => {
    return axios.get(
        `http://localhost:3000/findLose/detail/${id}`,
    )
}