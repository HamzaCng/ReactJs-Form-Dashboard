import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AnimatedButton from '../../components/AnimatedButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../../assets/logo.png'
import { Modal } from "@mui/material";
import { styled } from "@mui/system";




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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Index() {
    const [open, setOpen] = React.useState(false);

    const matches = useMediaQuery('(min-width:600px)');
    const StyledModalBox = styled(Box)(({ theme }) => ({
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        backgroundColor: "white",
        boxShadow: 24,
        p: 4,
        borderRadius: 8,
        maxHeight: "80vh",
        overflowY: "auto",
    }));
    
    const handleKVKK = () => {
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img src={Logo} width={240} alt='tdv-logo' />

                        <Typography component="h1" variant="h5">
                            Kaydol
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Ad"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Soyad"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="E-posta Adresi"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Şifre"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        onClick={handleKVKK}
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="Kaydol düğmesine tıklayarak, Koşullarımızı, Gizlilik İlkemizi ve Çerezler İlkemizi kabul etmiş olursun. Bizden SMS veya mail bildirimleri alabilir ve bu bildirimleri istediğin zaman durdurabilirsin."
                                    />
                                </Grid>
                            </Grid>
                            <AnimatedButton>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Kaydol
                                </Button>
                            </AnimatedButton>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/SignIn" variant="body2">
                                        Hesabın var mı? Giriş yap
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
                <Modal open={open} onClose={handleClose}>
                    <StyledModalBox>
                        <Typography variant="h6" component="h2">
                            Başlık
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vulputate lorem.
                            Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor.
                            Praesent venenatis metus at tortor pulvinar varius. Nulla facilisi. Cras ultricies mi eu turpis hendrerit
                            fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Vestibulum sit amet sem sem. Donec ac felis arcu. Phasellus vulputate sapien vitae nisi placerat fringilla.
                            Aliquam erat volutpat. Integer euismod nec lacus sit amet venenatis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vulputate lorem.
                            Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor.
                            Praesent venenatis metus at tortor pulvinar varius. Nulla facilisi. Cras ultricies mi eu turpis hendrerit
                            fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Vestibulum sit amet sem sem. Donec ac felis arcu. Phasellus vulputate sapien vitae nisi placerat fringilla.
                            Aliquam erat volutpat. Integer euismod nec lacus sit amet venenatis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vulputate lorem.
                            Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor.
                            Praesent venenatis metus at tortor pulvinar varius. Nulla facilisi. Cras ultricies mi eu turpis hendrerit
                            fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Vestibulum sit amet sem sem. Donec ac felis arcu. Phasellus vulputate sapien vitae nisi placerat fringilla.
                            Aliquam erat volutpat. Integer euismod nec lacus sit amet venenatis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vulputate lorem.
                            Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor.
                            Praesent venenatis metus at tortor pulvinar varius. Nulla facilisi. Cras ultricies mi eu turpis hendrerit
                            fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Vestibulum sit amet sem sem. Donec ac felis arcu. Phasellus vulputate sapien vitae nisi placerat fringilla.
                            Aliquam erat volutpat. Integer euismod nec lacus sit amet venenatis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vulputate lorem.
                            Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor.
                            Praesent venenatis metus at tortor pulvinar varius. Nulla facilisi. Cras ultricies mi eu turpis hendrerit
                            fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Vestibulum sit amet sem sem. Donec ac felis arcu. Phasellus vulputate sapien vitae nisi placerat fringilla.
                            Aliquam erat volutpat. Integer euismod nec lacus sit amet venenatis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vulputate lorem.
                            Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor.
                            Praesent venenatis metus at tortor pulvinar varius. Nulla facilisi. Cras ultricies mi eu turpis hendrerit
                            fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Vestibulum sit amet sem sem. Donec ac felis arcu. Phasellus vulputate sapien vitae nisi placerat fringilla.
                            Aliquam erat volutpat. Integer euismod nec lacus sit amet venenatis.
                        </Typography>
                    </StyledModalBox>
                </Modal>
            </ThemeProvider>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                    textAlign: { sm: 'center', md: 'left' },
                }}
            >
                <Box>
                    {matches &&
                        <input width={'100%'} type='image' src={'https://nody.react.themesdesign.in/static/media/hero-3-bottom-img.5a50a631e6468c16c70e.png'} alt='signup bottom image' />
                    }
                </Box>

            </Container>
        </>
    );
}