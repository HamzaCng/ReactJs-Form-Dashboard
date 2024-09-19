import React, { useState } from 'react';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import AnimatedButton from '../../components/AnimatedButton';
import scrollToSection from '../../helper/scroollToSection';
import { toast } from 'react-toastify';
import useMediaQuery from '@mui/material/useMediaQuery';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  MenuItem,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';


const referenceTypes = [
  { value: 'Kişisel', label: 'Kişisel' },
  { value: 'Profesyonel', label: 'Profesyonel' }
];

const aboutUsTypes = [
  { value: 'İnternet araması (Google, Bing, vb.)', label: 'İnternet araması (Google, Bing, vb.)' },
  { value: 'Sosyal medya (Facebook, LinkedIn, Instagram, vb.)', label: 'Sosyal medya (Facebook, LinkedIn, Instagram, vb.)' },
  { value: 'İş ilanı siteleri (Kariyer.net, Indeed, vb.)', label: 'İş ilanı siteleri (Kariyer.net, Indeed, vb.)' },
  { value: 'Tv/Gazete', label: 'Tv/Gazete' },
  { value: 'Arkadaş veya aile tavsiyesi	', label: 'Arkadaş veya aile tavsiyesi	' },
  { value: 'Üniversite veya kariyer merkezi	', label: 'Üniversite veya kariyer merkezi' },
  { value: 'Diğer (lütfen belirtiniz)', label: 'Diğer (lütfen belirtiniz)' },
];

const defaultTheme = createTheme();

const App = () => {
  //education
  const [referenceList, setReferenceList] = useState([]);
  const [referenceType, setReferenceType] = useState('');
  const [aboutUsType, setAboutUsType] = useState('');
  const [referenceName, setReferenceName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [description, setDescription] = React.useState();
  const [contact, setContact] = React.useState();


  const handleAddEducation = (education) => {
    setReferenceList([...referenceList, education]);
  };

  const handleSave = () => {


    handleAddEducation({ referenceType, aboutUsType, referenceName, departmentName, description, contact });
    setReferenceType('');
    setDepartmentName('');
    setReferenceName('');
    setDescription('');
    setContact('');
  };

  const matches = useMediaQuery('(max-width:576px)');
  const notify = () => toast.success("Kaydınız Oluşturulmuştur");
  // const { t } = useTranslation();


  const handleNext = () => {
    notify();
    scrollToSection('interestingInfo');
  }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container id="referenceInfo" component="main" sx={{ minHeight: '100vh' }}>
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
                      Referans Bilgileri
                    </Typography>
                  </Box>
                </Card>
              </Grid>

              <Box mb={4} mt={4} sx={{ width: '100%' }}>
                <Grid container alignItems={'center'} columnSpacing={{ xs: 2 }}>
                  <Grid item xs={12} sm={6}>
                    Referans Türü
                    <TextField
                      select
                      value={referenceType}
                      onChange={(e) => setReferenceType(e.target.value)}
                      fullWidth
                      margin="dense"
                    >
                      {referenceTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    Referans Adı
                    <TextField
                      value={referenceName}
                      onChange={(e) => setReferenceName(e.target.value)}
                      fullWidth
                      margin="dense"
                    >

                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    Kurum
                    <TextField
                      value={departmentName}
                      onChange={(e) => setDepartmentName(e.target.value)}
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
                  <Grid item xs={12}>
                    Görevi
                    <TextField
                      rows={3}
                      multiline
                      fullWidth
                      required
                      value={description}
                      onChange={(e) => { setDescription(e.target.value) }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={11} sx={{ mt: 1 }}>
                    Bizi nereden duydunuz?
                    <TextField
                      select
                      value={aboutUsType}
                      onChange={(e) => setAboutUsType(e.target.value)}
                      fullWidth
                      margin="dense"
                    >
                      {aboutUsTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={1} sx={matches ? { mt: 2, textAlign: 'right' } : { textAlign: '' }}>
                    <Button startIcon={<LibraryAddIcon />} onClick={handleSave} variant="contained">Ekle</Button>
                  </Grid>
                </Grid>
              </Box>
              {referenceList.map((edu, index) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <HandshakeIcon color="primary" sx={{ mr: 1 }} /> {edu.referenceName} / {edu.departmentName}
                  </AccordionSummary>
                  <AccordionDetails sx={{ alignItems: 'center' }}>
                    <Typography color="body2">
                      Referans Türü :  {edu.referenceType}
                    </Typography>
                    <Typography variant="body2">
                      Referans Adı :  {edu.referenceName}
                    </Typography>
                    <Typography variant="body2">
                      Kurum :  <i>{edu.departmentName}</i>
                    </Typography>
                    <Typography variant="body2">
                      İletişim :  {edu.contact}
                    </Typography>
                    <Typography variant="body2">
                      Görevi :  {edu.description}
                    </Typography>            
                  </AccordionDetails>
                </Accordion>
              ))}   
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
