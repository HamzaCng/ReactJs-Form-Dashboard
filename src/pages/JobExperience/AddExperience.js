import React from 'react';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../../assets/smal-logo.jpg';
import {
    Button,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    TextField,
    Divider
} from '@mui/material';


export default function Index({ experienceList, setExperienceList }) {
    const [companyName, setCompanyName] = React.useState("");
    const [misson, setMisson] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [inJob, setInJob] = React.useState();
    const [endJob, setEndJob] = React.useState();
    const [outDescription, setOutDescription] = React.useState("");
    const [companyContact, setCompanyContact] = React.useState("");


    const matches = useMediaQuery('(max-width:576px)');

    const handleAddLanguage = (experiance) => {

        setExperienceList([...experienceList, experiance]);
    };

    const handleSaveExperience = () => {
        const inJobDate = inJob?.format("DD-MM-YYYY").toString();
        const endJobDate = endJob?.format("DD-MM-YYYY").toString();

        handleAddLanguage({ companyName, misson, description, inJobDate, endJobDate, outDescription, companyContact });
        setCompanyName("");
        setMisson("");
        setDescription("");
        setInJob();
        setEndJob();
        setOutDescription("");
        setCompanyContact("");
    };

    return (
        <>
            <Grid item xs={12} sm={12}>
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
                    İş Tecrübeleri
                    </Typography>
                </Card>
            </Grid>
            <Box noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6}>
                        İş Yeri Adı *
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            value={companyName}
                            onChange={(e) => { setCompanyName(e.target.value) }}
                            id="firstName"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        Görev *
                        <TextField
                            required
                            fullWidth
                            value={misson}
                            onChange={(e) => { setMisson(e.target.value) }}
                            id="lastName"
                            name="lastName"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        Kısa Görev Tanımı
                        <TextField
                            rows={3}
                            multiline
                            fullWidth
                            required
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            Giriş Tarihi *
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    value={inJob}
                                    onChange={(newValue) => setInJob(newValue)}
                                    format="DD-MM-YYYY"
                                />
                            </DemoContainer>
                        </LocalizationProvider>

                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            Çıkış Tarihi *
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    value={endJob}
                                    onChange={(newValue) => setEndJob(newValue)}
                                    format="DD-MM-YYYY"
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        İşten Çıkış Nedeni *
                        <TextField
                            sx={{ mt: 1 }}
                            required
                            fullWidth
                            id="lastName"
                            value={outDescription}
                            onChange={(e) => { setOutDescription(e.target.value) }}

                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        İşyeri İletişim *
                        <TextField
                            sx={{ mt: 1 }}
                            required
                            fullWidth
                            value={companyContact}
                            onChange={(e) => { setCompanyContact(e.target.value) }}
                            id="lastName"

                        />
                    </Grid>
                    <Grid item xs={12} sm={12} sx={matches ? { mt: 2, textAlign: 'right', } : { textAlign: 'right', color: 'red' }}>
                        <Button
                            startIcon={<LibraryAddIcon />}
                            onClick={handleSaveExperience}
                            variant="contained">
                            Ekle
                        </Button>
                    </Grid>
                </Grid>
                {matches ? null : <Divider sx={{ marginTop: 3 }} />}
            </Box>
        </>
    )
}
