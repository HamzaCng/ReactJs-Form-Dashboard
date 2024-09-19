import * as React from 'react';
import { Grid, Box, FormControl, Select, MenuItem, Rating, Typography, Button, useMediaQuery, Divider, FormGroup } from '@mui/material';

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

export default function RowAndColumnSpacing({ setLanguageList, languageList }) {
    const [language, setLanguage] = React.useState("");
    const [reading, setReading] = React.useState(0);
    const [writing, setWriting] = React.useState(0);
    const [speaking, setSpeaking] = React.useState(0);

    const matches = useMediaQuery('(max-width:576px)');
    const handleAddLanguage = (language) => {
        setLanguageList([...languageList, language]);
    };

    const handleSaveLanguage = () => {
        handleAddLanguage({ language, reading, writing, speaking });
        setLanguage("");
        setReading(0);
        setWriting(0);
        setSpeaking(0);
    };

    return (
        <Box sx={{ width: '100%', mt: 2 }}>
            <FormGroup>
            <Grid container alignItems={'center'} columnSpacing={{ xs: 4, sm: 16, md: 16 }}>
                <Grid item xs={12} sm={3} >
                    <FormControl fullWidth>
                        Yabancı Dil
                        <Select                            
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={language}
                            value={language}
                            onChange={(e) => { setLanguage(e.target.value) }}
                        >
                            <MenuItem value={"Almanca"}>Almanca</MenuItem>
                            <MenuItem value={"Arapça"}>Arapça</MenuItem>
                            <MenuItem value={"İngilizce"}>İngilizce</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography pb={2} component="legend">Okuma</Typography>
                    <Rating
                        name="simple-controlled"
                        value={reading}
                        onChange={(event, newValue) => {
                            setReading(newValue);
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography pb={2} component="legend">Yazma</Typography>
                    <Rating
                        name="simple-controlled"
                        value={writing}
                        onChange={(event, newValue) => {
                            setWriting(newValue);
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography pb={2} component="legend">Konuşma</Typography>
                    <Rating
                        name="simple-controlled"
                        value={speaking}
                        onChange={(event, newValue) => {
                            setSpeaking(newValue);
                        }}
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
            {matches ?  null : <Divider sx={{ marginTop: 2 }} /> }
        </Box>
    );
}
