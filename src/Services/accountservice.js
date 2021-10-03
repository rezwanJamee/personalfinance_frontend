import httpClient from "./httpclient";

const getAllAccounts = () => {
    return httpClient.get('/accounts');
}

const addAccounts = (data) => {
    return httpClient.post('/accounts', data);
}

const getAccountById = id => {
    return httpClient.get(`/accounts/${id}`);
}

const updateAccount = (data) => {
    return httpClient.put('/accounts', data);
}

const deleteAccountById = (id) => {
    return httpClient.delete(`/accounts/${id}`);
}

export default { getAllAccounts, addAccounts, getAccountById, updateAccount, deleteAccountById };