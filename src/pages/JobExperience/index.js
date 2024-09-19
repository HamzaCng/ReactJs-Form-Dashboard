import React, { useState } from 'react';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import AnimatedButton from '../../components/AnimatedButton';
import scrollToSection from '../../helper/scroollToSection';
import { toast } from 'react-toastify';
import useMediaQuery from '@mui/material/useMediaQuery';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddExperience from './AddExperience';
import WorkIcon from '@mui/icons-material/Work';
import Logo from '../../assets/smal-logo.jpg'
import {
    Container,
    Button,
    Typography,
    Box,
    ThemeProvider,
    Card,
    CardContent,
    createTheme,
    Grid,
    TextField,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';


const defaultTheme = createTheme();
const notify = () => toast.success("Kaydınız Oluşturulmuştur");

const handleNext = () => {
    notify();
    scrollToSection('referenceInfo');
}

export default function Index() {
    const [experienceList, setExperienceList] = useState([]);

    const matches = useMediaQuery('(max-width:576px)');

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container id="jobExperience" component="main" sx={{ minHeight: '100vh' }}>

                    <Grid item xs={12} sm={12} sx={{ mt: 15 }}>
                        <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', boxShadow: 3 }}>
                            <CardContent>
                                <img                                   
                                    width={32}
                                    height={32}
                                    src={Logo}
                                    alt="logo of sitemark"
                                />
                            </CardContent>
                            <Typography sx={{ margin: 0 }} component="span" variant="h4" gutterBottom>
                                Mesleki Bilgiler
                            </Typography>
                        </Card>
                    </Grid>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                Mesleğiniz *
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                Toplam İş Tecrübesi *
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                Kariyer Hedefiniz *
                                <TextField
                                    rows={4}
                                    multiline
                                    fullWidth
                                    required
                                />
                            </Grid>
                        </Grid>
                        {matches ? null : <Divider sx={{ marginTop: 3 }} />}
                        <AddExperience experienceList={experienceList} setExperienceList={setExperienceList} />
                        {experienceList.map((experience, index) => (
                            <Accordion sx={{ mt: 3 }} key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <WorkIcon color="primary" sx={{ mr: 1 }} /> {experience.companyName}
                                </AccordionSummary>
                                <AccordionDetails sx={{ display: (matches ? '' : 'flex'), alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Grid xs={12} sm={6}>
                                        <Typography color="textSecondary">
                                            Görev :  {experience.misson}
                                        </Typography>
                                        <Typography variant="body2">
                                            Kısa Görev Tanımı :  <i>{experience.description}</i>
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} sm={6}>
                                        <Typography variant="body2">
                                            Giriş Tarihi :  <i>{experience.inJobDate}</i>
                                        </Typography>
                                        <Typography variant="body2">
                                            Çıkış Tarihi :  <i>{experience.endJobDate}</i>
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} sm={6}>
                                        <Typography variant="body2">
                                            İşten Çıkış Nedeni :  <i>{experience.outDescription}</i>
                                        </Typography>
                                        <Typography variant="body2">
                                            İşyeri İletişim * :  <i>{experience.outDescription}</i>
                                        </Typography>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                        <Grid container justifyContent="flex-end" sx={{ marginTop: (matches ? '' : 10) }}>
                            <Grid item>
                                <AnimatedButton>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color='success'
                                        sx={{ mt: 3, mb: 2 }}
                                        endIcon={<NextPlanIcon />}
                                        onClick={handleNext}
                                    >
                                        Kaydet
                                    </Button>
                                </AnimatedButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    )
}
