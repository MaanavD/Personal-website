import React, { useEffect, useState } from "react";
import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

import { IoMdAlert } from "react-icons/io";
import { NextSeo } from "next-seo";

export default function Error404() {
    const [href, setHref] = useState('');
    useEffect(() => {
        let string = window.location.href;
        let lastIndex = string.lastIndexOf('/')
        setHref(string.slice(lastIndex))
    }, []);
    return (
        <>
            <NextSeo title="404" description="Error page."/>
            <Flex py={64} mx="auto">
                <Flex
                    maxW="lg"
                    w="full"
                    mx="auto"
                    bg={useColorModeValue("gray.100", "gray.700")}
                    rounded="lg"
                    overflow="hidden"
                >
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        w={12}
                        bg="yellow.500"
                    >
                        <Icon as={IoMdAlert} color="white" boxSize={6} />
                    </Flex>

                    <Box mx={-3} py={2} px={4}>
                        <Box mx={3}>
                            <chakra.span
                                color={useColorModeValue("yellow.400", "yellow.300")}
                                fontWeight="bold"
                            >
                                {"404: Page not found"}
                            </chakra.span>
                            <chakra.p
                                color={useColorModeValue("gray.600", "gray.200")}
                                fontSize="sm"
                            >
                                {`I can't find ${href} - how'd you get here anyway?`}
                            </chakra.p>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </>

    );
};