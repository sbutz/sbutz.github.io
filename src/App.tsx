import { createTheme, ThemeProvider, AppBar, Toolbar, IconButton, Stack, Link,
  Container, Typography, } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
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
      <AppBar position="fixed" color="transparent" elevation={1}>
      <Container maxWidth="md">
        <Toolbar disableGutters={true}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, pl: 1 }}>
            SB
          </Typography>
          <Link
            target="_blank"
            rel="noopener"
            href="mailto:mail@butz.st"
            component={IconButton}
            color="inherit"
          > 
            <Mail sx={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://linkedin.com/in/stefan-butz"
            component={IconButton}
            color="inherit"
          > 
            <LinkedIn sx={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/sbutz"
            component={IconButton}
            color="inherit"
          > 
            <GitHub sx={{ fontSize: "1.5rem" }} />
          </Link>
        </Toolbar>
      </Container>
      </AppBar>
      <Stack height="100vh" justifyContent="center">
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
      </Stack>
    </ThemeProvider>
  );
}

export default App;
