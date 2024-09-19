import * as React from 'react';
import {
    ThemeProvider,
    Container,
    createTheme,
} from '@mui/material';

const Index = () => {
    const defaultTheme = createTheme();
    return (
        <>         
            <ThemeProvider theme={defaultTheme}>
                <Container id="computerSkills" component="main" sx={{ minHeight: '100vh' }}>

                    {/* <iframe src="https://tdv.org/tr-TR/" width="1024" height="1920"></iframe> */}
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Index