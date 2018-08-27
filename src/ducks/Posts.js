import { crudHOD } from './hods';

const mod = crudHOD('posts');

export default mod.default;

const url = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = mod.fetch(url);
export const addPost = mod.add(url);
export const delPost = mod.del(url);
