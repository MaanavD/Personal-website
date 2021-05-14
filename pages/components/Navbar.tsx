import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorMode,
	useColorModeValue,
	useDisclosure,
	Center,
	HStack,
	Button,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	SunIcon,
	MoonIcon,
} from "@chakra-ui/icons";
import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();

	const Links = ["Projects", "Skills", "Awards"];
	return (
		<Box>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				flexBasis={"100"}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
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
						borderRadius="0"
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={4} h={4} />
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

				<Flex flex={{ base: 1 }} flexBasis={"100"} justify={"space-evenly"}>
					<Link
						_hover={{
							textDecoration: "none",
							bg: useColorModeValue("gray.200", "gray.700"),
						}}
						href={"/#"}
					>

						<Center d={["flex", "none", "flex"]} fontSize="xl" >
							&nbsp; Maanav &nbsp;
							<Image
								src={colorMode === 'dark' ? "/../public/Logo.png" : "/../public/BLogo.png"}
								alt="temp"
								width="50rem"
								height="50rem"
							/>
							&nbsp; Dalal &nbsp;&nbsp;
						</Center>
						<Box d={["flex", "flex", "none"]}>
							<Image
								src={colorMode === 'dark' ? "/../public/Logo.png" : "/../public/BLogo.png"}
								alt="temp"
								width="50rem"
								height="50rem"
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
						borderRadius="0"
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
		console.log(children);
		router.push(`/${children}`);
	};
	return (
		<Link
			p={2}
			_hover={{
				bg: useColorModeValue("gray.200", "gray.700"),
			}}
			onClick={handleClick}
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
				}}
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
