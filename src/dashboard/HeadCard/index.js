import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AppWidgetSummary from '../../components/AppWidgetSummary';
import ThemeProvider from '../theme';
import Lottie from 'react-lottie';
import DocumentSuccess from '../../assets/document-success.json';
import UserSuccess from '../../assets/user-success.json';
import ApplicationSuccess from '../../assets/applicatiyon-success.json';
import InterView from '../../assets/interview.json';


const defaultOptionsCv = {
    loop: true,
    autoplay: true,
    animationData: DocumentSuccess,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultOptionsUser = {
    loop: true,
    autoplay: true,
    animationData: UserSuccess,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultOptionsApplication = {
    loop: true,
    autoplay: true,
    animationData: ApplicationSuccess,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultOptionsInterView = {
    loop: true,
    autoplay: true,
    animationData: InterView,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default function Index() {
    return (
        <ThemeProvider>
            <Container sx={{ marginTop: 15 }} >
                <Typography variant="h4">
                </Typography>

                <Grid container spacing={3}>
                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Kullanıcı"
                            total={1350}
                            color="info"
                            icon={<Lottie options={defaultOptionsUser} />}
                        />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Özgeçmiş"
                            total={960}
                            color="success"
                            icon={<Lottie options={defaultOptionsCv} />}
                        />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Başvuru"
                            total={1723315}
                            color="warning"
                            icon={<Lottie options={defaultOptionsApplication} />}
                        />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <AppWidgetSummary
                            title="Görüşme"
                            total={234}
                            color="error"
                            icon={<Lottie options={defaultOptionsInterView} />}
                        />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>

    );
}
