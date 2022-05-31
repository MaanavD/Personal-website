import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	Link,
	useColorMode,
	useColorModeValue,
	useDisclosure,
	Center,
	HStack,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	SunIcon,
	MoonIcon,
} from "@chakra-ui/icons";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();
	const router = useRouter();
	const handleClick = (e) => {
		e.preventDefault();
		router.push(`/`);
	};
	const Links = ["Blog", "Resume", "Contact"];
	return (
		<Box style={{ position: 'sticky', top: 0, zIndex: 100 }}>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				flexBasis={"100"}
				borderStyle={"solid"}
				borderColor={"fff"}
				align={"center"}
			>
				<Flex
					flex={{ base: 1 }}
					flexBasis={"100"}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex
					flex={{ base: 1 }}
					flexBasis={"100"}
					display={{ base: "none", md: "flex" }}
				>
					<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
						{Links.map((link) => (
							<DesktopNav key={link}>{link}</DesktopNav>
						))}
					</HStack>
				</Flex>

				<Flex flex={{ base: 1 }} flexBasis={"100"} justify={"space-evenly"} >
					<Link
						_hover={{
							textDecoration: "none",
							bg: useColorModeValue("gray.200", "gray.700"),
						}}
						onClick={handleClick}
						borderRadius="8px"
						padding={'4px'}
					>

						<Center display={["none", "none", "flex"]} fontSize="xl"
						>
							&nbsp; Maanav &nbsp;
							<Image
								src={colorMode === 'dark' ? "/LogoWhite.svg" : "/LogoBlack.svg"}
								alt="Maanav Dalal logo"
								width="40rem"
								height="40rem"
							/>
							&nbsp; Dalal &nbsp;
						</Center>
						<Box display={["flex", "flex", "none"]}>
							<Image
								src={colorMode === 'dark' ? "/LogoWhite.svg" : "/LogoBlack.svg"}
								alt="Colour mode logo"
								width="40rem"
								height="40rem"
							/>
						</Box>
					</Link>
				</Flex>

				<Flex flex={{ base: 1 }} justify={"flex-end"} flexBasis={"100"}>
					<IconButton
						onClick={toggleColorMode}
						icon={
							colorMode === "light" ? (
								<MoonIcon w={4} h={4} />
							) : (
								<SunIcon w={4} h={4} />
							)
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<Stack
					bg={useColorModeValue("white", "gray.800")}
					p={4}
					display={{ md: "none" }}
					borderY="1px"
					borderColor={useColorModeValue("gray.200", "gray.900")}
				>
					{Links.map((link) => (
						<MobileNav key={link}>{link}</MobileNav>
					))}
				</Stack>
			</Collapse>
		</Box>
	);
}

const DesktopNav = ({ children }) => {
	const router = useRouter();
	const handleClick = (e) => {
		e.preventDefault();
		router.push(`/${children}`);
	};
	return (
		<Link
			p={2}
			_hover={{
				bg: useColorModeValue("gray.200", "gray.700"),
			}}
			onClick={handleClick}
			borderRadius="8px"
		>
			<Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
				{children}
			</Text>
		</Link>
	);
};

const MobileNav = ({ children }) => {
	const router = useRouter();
	const { isOpen, onToggle } = useDisclosure();
	const handleClick = (e) => {
		e.preventDefault();
		console.log(children);
		router.push(`/${children}`);
	};
	return (
		<Stack spacing={4} onClick={onToggle}>
			<Flex
				py={2}
				as={Link}
				onClick={handleClick}
				justify={"center"}
				align={"center"}
				_hover={{
					textDecoration: "none",
					bg: useColorModeValue("gray.200", "gray.700"),
				}}
				borderRadius="8px"
			>
				<Text
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.200")}
				>
					{children}
				</Text>
			</Flex>
		</Stack>
	);
};
