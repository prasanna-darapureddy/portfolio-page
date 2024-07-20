import React from 'react'
import { Box, Typography, Button } from '@mui/material';

function Contact() {
    return (
        <Box component='div' sx={styles.contact_container}>
            <Typography component='h2' variant='h2' sx={styles.contact_heading}>Contact</Typography>
            <Box component='div' sx={styles.contact_content_container}>
                <Typography component='p' sx={styles.contact_text}>Would you like to work with me? Awesome!</Typography>
                <Button variant='outlined' sx={styles.contact_button}>Let's Talk</Button>
            </Box>
        </Box>
    )
}

export default Contact

const styles = {
    contact_container: {
        backgroundColor: '#02aab0', display: 'flex', flexDirection: 'column', padding: '50px',
        justifyContent: 'center', alignItems: 'center', maxHeight: '400px', color: '#fff',
        clipPath: 'polygon(0 15vh, 100% 0, 100% 100%, 0 100%)',
        sm: { clipPath: 'none' }
    },

    contact_heading: {
        paddingTop: '30px',
        animationName: 'contact-heading-animation',
        animationFillMode: 'both',
        animationDuration: '1000ms',
        animationIterationCount: 'initial',
        opacity: '1',
        '@keyframs contact-heading-animation': {
            '0%': {
                opacity: '0',
                transform: 'translate3d(0px, 0px, 0px)'
            },
            '100%': {
                opacity: '1'
            }
        }
    },


    contact_content_container: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        animationName: 'contact-heading-animation',
        animationFillMode: 'both',
        animationDuration: '1000ms',
        opacity: '1',
        '@keyframs contact-heading-animation': {
            '0%': {
                opacity: '0',
                transform: 'translate3d(0px, 30px, 0px)'
            },
            '100%': {
                opacity: '1'
            }
        }
    },

    contact_text: {
        margin: '20px 0 20px 0', fontSize: '28px'
    },

    contact_button: {
        border: '2px solid #fff', color: '#fff', fontWeight: '700', borderRadius: '0px', fontSize: '20px',
        '&:hover': { color: '#02aab0', boxShadow: 'inset 10.5em 0 0 0 #fff', borderColor: '#02aab0' }
    },

}