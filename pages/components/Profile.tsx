import { Flex, useColorModeValue, Box, Icon, Image, chakra } from "@chakra-ui/react";
import { FiCoffee } from "react-icons/fi"
import { FaLocationArrow, FaBriefcase, FaEnvelope } from "react-icons/fa"

export default function Profile() {
    return (
        <Box
            mx={"auto"}
            bg={useColorModeValue("gray.100", "gray.700")}
            rounded="lg"
            maxW="sm"
        >
            <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
                roundedTop={"lg"}
            />

            <Flex alignItems="center" px={6} py={3} bg={useColorModeValue("blue.500", "gray.600")}>
                <Icon as={FiCoffee} h={6} w={6} color={"white"} />
                <chakra.h1 mx={3} color={"white"}  fontWeight="bold" fontSize="lg">
                    Drinking coffee
                </chakra.h1>
            </Flex>

            <Box py={4} px={6}>
                <chakra.h1
                    fontSize="xl"
                    fontWeight="bold"
                    color={useColorModeValue("gray.800", "white")}
                >
                    Maanav Dalal
                </chakra.h1>

                <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
                    Program Manager. I love experimenting with fun frontend and adore consumer technology. My hobbies of choice are video games and rock climbing.
                </chakra.p>

                <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    <Icon as={FaBriefcase} h={6} w={6} mr={2} />

                    <chakra.h1 px={2} fontSize="sm">
                        Microsoft
                    </chakra.h1>
                </Flex>

                <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    <Icon as={FaLocationArrow} h={6} w={6} mr={2} />

                    <chakra.h1 px={2} fontSize="sm">
                        Bellevue, WA
                    </chakra.h1>
                </Flex>
                <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    <Icon as={FaEnvelope} h={6} w={6} mr={2} />

                    <chakra.h1 px={2} fontSize="sm">
                        maanavdalal@gmail.com
                    </chakra.h1>
                </Flex>
            </Box>
        </Box>
    );
};

