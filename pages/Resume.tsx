import React from 'react'
import { chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const Resume = () => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} style={{ height: `calc(100vh - 65px)`, }}>
            <chakra.iframe height={["100%", "100%", "1200px"]} width="100%" src="https://drive.google.com/file/d/1_5GPPM1D1QHuYY-QlpikEZnQSkIDKP7i/preview#view=FitH"></chakra.iframe>
        </motion.div>
    )
}

export default Resume