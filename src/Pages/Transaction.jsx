import React from 'react'
import Pageheading from '../Components/Pageheading'
import { TransactionList } from '../Components/TransactionList'

const Transaction = () => {
    return (
        <div>
            <Pageheading subtitle="All transactions here" pageTitle="Transactions" />
            <br />
            <TransactionList />
        </div>
    )
}

export default Transaction