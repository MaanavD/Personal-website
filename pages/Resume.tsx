import React from 'react'
import { Center, Text, List, ListItem, ListIcon, useColorModeValue } from '@chakra-ui/react'
import { GoChevronRight } from "react-icons/go"
import styles from "../styles/resume.css"

let sections = ['Education', 'Skills', 'Experience', 'Projects']
let sectionContent = [{}, {}, {}, {}]
const style = {
    "parent": {
        "display": "grid",
        "gridTemplateColumns": "repeat(3, 1fr)",
        "gridTemplateRows": "repeat(2, 1fr)",
        "gridColumnGap": "0px",
        "gridRowGap": "0px"
    },
    "div1": {
        "gridArea": "1 / 1 / 2 / 2"
    },
    "div2": {
        "gridArea": "2 / 1 / 3 / 2"
    },
    "div3": {
        "gridArea": "1 / 2 / 3 / 3"
    },
    "div4": {
        "gridArea": "1 / 3 / 3 / 4"
    }
}
const Resume = () => {
    return (
        <>
            <div style={style.parent}>
                <div style={style.div1}>
                    <Text fontSize='6xl'>{sections[0]}</Text>
                    <Text fontSize='xl'>McMaster University - B.ENG. SOFTWARE ENGINEERING</Text>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={GoChevronRight} color={useColorModeValue("blue.300", "blue.500")} />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </ListItem>

                    </List>
                </div>
                <div style={style.div2}>{sections[1]}</div>
                <div style={style.div3}>{sections[2]}</div>
                <div style={style.div4}>{sections[3]}</div>
            </div>
        </>
    )
}

export default Resume