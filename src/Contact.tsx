import { Box, Stack, Typography, Link } from '@mui/material';

import Layout from './Layout';

export default function Contact() {
    return (
    <Layout>
        <Stack height="100%" spacing={6} justifyContent="center" alignItems="center" textAlign="center">
            <Box
                sx={{
                    display: { xs: 'none', md: 'block'},
                    width: "65%",
                }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/undraw_contact.svg`}
                    alt="Abstract drawing of an imprint."
                    width="100%"
                />
            </Box>

            <Box>
                <Typography variant="h4">
                    Please feel free to contact me at <Link href="mailto:mail@butz.st">mail@butz.st</Link>.
                </Typography>
                <Typography variant="body2" color="#848484" sx={{pt: 1}}>
                    Die Anfrage darf auch in Deutsch sein.
                </Typography>
            </Box>
            
            <Typography variant="body1">
                Owner of this Website:<br />
                Stefan Butz <br />
                Birkenstr. 8, 84094 Elsendorf (Germany)<br />
                E-mail: mail@butz.st <br />
                Mobile: +49 151 64001859
            </Typography>
        </Stack>
    </Layout>
    );
}