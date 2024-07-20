import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import profilePic from '../assets/profile-pic.jpg';
import { experiencResume } from '../assets';

const AboutMe = () => {
    return (
        <Box component='div' sx={styles.about_me_container} id={'aboutMe'}>
            <Typography variant='h4' sx={styles.about_me_heading}>About Me</Typography>
            <Box component='div' sx={styles.img_content_container}>
                <Box component='img' src={profilePic} sx={styles.about_me_img} />
                <Box component='div' sx={styles.content_button_container}>
                    <Typography component='p' sx={styles.about_me_content}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum
                        consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                        <Typography component='br' />
                        <Typography component='br' />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum
                        consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                        <Typography component='br' />
                        <Typography component='br' />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </Typography>
                    <Box component='a' href={experiencResume} target='_blank'>
                        <Button variant='outlined' sx={styles.resume_button}>Resume</Button>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}
export default AboutMe

const styles = {
    about_me_container: {
        backgroundColor: '#02aab0', backgroundSize: 'cover', display: 'flex',
        flexDirection: 'column', alignItems: 'center', padding: '50px',
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
        sm: { clipPath: 'none' }
    },
    about_me_heading: {
        color: '#fff', fontWeight: '800',
        animationFillMode: 'both',
        animationDuration: '1000ms',
        animationIterationCount: '1',
        animationName: 'about-me-heading',
        opacity: '1',

        '@keyframes about-me-heading': {
            '0%': {
                opacity: 0,
                transform: 'translate3d(0px, 0px, 0px)',
            },
            '100%': {
                opacity: 1,
            }
        },
    },

    img_content_container: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '70%',
        margin: '50px',
    },

    about_me_img: {
        width: '300px',
        height: '300px',
        animationFillMode: 'both',
        animationIterableCount: '1',
        animationDelay: '1000ms',
        animationDuration: '600ms',
        opacity: '1',
        animationName: 'about-me-img-animation',

        '@keyframes about-me-img-animation': {
            '0%': {
                opacity: '0',
                transform: 'translate3d(0px, 30px, 0px)',
            },
            '100%': {
                opacity: '1'
            }
        }
    },

    content_button_container: {
        display: 'flex', flexDirection: 'column', width: '50%',
        animationFillMode: 'both',
        animationIterableCount: '1',
        animationDelay: '1000ms',
        animationDuration: '1000ms',
        opacity: '1',
        animationName: 'content-button-animation',

        '@keyframes content-button-animation': {
            '0%': {
                opacity: '0',
                transform: 'translate3d(-30px, 0px, 0px)',
            },
            '100%': {
                opacity: '1'
            }
        }
    },

    about_me_content: {
        color: '#fff',
        width: '100%',
        maxWidth: '650px',

    },

    resume_button: {
        alignSelf: 'flex-start',
        marginTop: '30px',
        color: '#fff',
        border: '2px solid #fff',
        fontWeight: '600',
        borderRadius: '0px',
        '&:hover': {
            boxShadow: 'inset 8.5em 0 0 0 #fff',
            color: '#02aab0',
            borderColor: '#fff'
        }
    }
}