import { Box, Typography, Link as MuiLink, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1A2C1D',
        color: '#86A88B',
        pt: { xs: 7, md: 9 },
        pb: 4,
        px: { xs: 3, sm: 5, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1100px',
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: 'repeat(3, 1fr)',
          },
          gap: { xs: 5, md: 6 },
        }}
      >

        {/* Column 1: Brand */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: '1.15rem',
            }}
          >
            Fihliwe Klaas{' '}
            <Box component="span" sx={{ color: '#B584B1' }}>
              Psychology
            </Box>
          </Typography>
          <Typography
            sx={{
              lineHeight: 1.8,
              maxWidth: '300px',
              mb: 2.5,
              fontSize: '0.85rem',
            }}
          >
            A safe space for healing, growth, and self-discovery. Supporting children, teens, and young adults in South Africa.
          </Typography>
          <Typography sx={{ opacity: 0.6, fontSize: '0.75rem' }}>
            Registered with the HPCSA
          </Typography>
        </Box>

        {/* Column 2: Quick Links */}
        <Box>
          <Typography
            variant="overline"
            sx={{
              color: 'white',
              fontWeight: 600,
              letterSpacing: '0.15em',
              display: 'block',
              mb: 2.5,
              fontSize: '0.7rem',
            }}
          >
            Quick Links
          </Typography>
          <Stack spacing={1.5}>
            {['About', 'Services', 'FAQ', 'Resources', 'Contact'].map((text) => (
              <MuiLink
                key={text}
                component={Link}
                to={`/${text.toLowerCase()}`}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'white' },
                }}
              >
                {text}
              </MuiLink>
            ))}
          </Stack>
        </Box>

        {/* Column 3: Get in Touch */}
        <Box>
          <Typography
            variant="overline"
            sx={{
              color: 'white',
              fontWeight: 600,
              letterSpacing: '0.15em',
              display: 'block',
              mb: 2.5,
              fontSize: '0.7rem',
            }}
          >
            Get in Touch
          </Typography>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <EmailOutlinedIcon sx={{ fontSize: '1.1rem', opacity: 0.8 }} />
              <Typography sx={{ fontSize: '0.875rem' }}>
                fmklaas@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <PhoneOutlinedIcon sx={{ fontSize: '1.1rem', opacity: 0.8 }} />
              <Typography sx={{ fontSize: '0.875rem' }}>
                +27 (0) 63 156 7054
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <ChatBubbleOutlineIcon sx={{ fontSize: '1.1rem', opacity: 0.8 }} />
              <MuiLink
                href="https://wa.me/27631567054"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { color: 'white' },
                }}
              >
                WhatsApp
              </MuiLink>
            </Box>
          </Stack>
        </Box>

      </Box>

      <Divider sx={{ mt: { xs: 6, md: 8 }, mb: 3.5, borderColor: '#2D4131' }} />

      <Box
        sx={{
          maxWidth: '1100px',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
          opacity: 0.55,
        }}
      >
        <Typography sx={{ fontSize: '0.75rem' }}>
          © 2026 Fihliwe Klaas Psychology. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography sx={{ fontSize: '0.75rem' }}>Created by</Typography>
          <MuiLink
            href="https://bethusile.co.za"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: '1.2rem',
              color: '#B584B1',
              textDecoration: 'none',
              '&:hover': { color: 'white' },
            }}
          >
            Betana Tech
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;