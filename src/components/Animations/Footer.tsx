import React from 'react'
import { Box, Typography } from '@mui/material';
import { KeyboardArrowUp, Twitter, LinkedIn, GitHub, ViewInAr, StarBorder, ForkLeft } from '@mui/icons-material';


function Footer() {
    return (
        <Box component='div' sx={styles.footer_container}>
            <Box component='a' href='#home' sx={{ scrollBehavior: 'smooth' }}>
                <KeyboardArrowUp sx={styles.icons} />
            </Box>
            <Box component='div' sx={styles.icons_container}>
                <Twitter sx={styles.icons} /><ViewInAr sx={styles.icons} /><LinkedIn sx={styles.icons} /><GitHub sx={styles.icons} />
            </Box>
            <Typography sx={styles.text}>&copy; 2023 - Template developed by Jacobo Martínez</Typography>
            <Box component='div' sx={styles.buttons_container}>
                <Box component='button' sx={styles.no_styles_button}>{<ForkLeft />} Fork</Box>
                <Box component='button' sx={styles.no_styles_button}>{<StarBorder />} Star</Box>
            </Box>
        </Box>
    )
}

export default Footer

const styles = {
    footer_container: {
        backgroundColor: '#333', backgroundSize: 'cover', padding: '50px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    },

    icons_container: {
        display: 'flex', gap: '50px', padding: '50px 70px 30px 70px', borderBottom: '2px solid rgba(255, 255, 255, 0.1)'
    },

    icons: {
        fontSize: '30px',
        color: '#fff',
    },

    text: {
        color: 'gray', marginTop: '1px',
    },

    buttons_container: {
        display: 'flex', marginTop: '20px',
    },

    no_styles_button: {
        display: 'flex', alignItems: 'center', padding: '5px',
    }

}