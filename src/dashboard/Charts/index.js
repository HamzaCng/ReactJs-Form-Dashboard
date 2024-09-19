import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Unstable_Grid2';
import ThemeProvider from '../theme';
import Container from '@mui/material/Container';
import { BarChart } from '@mui/x-charts/BarChart';


const highlightScope = {
    highlighted: 'series',
    faded: 'global',
};

const series = [
    { label: 'Ön Lisans', data: [4, 3, 5] }, { label: 'Lisans', data: [1, 6, 3] }, { label: 'Y. Lisans', data: [2, 5, 6] }
].map((s) => ({ ...s, highlightScope }));


const data = [
    { id: 0, value: 10, label: 'Lise Mezunu' },
    { id: 1, value: 8, label: 'Ön Lisans Mezunu' },
    { id: 2, value: 25, label: 'Lisans Mezunu' },
    { id: 3, value: 20, label: 'Y. Lisans Mezunu' },
    { id: 4, value: 8, label: 'Doktora Mezunu' },
];

export default function Index() {    

    return (
        <ThemeProvider>
            <Container sx={{ marginTop: 10 }}>
                <Grid container spacing={3}>
                    <Grid xs={12} md={6}>
                        <BarChart
                            height={300}
                            xAxis={[{ scaleType: 'band', data: ['2022', '2023', '2024'] }]}
                            series={series
                                .slice(0, 3)
                                .map((s) => ({ ...s, data: s.data.slice(0, 5) }))}
                            skipAnimation={false}
                        />

                    </Grid>
                    <Grid xs={12} md={6}>
                        <PieChart
                            series={[
                                {
                                    data,
                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                },
                            ]}
                            height={250}
                        />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}