import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lx">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Bank of React
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
