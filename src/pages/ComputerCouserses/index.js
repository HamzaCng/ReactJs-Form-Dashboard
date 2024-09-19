import * as React from 'react';
import {
    Box,
    Typography,
    ThemeProvider,
    Container,
    createTheme,
    Card,
    CardContent,
    Rating,
    useMediaQuery,
    Grid,
    Button

} from '@mui/material';
import Computer from './Computer';
import Courses from './Courses';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import AnimatedButton from '../../components/AnimatedButton';
import scrollToSection from '../../helper/scroollToSection';
import Logo from '../../assets/smal-logo.jpg'
import { toast } from 'react-toastify';


const defaultTheme = createTheme();

export default function Index() {
    const [computerList, setComputerList] = React.useState([]);
    const [coursesList, setCoursesList] = React.useState([]);


    const matches = useMediaQuery('(max-width:576px)');
    const notify = () => toast.success("Kaydınız Oluşturulmuştur");

    const handleNext = () => {
        notify();
        scrollToSection('jobExperience');
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container id="computerSkills" component="main" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={12} sx={{ mt: 15}}>
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
                            Bilgisayar Bilgileri
                        </Typography>
                    </Card>
                </Grid>
                <Computer computerList={computerList} setComputerList={setComputerList} />

                <Box>
                    {computerList.map((computer, index) => (
                        <Card key={index} variant="outlined" sx={{ minWidth: 275, marginBottom: 2, marginTop: 2, padding: 0.5 }}>
                            <CardContent sx={{ display: (matches ? '' : 'flex'), alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ImportantDevicesIcon color="primary" sx={{ marginRight: 1 }} /> {computer.programName}
                                </Typography>
                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Seviye :
                                    <Rating
                                        name="simple-controlled"
                                        value={computer.level}
                                    />
                                </Typography>
                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Tecrübe Yılı :
                                    {computer.experience}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                <Grid item xs={12} sm={12} sx={{ mt: 15}}>
                    <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', boxShadow: 3 }}>
                        <CardContent>
                            <img                               
                                width={32}                          
                                src={Logo}
                                alt="logo of sitemark"
                            />

                        </CardContent>
                        <Typography sx={{ margin: 0 }} component="span" variant="h4" gutterBottom>
                        Kurs, Seminer ve Setifika Bilgileri
                        </Typography>
                    </Card>                   
                </Grid>
                <Courses coursesList={coursesList} setCoursesList={setCoursesList} />     
                <Box>
                    {coursesList.map((course, index) => (
                        <Card key={index} variant="outlined" sx={{ minWidth: 275, marginBottom: 2, marginTop: 2, padding: 0.5 }}>
                            <CardContent sx={{ display: (matches ? '' : 'flex'), alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ReceiptLongIcon color="primary" sx={{ marginRight: 1 }} /> {course.programName}
                                </Typography>
                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Kurum :
                                    {course.organisation}

                                </Typography>
                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Süre :
                                    {course.time}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
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
            </Container>
        </ThemeProvider>
    );
}
