import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
    return (
    <Stack height="100vh">
        <Box sx={{flexGrow: 0, flexShrink: 1, flexBasis: "auto"}}>
            <Header />
        </Box>
        <Container maxWidth="md" sx={{flexGrow: 1, flexShrink: 1, flexBasis: "auto"}}>
            {props.children}
        </Container>
        <Box textAlign="center" sx={{ pt: 1, pb: 2 }}>
            <Link
                component={RouterLink}
                to="/contact"
                underline="hover"
                color="#848484"
            >
                <Typography variant="body2">
                    Imprint
                </Typography>
            </Link>
        </Box>
    </Stack>
    );
}