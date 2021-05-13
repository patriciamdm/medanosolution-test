import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'


const AlertMsg = msg => {

    return (
        <Alert severity="error" style={{marginBottom: '20px'}}>
          <AlertTitle>Error</AlertTitle>
          {msg}
        </Alert>
    )
}

export default AlertMsg