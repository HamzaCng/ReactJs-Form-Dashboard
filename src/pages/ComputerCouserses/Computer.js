import * as React from 'react';
import {
    Grid,
    Box,
    FormControl,
    Rating,
    Typography,
    Button,
    Divider,
    TextField,
    useMediaQuery,
    FormGroup
} from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

export default function Computer  ({computerList, setComputerList}) {
    const [programName, setProgramName] = React.useState("");
    const [experience, setExperience] = React.useState("");
    const [level, setLevel] = React.useState(0);

    const matches = useMediaQuery('(max-width:576px)');

    const handleAddLanguage = (computer) => {
        setComputerList([...computerList, computer]);
    };

    const handleSaveLanguage = () => {
        handleAddLanguage({ programName, experience, level});
        setProgramName("");
        setExperience("");
        setLevel(0); 
    };

    return (
        <>
            <Box sx={{ width: '100%', mt: 2 }}>
                <FormGroup>
                <Grid container alignItems={'center'} columnSpacing={{ xs: 4, sm: 6, md: 6 }}>
                    <Grid item xs={12} sm={4} >
                        <FormControl fullWidth>
                            Program Adı
                            <TextField
                                value={programName}
                                onChange={(e) => setProgramName(e.target.value)}
                                fullWidth
                                margin="dense"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography pb={2} component="legend">Seviye</Typography>
                        <Rating
                            name="simple-controlled"
                            value={level}
                            onChange={(event, newValue) => {
                                setLevel(newValue);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        Tecrübe Yılı
                        <TextField
                            type='number'
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
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
                <Divider sx={{ marginTop: 2 }} />
            </Box>
        </>
    )
}
