import React from 'react';
import { AppBar, Avatar, Box, Tabs, Tab, Typography, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import bg from '../../assets/overlay_3.jpg'
import Brief from './Brief';

const useStyles = makeStyles(() => ({
    coverPhoto: {
        width: '100%',
        height: 200,
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    },
    avatarContainer: {
        position: 'relative',
        top: -75, // Avatar'ı kapak fotoğrafının altına taşımak için bu değeri kullanıyoruz
        display: 'flex',
        justifyContent: 'center',
    },
    tabsContainer: {
        marginTop: 80, // Avatar'ın üstünden yeterli boşluk bırakıyoruz
    },
    content: {
        padding: 24, // theme.spacing yerine sabit bir değer
    },
}));

function ProfilePage() {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 15}} >
            <Box className={classes.coverPhoto} />
            <Box className={classes.avatarContainer}>
                <Avatar
                    sx={{ width: 150, height: 150, border: '5px solid white' }}
                    alt="Profile Avatar"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className={classes.avatar}
                />
            </Box>
            <Grid container spacing={1} sx={{ marginTop: -5 }}>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">Hamza Çıngı</Typography>
                    <Typography>Software Developer</Typography>
                </Grid>
            </Grid>
            <Box className={classes.tabsContainer}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={tabIndex}
                                onChange={handleTabChange}
                                variant="fullWidth"
                            >
                                <Tab label="Kişisel Bilgiler" />
                                <Tab label="Eğitim Bilgileri" />
                                <Tab label="Yetenekler" />
                                <Tab label="İş Deneyimleri" />
                                <Tab label="Referanslar" />
                                <Tab label="İlgi Alanları" />                               
                            </Tabs>
                        </AppBar>
                        <Box className={classes.content}>
                            {tabIndex === 0 && <Typography>Kişisel Bilgiler What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>}
                            {tabIndex === 1 && <Typography>Eğitim Bilgileri What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>}
                            {tabIndex === 2 && <Typography>Yetenekler What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>}                            
                            {tabIndex === 3 && <Typography>Yetenekler What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>}
                            {tabIndex === 4 && <Typography>Yetenekler What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>}
                            {tabIndex === 5 && <Typography>Yetenekler What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box >
                            <Typography variant="h6">Diğer Bilgiler</Typography>
                            <Typography>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                        <Brief />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default ProfilePage;
