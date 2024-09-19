import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Lottie from 'react-lottie';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HrAnimation from '../../assets/HR.json';
import AnimateButton from '../../components/AnimatedButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../../assets/logo.png'


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/HamzaCng">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HrAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultTheme = createTheme();


export default function Index() {
    const matches = useMediaQuery('(min-width:600px)');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                {matches &&
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                    >
                        <Lottie
                            options={defaultOptions}
                            height={1000}
                            width={1000}
                        />
                    </Grid>
                }

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img src={Logo} width={240} style={{ margin: 20 }} alt='tdv-logo' />
                        <Typography component="h1" variant="h5">
                            Şifremi Unuttum
                        </Typography>
                        <Box width={matches ? '80%' : '100%'} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-Posta Adresi"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <AnimateButton>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Gönder
                                </Button>
                            </AnimateButton>
                            <Grid item xs>
                                <Link href="/SignIn" variant="body2">
                                    Giriş yap
                                </Link>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}