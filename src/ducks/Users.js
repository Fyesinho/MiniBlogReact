import { crudHOD } from './hods';

const mod = crudHOD('users');

export default mod.default;

const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = mod.fetch(url);
