import React from 'react'
import { ButtonGroup, Button } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'


const Pager = ({ changePage, next, previous }) => {
    
    return (
    <ButtonGroup disableElevation variant="contained" color="primary">
        <Button onClick={() => changePage(previous)} disabled={previous ? false : true}>
            <NavigateBeforeIcon />
        </Button>
        <Button onClick={() => changePage(next)} disabled={next ? false : true}>
            <NavigateNextIcon />
        </Button>
    </ButtonGroup>
  )
}

export default Pager