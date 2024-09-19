import React, { useState } from 'react';
import LanguageRank from './languageRank';
import SchoolIcon from '@mui/icons-material/School';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LanguageIcon from '@mui/icons-material/Language';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import AnimatedButton from '../../components/AnimatedButton';
import scrollToSection from '../../helper/scroollToSection';
import { toast } from 'react-toastify';
import useMediaQuery from '@mui/material/useMediaQuery';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/smal-logo.jpg'
import {
  Container,
  Button,
  Typography,
  Box,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Card,
  CardContent,
  Grid,
  TextField,
  MenuItem,
  Divider,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';


const educationTypes = [
  { value: 'Lise', label: 'Lise' },
  { value: 'Ön Lisans', label: 'Ön Lisans' },
  { value: 'Lisans', label: 'Lisans' },
  { value: 'Yüksek Lisans', label: 'Yüksek Lisans' },
  { value: 'Doktora', label: 'Doktora' },
];

const highSchoolTypes = [
  { value: 'Açık Öğretim Lisesi', label: 'Açık Öğretim Lisesi' },
  { value: 'Anadolu Lisesi', label: 'Anadolu Lisesi' },
  { value: 'Fen Lisesi', label: 'Fen Lisesi' },
  { value: 'İmam Hatip Lisesi', label: 'İmam Hatip Lisesi' },
  { value: 'Meslek Lisesi', label: 'Meslek Lisesi' },
];

const univercityList = [
  { value: 'Ankara Üniversitesi', label: 'Ankara Üniversitesi' },
  { value: 'Gazi Üniversitesi', label: 'Gazi Üniversitesi' },
  { value: 'Hacettepe Üniversitesi', label: 'Hacettepe Üniversitesi' },
  { value: 'ODTÜ', label: 'ODTÜ' },
];

const defaultTheme = createTheme();

const App = () => {
  //education
  const [educationList, setEducationList] = useState([]);
  const [educationType, setEducationType] = useState('');
  const [highSchoolType, setHighSchoolType] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [date, setDate] = React.useState();

  //language
  const [languageList, setLanguageList] = React.useState([]);


  const handleAddEducation = (education) => {
    setEducationList([...educationList, education]);

  };

  const handleSave = () => {
    const graduate = date.format("DD-MM-YYYY").toString();

    handleAddEducation({ educationType, highSchoolType, schoolName, departmentName, graduate });
    setEducationType('');
    setSchoolName('');
    setDepartmentName('');
    setHighSchoolType('');
  };

  const matches = useMediaQuery('(max-width:576px)');
  const notify = () => toast.success("Kaydınız Oluşturulmuştur");
  const { t } = useTranslation();


  const handleNext = () => {
    notify();
    scrollToSection('computerSkills');
  }


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container id="educationInfo" component="main" sx={{ minHeight: '100vh' }}>
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
                      src={Logo}
                      alt="logo of sitemark"
                    />
                  </Box>
                  <Box >
                    <Typography marginLeft={1} component="span" variant="h4" gutterBottom>
                      {t('EducationInfo')}
                    </Typography>
                  </Box>
                </Card>
              </Grid>

              <Box mb={4} mt={4} sx={{ width: '100%' }}>
                <Grid container alignItems={'center'} columnSpacing={{ xs: 1, sm: 14, md: 14 }}>
                  <Grid item xs={12} sm={6}>
                    Eğitim Durumu
                    <TextField
                      select
                      value={educationType}
                      onChange={(e) => setEducationType(e.target.value)}
                      fullWidth
                      margin="dense"
                    >
                      {educationTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  {educationType === 'Lise' ?
                    <>
                      <Grid item xs={12} sm={6}>
                        Lise Türü
                        <TextField
                          select

                          value={highSchoolType}
                          onChange={(e) => setHighSchoolType(e.target.value)}
                          fullWidth
                          margin="dense"
                        >
                          {highSchoolTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Okulun Adı
                        <TextField
                          value={schoolName}
                          onChange={(e) => setSchoolName(e.target.value)}
                          fullWidth
                          margin="dense"
                        />
                      </Grid>
                    </>
                    :
                    <Grid item xs={12} sm={6}>
                      Okul Adı
                      <TextField
                        select
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        fullWidth
                        margin="dense"
                      >
                        {univercityList.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  }

                  <Grid item xs={12} sm={6}>
                    Bölüm Adı
                    <TextField
                      value={departmentName}
                      onChange={(e) => setDepartmentName(e.target.value)}
                      fullWidth
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    Mezuniyet Tarihi
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          value={date}
                          onChange={(newValue) => setDate(newValue)}
                          format="DD-MM-YYYY"
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={3} sx={matches ? { mt: 2, textAlign: 'right' } : { textAlign: '' }}>
                    <Button startIcon={<LibraryAddIcon />} onClick={handleSave} variant="contained">Ekle</Button>
                  </Grid>
                </Grid>
              </Box>
              {educationList.map((edu, index) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <SchoolIcon color="primary" sx={{ mr: 1 }} /> {edu.educationType} {edu.educationType === "Lise" && "- " + edu.highSchoolType}
                  </AccordionSummary>
                  <AccordionDetails sx={{ display: (matches ? '' : 'flex'), alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography color="textSecondary">
                      Adı :  {edu.schoolName}
                    </Typography>
                    <Typography variant="body2">
                      Bölümü :  {edu.departmentName}
                    </Typography>
                    <Typography variant="body2">
                      Mezuniyet Tarihi :  <i>{edu.graduate}</i>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
              <Divider />
              <LanguageRank setLanguageList={setLanguageList} languageList={languageList} />
              {languageList.map((lng, index) => (
                <Card key={index} variant="outlined" sx={{ minWidth: 275, marginBottom: 2, marginTop: 2, padding: 0.5 }}>
                  <CardContent sx={{ display: (matches ? '' : 'flex'), alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                      <LanguageIcon color="primary" sx={{ marginRight: 1 }} /> {lng.language}
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                      Okuma :
                      <Rating
                        name="simple-controlled"
                        value={lng.reading}
                      />
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                      Yazma :
                      <Rating
                        name="simple-controlled"
                        value={lng.writing}
                      />
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                      Konuşma :
                      <Rating
                        name="simple-controlled"
                        value={lng.speaking}
                      />
                    </Typography>
                  </CardContent>
                </Card>
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
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
