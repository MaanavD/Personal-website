import React from 'react'
import { Text, Icon, Grid, Box, Spacer, Link, useColorModeValue } from "@chakra-ui/react";
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <Grid templateColumns='repeat(3, 1fr)' flexWrap='wrap'>
            <Box>
                <Text >
                    Made with <Icon color={useColorModeValue("blue.500", "blue.200")} boxSize={3} as={BsFillSuitHeartFill} /> by yours truly.
                </Text>
            </Box>
            <Spacer />
            <Box >
                <Text align="right" marginTop={[3, 0, 0, 0]}>
                    {"Have any questions? Let's talk at: "}<Link color={useColorModeValue("blue.500", "blue.200")} href="mailto:maanavdalal@gmail.com" isExternal>MaanavDalal@gmail.com</Link>.
                </Text>
            </Box>
        </Grid>
    )
}

export default Footer
