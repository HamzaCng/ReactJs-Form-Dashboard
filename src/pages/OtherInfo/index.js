import React, { useState } from 'react';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import AnimatedButton from '../../components/AnimatedButton';
import scrollToSection from '../../helper/scroollToSection';
import { toast } from 'react-toastify';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../../assets/smal-logo.jpg';
import MultipleSelect from '../../components/MultipleSelect';
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
    MenuItem,
    Divider,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material';


const citys = [
    { value: 'Adana', label: 'Adana' },
    { value: 'Ankara', label: 'Ankara' },
    { value: 'Aksaray', label: 'Aksaray' },

];

const ranks = [
    { value: '40%', label: '40%' },
    { value: '50%', label: '50%' },
    { value: '90%', label: '90%' },

];

const aboutUsTypes = [
    { value: 'İnsan Kaynakları Birimi', label: 'İnsan Kaynakları Birimi' },
    { value: 'Ön Muhasebe', label: 'Ön Muhasebe' },
    { value: 'Bilişim Birimi', label: 'Bilişim Birimi' },
];

const defaultTheme = createTheme();
    
const App = () => {

    const [referenceType, setReferenceType] = useState('');
    const [aboutUsType, setAboutUsType] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [description, setDescription] = React.useState();
    const [contact, setContact] = React.useState();
    const [asd, setAsd] = React.useState();
    const [rank, setRank] = React.useState();
    const [price, setPrice] = React.useState();
    const [startDate, setStartDate] = React.useState();



    const matches = useMediaQuery('(max-width:576px)');
    const notify = () => toast.success("Kaydınız Oluşturulmuştur");

    const handleNext = () => {
        notify();
        scrollToSection('');
    }

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container id="otherInfo" component="main" sx={{ minHeight: '100vh' }}>
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
                                            Diğer Bilgiler
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>

                            <Box mb={4} mt={4} sx={{ width: '100%' }}>
                                <Grid container alignItems={'center'} columnSpacing={{ xs: 4 }}>
                                    <Grid item xs={12} sm={6}>
                                        Görev Talep Edilen il
                                        <TextField
                                            select
                                            value={referenceType}
                                            onChange={(e) => setReferenceType(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        >
                                            {citys.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}

                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Başka Bir İlde Görev Alabilir misiniz?
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <Grid item xs={12} sm={6} ml={2}>
                                                <Grid container spacing={2} >
                                                    <Grid item xs={6} sm={3}>
                                                        <FormControlLabel value="evli" control={<Radio />} label="Evet" />
                                                    </Grid>

                                                    <Grid item xs={6} sm={3}>
                                                        <FormControlLabel value="bekar" control={<Radio />} label="Hayır" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                                        Yurtiçi/ Yurtdışı Seyahat Engeliniz Var mı?
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <Grid item xs={12} sm={6} ml={2}>
                                                <Grid container spacing={2} >
                                                    <Grid item xs={6} sm={3}>
                                                        <FormControlLabel value="evli" control={<Radio />} label="Var" />
                                                    </Grid>

                                                    <Grid item xs={6} sm={3}>
                                                        <FormControlLabel value="bekar" control={<Radio />} label="Yok" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Herhangi Bir Sağlık Sorununuz Var mı?
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <Grid item xs={12} sm={6} ml={2}>
                                                <Grid container spacing={2} >
                                                    <Grid item xs={6} sm={3}>
                                                        <FormControlLabel value="evli" control={<Radio />} label="Var" />
                                                    </Grid>

                                                    <Grid item xs={6} sm={3}>
                                                        <FormControlLabel value="bekar" control={<Radio />} label="Yok" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={6} sx={{ mt: 2 }}>
                                        Varsa Engel ve Oranı ?
                                        <TextField
                                            rows={3}
                                            multiline
                                            fullWidth
                                            required
                                            value={description}
                                            onChange={(e) => { setDescription(e.target.value) }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        Oran
                                        <TextField
                                            select
                                            fullWidth
                                            required
                                            value={rank}
                                            onChange={(e) => { setRank(e.target.value) }}
                                        >
                                                  {ranks.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={12} sx={{ mt: 2, mb: 2 }}> <i>Varsa Sınav Puanınız ? </i> </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Sınav Adı
                                        <TextField
                                            value={departmentName}
                                            onChange={(e) => setDepartmentName(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Sınav Puanı
                                        <TextField
                                            value={asd}
                                            onChange={(e) => setAsd(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} sx={{ mt: 2, mb: 2 }}> <i> Acil Durumda İrtibata Geçilecek Kişi / İletişim? </i> </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Kişi
                                        <TextField
                                            value={aboutUsType}
                                            onChange={(e) => setAboutUsType(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        İletişim
                                        <TextField
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} sx={{ mt: 1 }}>
                                        Görev Almak İstediğiniz Alan / Pozisyon ?
                                        <MultipleSelect width='100%' data={aboutUsTypes.map(x => x.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Ne Zaman İşe Başlayabilirsiniz?
                                        <TextField
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        Net Ücret Beklentiniz? *
                                        <TextField
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
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
