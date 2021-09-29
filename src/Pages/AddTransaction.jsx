import React from 'react'
import Pageheading from '../Components/Pageheading'
import TransactionForm from '../Components/TransactionForm'

export default function AddTransaction() {
    return (
        <div>
            <Pageheading subtitle="" pageTitle="Add new transaction" />
            <br />
            <TransactionForm />
        </div>
    )
}
