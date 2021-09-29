import React from 'react'
import AccountForm from '../Components/AccountForm'
import Pageheading from '../Components/Pageheading'

export const AddAccount = () => {
    return (
        <div>
            <Pageheading subtitle="" pageTitle="Add new account" />
            <br />
            <AccountForm />
        </div>
    )
}
