import React from 'react'
import { calc, Container } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
const Resume = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                transition={{ ease: "easeIn", duration: 0.8 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }} style={{ height: `calc(100vh - 65px)` }}>
                <iframe height="100%" width="100%" src="https://drive.google.com/file/d/1_5GPPM1D1QHuYY-QlpikEZnQSkIDKP7i/preview#view=FitH"></iframe>
            </motion.div>
        </AnimatePresence>
    )
}

export default Resume