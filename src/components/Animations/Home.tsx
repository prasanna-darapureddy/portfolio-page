import { Box, Typography, Button } from '@mui/material';

const Home = () => {

    const handleKnowMore = () => {
        document?.getElementById('aboutMe')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <Box component='div' sx={styles.home_container} id="home">
            <Box component='div' sx={styles.home_content_container}>
                <Typography component='h2' variant='h2' sx={styles.home_heading}>Hi, my name is <Typography component='span' variant='h2' sx={{ color: '#02aab0' }}>Naga Prasanna Darapureddy</Typography>
                    <Typography component='br' />
                    I'm the React Developer. </Typography>
                <Button variant='outlined' sx={styles.home_button} onClick={handleKnowMore}>Know more</Button>
            </Box>
        </Box>
    )
}
export default Home


const styles = {

    home_container: {
        minHeight: '100vh', padding: '50px', display: 'flex',
        flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'
    },

    home_content_container: {
        padding: '0px 15px 0px 15px',
        animation: 'home_content_container',
        animationFillMode: 'both',
        animationDuration: '1000ms',
        animationIterationCount: 'inherit',
        opacity: '1',
        animationName: 'home-content-animation',

        '@keyframes home-content-animation': {
            '0%': {
                opacity: '0',
                transform: 'translate3d(-30px, 0px, 0px)',
            },
            '100%': {
                opacity: '1',
            }
        },
    },

    home_heading: { marginBottom: '30px' },

    home_button: {
        fontSize: '20px', color: '#02aab0', border: '2px solid #20aab0', fontWeight: '800', borderRadius: '0px',
        '&:hover': { color: '#fff', boxShadow: 'inset 10.5em 0 0 0 #02aab0', borderColor: '#02aab0' }
    },

    '@media screen and (maxWidth: 562px)': {
        home_container: {
            alignItems: 'center'
        },
        home_heading: {
            fontSize: '10px',
        }
    }

}