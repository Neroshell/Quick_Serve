import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import style from './Navbar.module.css';

interface NavbarProps {
  logoSrc: string;
  title: string;
  pages: string[];
  onLoginClick?: () => void;
  onPageClick?: (page: string) => void;
  additionalActions?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, title, pages, onLoginClick, onPageClick, additionalActions }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page: string) => {
    if (onPageClick) {
      onPageClick(page);  // Trigger the onPageClick prop callback
    }
    handleCloseNavMenu(); // Close the menu after selection (for mobile)
  };

  return (
    <AppBar className={style.Appbar} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton>
            <img className={style.logo_img} src={logoSrc} alt="Logo" />
          </IconButton>

          <Typography
            variant="h6"
            className={style.brand_name}
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'block', md: 'block' },
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              sx={{ marginLeft: 'auto' }}
              size="large"
              aria-label="open menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, ml: 5, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: 'var(--text-color)',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'var(--light-hover)',
                    color: 'var(--primary-color)',
                  },
                }}
                onClick={() => {
                  onPageClick && onPageClick(page); // Trigger `onPageClick` if it exists
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Login Button (Desktop Only) */}
          {onLoginClick && (
            <Button
              variant="contained"
              onClick={onLoginClick}
              sx={{
                display: { xs: 'none', md: 'flex' },
                bgcolor: 'var(--primary-color)',
                padding: '10px 30px',
                mr: 4,
              }}
            >
              Login
            </Button>
          )}

          {/* Additional Actions (Optional) */}
          {additionalActions}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
