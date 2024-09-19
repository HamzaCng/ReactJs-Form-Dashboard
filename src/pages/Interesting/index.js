import React, { useState } from 'react';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import AnimatedButton from '../../components/AnimatedButton';
import scrollToSection from '../../helper/scroollToSection';
import { toast } from 'react-toastify';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../../assets/smal-logo.jpg';
import {
    Container,
    Button,
    Typography,
    Box,
    ThemeProvider,
    CssBaseline,
    createTheme,
    Card,
    Grid,
    TextField,
    Divider,

} from '@mui/material';


const defaultTheme = createTheme();

const App = () => {
    const [referenceType, setReferenceType] = useState('');
    const [referenceName, setReferenceName] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [description, setDescription] = React.useState();
    const [contact, setContact] = React.useState();
    const [asd, setAsd] = React.useState();


    const matches = useMediaQuery('(max-width:576px)');
    const notify = () => toast.success("Kaydınız Oluşturulmuştur");
    // const { t } = useTranslation();


    const handleNext = () => {
        notify();
        scrollToSection('otherInfo');
    }

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container id="interestingInfo" component="main" sx={{ minHeight: '100vh' }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 15,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box component="form" noValidate>
                            <Grid item xs={12} sm={12}>
                                <Card sx={{ padding: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', boxShadow: 3 }}>
                                    <Box>
                                        <img
                                            width={32}
                                            height={32}
                                            src={Logo}
                                            alt="logo of sitemark"
                                        />
                                    </Box>
                                    <Box >
                                        <Typography marginLeft={1} component="span" variant="h4" gutterBottom>
                                            İlgi Alanlarınız
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>

                            <Box mb={4} mt={4} sx={{ width: '100%' }}>
                                <Grid container alignItems={'center'} columnSpacing={{ xs: 2 }}>
                                    <Grid item xs={12} sm={6}>
                                        Sosyal Aktiviteler
                                        <TextField
                                            rows={3}
                                            multiline
                                            value={referenceType}
                                            onChange={(e) => setReferenceType(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        >

                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Üye Olduğunuz Kuruluşlar
                                        <TextField
                                            rows={3}
                                            multiline
                                            value={referenceName}
                                            onChange={(e) => setReferenceName(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        >

                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        Varsa Görev Aldığınız Projeler
                                        <TextField
                                            rows={3}
                                            multiline
                                            fullWidth
                                            required
                                            value={description}
                                            onChange={(e) => { setDescription(e.target.value) }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} sx={{ mt: 2, mb: 2 }}> <i>Varsa Sivil Toplum Kuruluşu Tecrübeniz.</i> </Grid>
                                    <Grid item xs={12} sm={4}>
                                        Kurum Adı
                                        <TextField
                                            value={departmentName}
                                            onChange={(e) => setDepartmentName(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        Faaliyet Alanı
                                        <TextField
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        Süresi
                                        <TextField
                                            value={asd}
                                            onChange={(e) => setAsd(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Divider />
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
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default App;
