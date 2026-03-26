import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/Blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#FDFBF9', color: '#1A2C1D', boxShadow: 'none', borderBottom: '1px solid #eee' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', width: '100%', mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  {/* Logo */}
  <Box
        component="img"
        src={logoImg}
        alt="Logo"
        sx={{
        width: 70,
        height: 70,
        borderRadius: '50%', 
        objectFit: 'fill'
        }}
    />
    
        {/* Site name */}
        <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: 'none', color: 'inherit', fontFamily: 'serif', fontWeight: 'bold' }}
        >
            Fihliwe Klaas
        </Typography>
    </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item.label} component={Link} to={item.path} sx={{ color: '#666', fontSize: '0.75rem', ml: 2 }}>
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Toggle */}
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Menu Sidebar */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.label} component={Link} to={item.path}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;