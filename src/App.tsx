import { createTheme, ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';

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
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
