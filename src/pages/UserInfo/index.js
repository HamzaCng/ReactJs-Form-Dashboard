import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AnimatedButton from '../../components/AnimatedButton';
import { FileUploader } from "react-drag-drop-files";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import Toast from '../../components/Toast';
import { toast } from 'react-toastify';
import { blueGrey } from '@mui/material/colors';
import scrollToSection from '../../helper/scroollToSection';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
import MultipleSelect from '../../components/MultipleSelect';
import Logo from '../../assets/smal-logo.jpg'
import {
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Grid,
    Box,
    Typography,
    Container,
    Switch,
    Radio,
    RadioGroup,
    MenuItem,
    FormControl,
    Select,
    Avatar,
    createTheme,
    ThemeProvider,
    Card,
} from '@mui/material';

const defaultTheme = createTheme();
const names = [
    'M',
    'A1',
    'A2',
    'B1',
    'B',
    'BE',
    'C1',
    'C1-E',
    'C',
    'CE',
    'D1',
    'D1-E',
    'D',
    'DE',
    'F',
    'G'
];

const Index = () => {
    const [tcSwitch, setTcSwitch] = React.useState();
    const [drivingLicence, setDrivingLicence] = React.useState(false);
    const [registrationNumber, setRegistrationNumber] = React.useState(false);
    const [soldierStatus, setSoldierStatus] = React.useState("");
    const fileTypes = ["JPEG", "PNG", "JPG"];
    const [image, setImage] = React.useState();
    // const [drivingLicenceType, setDrivingLicenceType] = React.useState("");
    const [provice, setProvice] = React.useState("");
    const [district, setDistrict] = React.useState("");

    const matches = useMediaQuery('(max-width:576px)');
    const notify = () => toast.success("Kaydınız Oluşturulmuştur");
    const { t } = useTranslation();



    const handleChange = (file) => {
        // setFile(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    const handleNext = () => {
        notify();
        scrollToSection('educationInfo');
    }

    const handleSoldierStatus = (params) => {
        switch (params) {
            case "done":
                setSoldierStatus();
                setSoldierStatus("done");
                break;
            case "postponement":
                setSoldierStatus();
                setSoldierStatus("postponement");
                break;
            case "exempt":
                setSoldierStatus();
                setSoldierStatus("exempt")
                break;
            default:
                break;
        }
    }

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container id="userInfo" component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 15,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box component="form" noValidate >
                            <Grid>
                                <Grid container item xs={12} sm={12} alignItems='center'>
                                    <Grid item xs={12} sm={10}>
                                        <Card sx={{ padding: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', boxShadow: 3 }}>
                                            <Box>
                                                <img                                                    
                                                    width={36}                                            
                                                    src={Logo}
                                                    alt="logo of sitemark"
                                                />
                                            </Box>
                                            <Box >
                                                <Typography marginLeft={1} component="span" variant="h4" gutterBottom>
                                                    {t('UserInfo')}
                                                </Typography>
                                            </Box>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                                            <FileUploader
                                                multiple={false}
                                                name="file"
                                                types={fileTypes}
                                                handleChange={handleChange}
                                                label={"Ekle"}
                                                children={
                                                    <>
                                                        <AnimatedButton>
                                                            <Avatar alt='pp' src={image} sx={{ cursor: 'pointer', width: 124, height: 124, margin: 2, bgcolor: blueGrey[700] }} />
                                                        </AnimatedButton>
                                                    </>
                                                }
                                            />
                                            <Typography >
                                                <i>Fotoğraf Ekle *</i>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12} sm={12} spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        Ad *
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Soyad *
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            name="lastName"
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Switch
                                            onChange={(e, c) => setTcSwitch(c)}

                                        />
                                        <i>Türkiye Cumhuriye vatandaşı değilim.</i>
                                        {tcSwitch ?
                                            <>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="tc"
                                                            label="Passport Number"
                                                            name="tc"
                                                            type='number'
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="tc"
                                                            label="Uyruk"
                                                            name="tc"

                                                        />
                                                    </Grid>
                                                </Grid>
                                            </>
                                            :
                                            <TextField
                                                required
                                                fullWidth
                                                id="tc"
                                                label="T.C"
                                                name="tc"
                                                type='number'
                                            />
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                Doğum Yeri *
                                                <TextField
                                                    sx={{ marginTop: 1 }}
                                                    required
                                                    fullWidth
                                                    id="lastName"
                                                    name="lastName"
                                                    autoComplete="family-name"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                Doğum Tarihi *
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DatePicker']}>
                                                        <DatePicker />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Medeni Durumu *
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <Grid item xs={12} sm={6} ml={2}>
                                                <Grid container spacing={2} >
                                                    <Grid item xs={6} sm={3}>
                                                        <FormControlLabel value="evli" control={<Radio />} label="Evli" />
                                                    </Grid>

                                                    <Grid item xs={6} sm={3}>
                                                        <FormControlLabel value="bekar" control={<Radio />} label="Bekar" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Grid >
                                            Ehliyet *
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group"
                                            >
                                                <Grid item xs={12} sm={6} ml={2}>
                                                    <Grid container spacing={3} >
                                                        <Grid item xs={6} sm={4}>
                                                            <FormControlLabel onClick={(e) => { setDrivingLicence(true) }} value="true" control={<Radio />} label="Var" />
                                                        </Grid>
                                                        <Grid item xs={6} sm={4}>
                                                            <FormControlLabel onClick={(e) => { setDrivingLicence(false) }} value="false" control={<Radio />} label="Yok" />
                                                        </Grid>
                                                        {drivingLicence && <Grid item xs={12} sm={4}>
                                                            <FormControl sx={{width : matches ? '90%' : '400%'}}>
                                                                Sınıf
                                                                <MultipleSelect data={names} />

                                                            </FormControl>
                                                        </Grid>

                                                        }
                                                    </Grid>
                                                </Grid>
                                            </RadioGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Grid >
                                            Adli Sicil Kaydı *
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group"
                                            >
                                                <Grid item xs={12} sm={6} ml={2}>
                                                    <Grid container spacing={3} >
                                                        <Grid item xs={6} sm={3}>
                                                            <FormControlLabel onClick={(e) => { setRegistrationNumber(true) }} value="true" control={<Radio />} label="Var" />
                                                        </Grid>
                                                        <Grid item xs={6} sm={3}>
                                                            <FormControlLabel onClick={(e) => { setRegistrationNumber(false) }} value="false" control={<Radio />} label="Yok" />
                                                        </Grid>
                                                        {registrationNumber && <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                sx={{ marginTop: 1, width: '300px' }}
                                                                required
                                                                fullWidth
                                                                id="lastName"
                                                                label="Nedeni"
                                                                name="lastName"
                                                                autoComplete="family-name"
                                                            />
                                                        </Grid>
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </RadioGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Grid >
                                            Askerlik Durumu *
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group"
                                            >
                                                <Grid item xs={12} sm={6} ml={2}>
                                                    <Grid container spacing={matches ? 6 : ""} >
                                                        <Grid item xs={6} sm={6}>
                                                            <FormControlLabel onClick={(e) => { handleSoldierStatus(e.target.value) }} value="done" control={<Radio />} label="Tamamlandı" />
                                                        </Grid>
                                                        <Grid item xs={6} sm={4}>
                                                            <FormControlLabel onClick={(e) => { handleSoldierStatus(e.target.value) }} value="postponement" control={<Radio />} label="Tecilli" />
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <FormControlLabel onClick={(e) => { handleSoldierStatus(e.target.value) }} value="exempt" control={<Radio />} label="Muaf" />
                                                        </Grid>
                                                        {soldierStatus === "postponement" && <Grid item xs={12} sm={12}>
                                                            Tecil Tarihi *
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={['DatePicker']}>
                                                                    <DatePicker />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </Grid>
                                                        }
                                                        {soldierStatus === "exempt" && <Grid item xs={12} sm={12}>
                                                            <TextField
                                                                sx={{ marginTop: 1, width: '300px' }}
                                                                required
                                                                fullWidth
                                                                id="lastName"
                                                                label="Nedeni"
                                                                name="lastName"
                                                                autoComplete="family-name"
                                                            />
                                                        </Grid>
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </RadioGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        E-posta Adresi *
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Telefon *
                                        <TextField
                                            required
                                            fullWidth
                                            name="phone"
                                            id="phone"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        E-posta Adresi 
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Telefon 
                                        <TextField
                                            required
                                            fullWidth
                                            name="phone"
                                            id="phone"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        Adres Bilgileri *
                                        <br />
                                        <br />
                                        <br />
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth>
                                                    İl *
                                                    <Select
                                                        label="İl"
                                                        fullWidth
                                                        value={provice}
                                                        defaultValue={provice}
                                                        onChange={(e) => { setProvice(e.target.value) }}
                                                    >
                                                        <MenuItem value={"Adana"}>Adana</MenuItem>
                                                        <MenuItem value={"Ankara"}>Ankara</MenuItem>
                                                        <MenuItem value={"Aksaray"}>Aksaray</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth>
                                                    İlçe *
                                                    <Select
                                                        label="Seçiniz"
                                                        fullWidth
                                                        value={district}
                                                        defaultValue={district}
                                                        onChange={(e) => { setDistrict(e.target.value) }}
                                                    >
                                                        <MenuItem value={"Seçiniz"}>Seçiniz</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Açık Adres *
                                        <TextField
                                            rows={4}
                                            multiline
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="flex-end">
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
                            </Grid>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <Toast />
        </>
    )
}

export default Index