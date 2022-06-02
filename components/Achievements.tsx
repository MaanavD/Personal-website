import React from 'react'
import { Text, useColorModeValue, Link, Grid } from "@chakra-ui/react";
import Achievement from './Achievement';
import { AnimatePresence, motion } from 'framer-motion';
const Achievements = () => {
    const awards = [
        {
            title: "Canada's Top Student",
            date: "Feb 2020",
            organization: "Scotiabank",
            body: "My team and I won first place at Scotiabank's 'Canada's Top Students' competiton, which tested our teamwork and communication skills."
        },
        {
            title: "First Place",
            date: "May 2019",
            organization: "HackWescam - L3 Wescam",
            body: "Working with 3 drones, my team and I worked together to program them to run simulated military missions using OpenCV."
        },
        {
            title: "Materials Award",
            date: "Jan 2020",
            organization: "DeltaHacks",
            body: "We created a microstructure analysis tool that annotates 2d structures with grain size, distributions, and more using image modeling."
        },
        {
            title: "Best Pitch",
            date: "Sept 2019",
            organization: "Hack the North",
            body: "After creating GitFit, a platform helping users understand correct form, we won Deloitte's \"Perfect Pitch\" competition for our idea!"
        },
        {
            title: "First Place",
            date: "Nov 2017",
            organization: "AlphaHacks",
            body: "At this fintech hackathon, we created an android app called Employmint, meant to help youth looking for entry level jobs find them."
        },
        {
            title: "First Place",
            date: "June 2018",
            organization: "TurnerHacks",
            body: "Using Stdlib, Node.js, and the Slack API, my team created a slack bot to summarize long conversations based on user-determined criteria."
        },
        {
            title: "Best UX/UI",
            date: "Feb 2017",
            organization: "StarterHacks",
            body: "Using Materialize.css and bootstrap, my team won an MLH medal for creating the hackathon networking website, HackEasy."
        },
        {
            title: "Conference Chairperson",
            date: "Feb 2018",
            organization: "START",
            body: "I had the honor of being the Chairperson for a district-wide leadership conference, START, with over 250 attendees."
        },
        {
            title: "International Finalist",
            date: "Apr 2018",
            organization: "DECA",
            body: "I placed top-20 globally in my category of Business Services Marketing at the DECA Business & Case Competition."
        },
        {
            title: "Provincial Champion",
            date: "Feb 2018",
            organization: "DECA Ontario",
            body: "Over 4 years, I recieved 2 plaques and over 7 medals for exams and case studies in the category of Business Services Marketing."
        },
        // {
        //     title: "Regional Champion",
        //     date: "Nov 2018",
        //     organization: "DECA Ontario",
        //     body: "Over 4 years, I recieved 2 top-2 medals alongside 5 ribbons in recognition for my perfomance in both case studies and exams."
        // },
        {
            title: "MDCC Finalist",
            date: "Nov 2019",
            organization: "Collegiate DECA McMaster",
            body: "As a university student, I continued DECA in the Marketing Consulting category, and was awarded two medals for case studies."
        },
        {
            title: "Chapter President",
            date: "May 2022",
            organization: "Collegiate DECA McMaster",
            body: "I completed my DECA journey as a chapter president for collegiate DECA McMaster, hosting a regional event and taking a chapter of 50 delegates to the provincial competition."
        },

    ]

    const sortedAwards = awards.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <>
            <Text fontSize="3xl" align='center'>Achievements & Awards</Text>
            <Text align='center'>{"Heres where anything I'm proud of goes. See more on "}<Link target="_blank" rel="noopener noreferrer" color={useColorModeValue("blue.500", "blue.200")} href="https://www.linkedin.com/in/maanavdalal"> LinkedIn</Link>.</Text>
            <br />
            <Grid gap={6} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>
                <AnimatePresence>
                    {sortedAwards.map((award, i) => {
                        const transition = {
                            ease: "easeIn",
                            duration: i > 10 ? 1.5 : i * 0.15
                        }
                        return (<motion.article key={award.title + award.organization}
                            initial={{ y: 10, opacity: 0 }}
                            transition={transition}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}>
                            <Achievement key={award.title} title={award.organization} date={award.date} organization={award.title} body={award.body} />
                        </motion.article>)
                    })}
                </AnimatePresence>
            </Grid>
        </>
    )
}

export default Achievements
