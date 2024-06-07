import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useTheme, useMediaQuery } from '@mui/material';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import drawer from './drawer';
import NavDesktop from './nav-desktop';
import { useThemePaletteMode } from '@/context/theme-context';

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { themePallete } = useThemePaletteMode();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isLightTheme = themePallete === 'light';
  const appBarBackgroundColor = isLightTheme ? 'rgba(0, 0, 0, 0.7)' : 'rgba(22, 22, 22, 0.8)';

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: appBarBackgroundColor, paddingX: 0, margin: 0}}>
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
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          variant="temporary"
          sx={{
            '& .MuiDrawer-paper':
            { 
              boxSizing: 'border-box',
              width: '240px',
              backgroundColor: isLightTheme ? 'none' : 'rgba(22, 22, 22, 1)',
              color: isLightTheme ? 'none' : 'white',
              hover: "bg-light-50"
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
            display: { xs: isMobile ? 'block' : 'none' },
          }}
        >
          {drawer}
        </Drawer>
      }
    </>
  );
};

export default Header;
