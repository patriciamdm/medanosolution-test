import React, { useState, useContext, useEffect } from 'react'
import { Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import ExtrasContext from '../../../context/extras/extrasContext.js'

import AlertMsg from '../../layout/Alert.js'
import ExtraCard from './ExtraCard.js'


const Extras = () => {

    const extrasContext = useContext(ExtrasContext)
    const { contests, getContests, alertmsg } = extrasContext

    const [alert, showAlert] = useState(false)

    useEffect(() => {
        if (alertmsg) showAlert(true)
        getContests()
        // eslint-disable-next-line
    }, [alertmsg])

    return (
        <Container>
            {alert && <AlertMsg msg={alertmsg} />}
            <Typography variant="h3">Contests</Typography>
            <Accordion style={{margin: '20px 0'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography variant="h6">What are contests?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A Pokémon's condition is made up of stats that exist for use in Pokémon Contests, Super Contests, and Contest Spectaculars.
                        <br/>For each of these conditions, there are individual contest categories where Pokémon are judged by how developed they are in the relevant stat. In order to improve a condition stat, Pokémon can be given Pokéblocks and Poffins made from Berries.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Grid container spacing={3}>
                {contests.length > 0 ? contests.map(elm => <ExtraCard key={elm.id} name={elm.name} other={`Berry flavor: ${elm.berry_flavor.name}`}/>) : <Typography>Loading contests...</Typography>}
            </Grid>
        </Container>
    )
}

export default Extras