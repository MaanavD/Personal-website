import React from 'react'
import { Text, useColorModeValue, Link, Grid } from "@chakra-ui/react";
import Achievement from './Achievement';
const Achievements = () => {
    const awards = [
        {
            title: "Provincial Champion",
            type: "Plaque",
            organization: "DECA Canada",
            body: "this is an award from deca canada meaning i placed top 1 in a catory bsm"
        },
        
    ]
    return (
        <>
            <Text fontSize="3xl" align='center'>Achievements & Awards</Text>
            <Text align='center'>{"Heres where anything I'm proud of goes. See more on "}<Link target="_blank" rel="noopener noreferrer" color={useColorModeValue("blue.500", "blue.200")} href="https://www.linkedin.com/in/maanavdalal"> LinkedIn</Link>.</Text>
            <br />
            <Grid gap={6} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>
                {awards.map(award => {
                    return <Achievement key={award.title} title={award.title} type={award.type} organization={award.organization} body={award.body} />
                })}
            </Grid>
        </>
    )
}

export default Achievements
