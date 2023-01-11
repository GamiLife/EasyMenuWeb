const API = 'http://127.0.0.1:4200/easymenu/api/v1/';

export async function get(path: string){
    const response = await fetch(API + path)
    const result = await response.json();
    return result;
}