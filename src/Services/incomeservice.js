import httpClient from "./httpclient";

const getAllIncomes = () => {
    return httpClient.get('/incomes');
}

const addIncomes = (data) => {
    return httpClient.post('/incomes', data);
}

const getIncomeById = id => {
    return httpClient.get(`/incomes/${id}`);
}

const updateIncome = (data) => {
    return httpClient.put('/incomes', data);
}

const deleteIncomeById = (id) => {
    return httpClient.delete(`/incomes/${id}`);
}

export default { getAllIncomes, addIncomes, getIncomeById, updateIncome, deleteIncomeById };