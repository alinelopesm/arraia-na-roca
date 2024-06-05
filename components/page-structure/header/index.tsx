import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useTheme, useMediaQuery } from '@mui/material';
import ThemeToggleButton from '@/components/theme-toggle-button';
import drawer from './drawer';
import NavDesktop from './nav-desktop';

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <Toolbar>
          <ThemeToggleButton />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!isMobile && (
            <NavDesktop />
          )}
        </Toolbar>
      </AppBar>
      {isMobile &&
        <Drawer
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          variant="temporary"
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' },
            display: { xs: isMobile ? 'block' : 'none' },
          }}
        >
          {drawer}
        </Drawer>
      }
    </React.Fragment>
  );
};

export default Header;
