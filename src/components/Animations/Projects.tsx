import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import signin from '../assets/signin.png'
import diwali from '../assets/Diwali.png'
import quiz from '../assets/Quiz.png'

function Projects() {
    return (
        <Box component='div' sx={styles.projects_container}>
            <Typography variant='h3' sx={{ fontWeight: '700' }}>PROJECTS</Typography>
            <Box component='ul' sx={styles.projects_list_container}>
                <Box component='li' sx={styles.projects_item_container}>
                    <Box component='div' sx={styles.projects_content_container}>
                        <Typography component='h4' variant='h5'>Sign In & Sign Up</Typography>
                        <Typography component='p' sx={styles.project_content}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</Typography>
                        <Box>
                            <Button variant='outlined' sx={styles.live_button}>See Live</Button>
                            <Button sx={styles.code_button}>Source Code</Button>
                        </Box>
                    </Box>
                    <Box component='img' src={signin} alt='sign-in project' sx={styles.projects_img} />
                </Box>

                <Box component='li' sx={styles.projects_item_container}>
                    <Box component='div' sx={styles.projects_content_container}>
                        <Typography component='h4' variant='h5'>Diwali</Typography>
                        <Typography component='p' sx={styles.project_content}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</Typography>
                        <Box>
                            <Button variant='outlined' sx={styles.live_button}>See Live</Button>
                            <Button sx={styles.code_button}>Source Code</Button>
                        </Box>
                    </Box>
                    <Box component='img' src={diwali} alt='diwali project' sx={styles.projects_img} />
                </Box>

                <Box component='li' sx={styles.projects_item_container}>
                    <Box component='div' sx={styles.projects_content_container}>
                        <Typography component='h4' variant='h5'>Quiz</Typography>
                        <Typography component='p' sx={styles.project_content}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</Typography>
                        <Box>
                            <Button variant='outlined' sx={styles.live_button}>See Live</Button>
                            <Button sx={styles.code_button}>Source Code</Button>
                        </Box>
                    </Box>
                    <Box component='img' src={quiz} alt='quiz project' sx={styles.projects_img} />
                </Box>
            </Box>
        </Box>
    )
}

export default Projects

const styles = {
    projects_container: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px',
    },

    projects_list_container: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    },

    projects_item_container: {
        display: 'flex', marginTop: '60px', justifyContent: 'space-between', width: '80%'
    },

    projects_content_container: {
        display: 'flex', flexDirection: 'column', width: '40%', marginRight: '50px',
        animationFillMode: 'both',
        animationDuration: '1000ms',
        opacity: '1',
        animationName: 'projects-content-animation',
        '@keyframes projects-content-animation': {
            '0%': {
                opacity: '0',
                transform: 'translate3d(-30px, 0px, 0px)'
            },
            '100%': {
                opacity: '1',
            }
        }
    },

    project_content: {
        margin: '20px 0px 20px 0px'
    },

    projects_img: {
        maxWidth: '600px',
        maxHeight: '300px',
        border: '1px solid #808080',
        loading: 'lazy',
    },

    live_button: {
        color: '#02aab0', border: '2px solid #02aab0', fontWeight: '700', borderRadius: '0px',
        '&:hover': { color: '#fff', boxShadow: 'inset 8.5em 0 0 0 #02aab0', borderColor: '#02aab0' }
    },

    code_button: {
        color: '#02aab0', fontWeight: '700', marginLeft: '10px', borderRadius: '0px',
    }
}