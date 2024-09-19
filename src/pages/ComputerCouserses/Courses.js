import * as React from 'react';
import {
    Grid,
    Box,
    FormControl,
    Button,
    Divider,
    TextField,
    useMediaQuery,
    FormGroup
} from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

export default function Courses({ coursesList, setCoursesList }) {
    const [programName, setProgramName] = React.useState("");
    const [organisation, setOrganisation] = React.useState("");
    const [time, setTime] = React.useState("");

    const matches = useMediaQuery('(max-width:576px)');

    const handleAddLanguage = (language) => {
        setCoursesList([...coursesList, language]);
    };

    const handleSaveLanguage = () => {
        handleAddLanguage({ programName, organisation, time });
        setProgramName("");
        setOrganisation(0);
        setTime("");
    };

    return (
        <>
            <Box sx={{ width: '100%', mt: 2 }}>
                <FormGroup>
                <Grid container alignItems={'center'} columnSpacing={{ xs: 4, sm: 6, md: 6 }}>
                    <Grid item xs={12} sm={3} >
                        <FormControl fullWidth>
                            Konu
                            <TextField
                                value={programName}
                                onChange={(e) => setProgramName(e.target.value)}
                                fullWidth
                                margin="dense"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        Kurum
                        <TextField
                            value={organisation}
                            onChange={(e) => setOrganisation(e.target.value)}
                            fullWidth
                            margin="dense"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        Süre
                        <TextField
                            type='number'
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            fullWidth
                            margin="dense"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} sx={matches ? { mt: 2, textAlign: 'right' } : { textAlign: '' }}>
                        <Button
                            startIcon={<LibraryAddIcon />}
                            onClick={handleSaveLanguage}
                            variant="contained">
                            Ekle
                        </Button>
                    </Grid>
                </Grid>
                </FormGroup>
                {matches ? null : <Divider sx={{ marginTop: 2 }} />}
            </Box>
        </>
    )
}
