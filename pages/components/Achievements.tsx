import React from 'react'
import { Text, Link, useColorModeValue} from "@chakra-ui/react";

const Achievements = () => {
    return (
        <>
            <Text fontSize="3xl" align='center'>Achievements & Awards</Text>
            <Text align='center'>Here's where anything I'm proud of goes. See more on <a color={useColorModeValue("blue.500", "blue.200")} href='https://www.linkedin.com/in/maanavdalal' isExternal> LinkedIn</a>.</Text>
            <br/>
        </>
    )
}

export default Achievements
