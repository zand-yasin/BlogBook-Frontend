//import axios from 'axios';
const API = "http://localhost:8000/api/";


export const messageTool = async () => {
    const url = `${API}/message/`;
    console.log(url);
};


export const searchTool = async () => {
    const url = `${API}/search/`;
    console.log(url);
};


export const feedTool = async () => {
    const url = `${API}/feed/`;
    console.log(url);
};