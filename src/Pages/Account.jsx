import React from 'react'
import { AccountList } from '../Components/AccountList'
import Pageheading from '../Components/Pageheading'

const Account = () => {
    return (
        <div>
            <Pageheading subtitle="Manage here" pageTitle="Accounts" />
            <br />
            <AccountList />
        </div>
    )
}

export default Account
