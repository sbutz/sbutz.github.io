import { createTheme, ThemeProvider, Stack, Typography } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack height="100vh" justifyContent="center">
        <Typography variant='h1' textAlign="center">
          Stefan Butz
        </Typography>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
