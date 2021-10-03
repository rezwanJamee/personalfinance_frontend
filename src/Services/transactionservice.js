import httpClient from "./httpclient";

const getAllTransactions = () => {
    return httpClient.get('/transactions');
}

const addTransactions = (data) => {
    return httpClient.post('/transactions', data);
}

const getTransactionById = id => {
    return httpClient.get(`/transactions/${id}`);
}

const updateTransaction = (data) => {
    return httpClient.put('/transactions', data);
}

const deleteTransactionById = (id) => {
    return httpClient.delete(`/transactions/${id}`);
}

export default { getAllTransactions, addTransactions, getTransactionById, updateTransaction, deleteTransactionById };