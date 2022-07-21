import { createTheme, ThemeProvider, Stack, Typography } from '@mui/material';

import TypeWriter from 'typewriter-effect';

const theme = createTheme({
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
  },
  palette: {
    primary: {
      main: '#27ae60',
    }
  }
});
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack height="100vh" justifyContent="center">
        <Typography variant='h1' textAlign="center">
          Stefan Butz
        </Typography>
        <Typography variant="h3" textAlign="center">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter.typeString('Freelancer')
                .pauseFor(500)
                .typeString(` & <strong><span style="color: ${theme.palette.primary.main} ;">Software Developer</span></strong>`)
                .pauseFor(500)
                .deleteAll()
                .typeString(`Ready for <strong><span style="color: ${theme.palette.primary.main};">Your</span></strong> Project!`)
                .start();
            }}
          />
        </Typography>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
