import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const accountListHead = [
    { field: 'accountname', headerName: 'Account name', editable: false, width: 250,},
    { field: 'balance', headerName: 'Balance', editable: false, width: 150,},
    { field: 'bankname', headerName: 'Bank name', editable: false, width: 150,},
    { field: 'currency', headerName: 'Currency', editable: false, width: 150,},
    { field: 'createdate', headerName: 'Create date', editable: false, width: 180,},
    { field: 'lastdate', headerName: 'Last date', editable: false, width: 180,},   
]

const accountListData = [
    { id: 1, accountname: "Cash", balance: 25.5, bankname: "wallet", 
        createdate: "25-09-2021", lastdate: "25-09-2021", currency: "AUD"},
    { id: 2, accountname: "Primary", balance: 25.5, bankname: "wallet", 
        createdate: "25-09-2021", lastdate: "25-09-2021", currency: "AUD"},
    { id: 3, accountname: "Business account", balance: 1225.45, 
        bankname: "ANZ", createdate: "15-10-2021", lastdate: "25-09-2021", currency: "AUD"},
    { id: 4, accountname: "International account", balance: 525.5, 
        bankname: "HSBC", createdate: "25-09-2021", lastdate: "25-09-2021", currency: "JPY"},
]

export const AccountList = () => {
    return (
        <Paper>
            <div style={{ height: 600, width: '100%', padding: '1rem' }}>
            <DataGrid 
                rows={accountListData}
                columns={accountListHead}
                pageSize={5}
                rowsPerPageOptions={[10]}
            />
            </div>
        </Paper>
    )
}
