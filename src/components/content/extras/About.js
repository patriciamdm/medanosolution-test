import React from 'react'
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const About = () => {
    return (
        <Container>
            <Typography variant="h3">Ash Ketchum</Typography>
            <hr />
            <Typography variant="subtitle1">
                Ash Ketchum is the main character of Pokémon. He is a Pokémon Trainer from Pallet Town whose goal is to become a Pokémon Master. His starter Pokémon was a Pikachu that he received from Professor Oak after arriving late at his laboratory. In Pokémon the Series: Sun & Moon, he becomes the first Champion of the Alola region's Pokémon League.
            </Typography>
            <Accordion style={{margin: '20px 0'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography variant="h6">About Ash</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ash is an only child who lived with his mother Delia, until he left for his Pokémon journey at the age of ten. His main goal in life is to be the world's greatest Pokémon Master.
                        <br />One particular characteristic about Ash, aside from his determination and his passion for raising and training Pokémon, is that he is incredibly selfless. He will often go to extraordinary lengths to earn a Pokémon's trust and respect and to better understand a Pokémon that he sees as troubled. He is also very fair-minded and trusting, a true testament to his good-natured character.
                        <br />Ash also has a strong sense of justice, especially when it comes to Pokémon. If a Pokémon is in trouble, he will make every effort to help them, even if he has no prior connection to them. If they are the cause of trouble, he will stop them, and then try to understand them, with almost all such occasions being a case of the Pokémon, or their Trainers or friends, having a problem which can't be resolved normally. In those cases, he will selflessly volunteer to help them.
                        <br/>Should the problem be caused by humans, such as Team Rocket, Pokémon thieves, hunters, or poachers, Ash will resolve to do anything in his power to stop them.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{margin: '20px 0'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography variant="h6">His Pokémon</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        As a Trainer, Ash has caught and befriended a sizable number of Pokémon. His philosophy on training is that Pokémon are individuals and that a combination of trust, friendship, and hard work are needed to overcome adversity. Several of Ash's Pokémon were caught because they allowed him to after he befriended them.
                        <br/>He seems to battle best with Pokémon that are similar to Pikachu: ones that are speedy and maneuverable, yet able to perform high-powered attacks; however, he is willing to work with any Pokémon that comes into his care.
                        <br/>Though Ash normally catches five or more Pokémon per region, he rarely ever switches the Pokémon in his current party with those in storage at Professor Oak's Laboratory. He usually only does so when battling against powerful opponents, or when attending certain events that requires a specific Pokémon. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{margin: '20px 0'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography variant="h6">In the games - core series</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ash Ketchum is based on Red, his counterpart from the games. Additionally, "Ash" is one of the suggested names for Red in the games Pokémon Red, Yellow, FireRed, and LeafGreen, for the rival character Blue in the games Pokémon Blue (international) and LeafGreen, and for Ethan in Pokémon HeartGold and SoulSilver.
                        <br/>In Pokémon Yellow, some elements are based on the anime. Red, the player character, starts with a Pikachu, which is based on Ash's Pikachu. Red later receives the trio of Kanto starter Pokémon in similar circumstances as Ash: Bulbasaur from a girl based on Melanie, Charmander from a boy based on Damian, and Squirtle from an Officer Jenny.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default About