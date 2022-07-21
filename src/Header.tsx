import {  AppBar, Toolbar, IconButton, Link, Container, Typography } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
    return (
    <AppBar position="sticky" color="transparent" elevation={1}>
      <Container maxWidth="md">
        <Toolbar disableGutters={true}>
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            underline="hover"
            sx={{ flexGrow: 1, pl: 1 }}
          >
            <Typography variant="h5" component="div">
              SB
            </Typography>
          </Link>
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
    );
}