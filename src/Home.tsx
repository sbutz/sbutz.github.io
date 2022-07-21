import { Stack, Typography, Button, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import TypeWriter from 'typewriter-effect';

import Layout from './Layout';

export default function Home() {
  const theme = useTheme();
  theme.typography.h1 = {
    fontFamily: theme.typography.fontFamily,
    fontSize: '3rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '8rem',
    },
  };
  theme.typography.h3 = {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'normal',
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

  return (
    <Layout>
      <Stack height="100%" justifyContent="center">
        <Typography variant='h1' textAlign="center">
          Stefan Butz
        </Typography>
        <Typography variant="h3" textAlign="center">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter.typeString('Freelancer')
                .typeString(` & <strong><span style="color: ${theme.palette.primary.main} ;">Software Developer</span></strong>`)
                .pauseFor(1000)
                .changeDeleteSpeed(20)
                .deleteAll()
                .typeString(`Ready for <strong><span style="color: ${theme.palette.primary.main};">Your</span></strong> Project!`)
                .start();
            }}
          />
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 3, sm: 5 }}
          justifyContent="center"
          sx={{ pt: 10 }}
        >
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={() => {
              const link = document.createElement("a");
              link.download = "CV.pdf";
              link.href = `${process.env.PUBLIC_URL}/CV.pdf`;
              link.click();
            }}
          >
            Curriculum vitae (CV)
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contact"
          >
            Contact
          </Button>
        </Stack>
      </Stack>
    </Layout>
   );
}