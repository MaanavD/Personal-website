import React from 'react'
import { Text, useColorModeValue} from "@chakra-ui/react";

const Achievements = () => {
    return (
        <>
            <Text fontSize="3xl" align='center'>Achievements & Awards</Text>
            <Text align='center'>{"Heres where anything I'm proud of goes. See more on "}<a target="_blank" rel="noopener noreferrer" color={useColorModeValue("blue.500", "blue.200")} href="https://www.linkedin.com/in/maanavdalal"> LinkedIn</a>.</Text>
            <br/>
        </>
    )
}

export default Achievements
