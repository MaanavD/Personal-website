import React from 'react'
import { Text, Icon, Flex, Box, Spacer, Link} from "@chakra-ui/react";
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <Flex templateColumns='repeat(3, 1fr)' flexWrap='wrap'>
        <Box>
            <Text >
                Made with <Icon boxSize={3} as={BsFillSuitHeartFill} /> by yours truly.
            </Text>
        </Box>
        <Spacer />
        <Box >
            <Text marginTop={[3, 0, 0, 0]}>
                Have any questions? Let's talk at: <Link href='mailto:maanavdalal@gmail.com' isExternal>MaanavDalal@gmail.com</Link>.
            </Text>
        </Box>
        </Flex>
    )
}

export default Footer
